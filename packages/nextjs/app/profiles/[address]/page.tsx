import Link from "next/link";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "~~/components/ui/button";
import { getAllPointsiclesQLData, Version, DeploymentSchema } from "~~/app/calls/getAllPointsicles";

function getNumericValueFromString(str: string): number {
  const numericPart = str.replace(/\D/g, '');
  return numericPart ? parseInt(numericPart, 10) : 0;
}

let latestVersion: Version | null = null;


const Profile = async ({ params }: {
  params: {
    address: string
  }
}) => {


  let data: DeploymentSchema = await getAllPointsiclesQLData()

  let manifestIds = data.data.subgraphDeploymentSchemas
    .map((deploySchema) => {


      let highestNumericLabelValue = 0;
      deploySchema.manifest.deployment.versions.forEach((version) => {
        const numericLabelValue = getNumericValueFromString(version.metadata.label);
        if (!latestVersion || numericLabelValue > highestNumericLabelValue) {
          latestVersion = version;
          highestNumericLabelValue = numericLabelValue;
        }
      })

      let sg = deploySchema

      sg.manifest.deployment.versions = [latestVersion!]

      return sg
    })

    .filter((subgraph) => {

      return subgraph.manifest.deployment.activeSubgraphCount !== 0
    })
    .map((subgraph) => {

      return subgraph.manifest.deployment.versions[0].subgraph.id
    })


  let allEndpoints: string[] = manifestIds.map((manifestId: string) => {

    return `https://gateway-arbitrum.network.thegraph.com/api/${'e8c6e4f2a7fc3b832f3917a050e8057a'}/subgraphs/id/${manifestId}`

  })

  let pnclCalls = allEndpoints.map((endpoint) => {


    const call = async () => {
      const QUERY = `
      query { 
        pointsicleUser(id: "${params.address}") {
          id
          points
          questParticipations {
            id
            participant {
              id
            }
            quest {
              campaign {
                id
                displayName
                description
              }
              description
            }
          }
        }
      }`;


      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: QUERY
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from GraphQL endpoint');
      }

      const data = await response.json();
      return data;
    };

    return call()

  })

  let t = await Promise.all(pnclCalls)

  let td = t.map((res, index) => {
    return { ...res, subgraphID: manifestIds[index] }
  })

  let userParticipations = td.flatMap(gqlCall => {
    return gqlCall
  }).filter(p => !p.errors).filter(p => p.data.pointsicleUser !== null)


  if (!userParticipations || !userParticipations[0]) {
    return <>User has not completed any quests yet!</>
  }
  

  return (

    <>
      <div>
        <h2 className="text-4xl font-bold tracking-tight">Participations</h2>
        <p className="text-xl text-muted-foreground">
          Users participations
        </p>
      </div>
      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          userParticipations
            .map((subgraph: any) => {
              return (
                <Link key={subgraph.subgraphID} href={`/profiles/${params.address}/participation/${subgraph.subgraphID}`}>
                  <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                    <div className="card-content p-6">
                      <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">{subgraph.data.pointsicleUser.questParticipations[0].quest.campaign.displayName}</h2>
                      <p className="text-gray-600 mb-4">
                        Total Points: {subgraph.data.pointsicleUser.points}
                      </p>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-semibold">Goals Reached: {subgraph.data.pointsicleUser.questParticipations.length}</span>
                        </div>
                        <div className="flex justify-between items-center">
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>)
            })
        }
      </section>
    </>)
}


export default Profile;
