
import DashboardData from './data'

export const revalidate = '10'

const fetchGraphQLData = async () => {
  const QUERY = `
  query {
    subgraphDeploymentSchemas(
      where: {schema_contains: "type PointsicleCampaign"}
    ) {
      id
      manifest {
        id
        deployment {
          activeSubgraphCount
          id
          versions {
            metadata {
              label
            }
            createdAt
            subgraph {
              id
              metadata {
                displayName
                description
                image
                nftImage
              }
            }
          }
        }
      }
    }
  }`;




  const response = await fetch('https://gateway-arbitrum.network.thegraph.com/api/e8c6e4f2a7fc3b832f3917a050e8057a/subgraphs/id/DZz4kDTdmzWLWsV373w2bSmoar3umKKH9y82SUKr5qmp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: QUERY,
      // variables: {
      //   varName: '', 
      // },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from GraphQL endpoint');
  }

  const data = await response.json();
  return data;
};


interface Version {
  createdAt: number;
  metadata: {
    label: string;
  };
  subgraph: {
    id: string;
    metadata: {
      description: string | null;
      displayName: string;
      image: string;
      nftImage: string;
    };
  };
}

interface DeploymentSchema {
  data: {
    subgraphDeploymentSchemas: [{
      id: string;
      manifest: {
        deployment: {
          activeSubgraphCount: number;
          id: string;
          versions: Version[];
        };
        id: string;
      };
    }]
  }

}

function getNumericValueFromString(str: string): number {
  const numericPart = str.replace(/\D/g, '');
  return numericPart ? parseInt(numericPart, 10) : 0;
}
let latestVersion: Version | null = null;
const DashboardPage = async () => {


  let data: DeploymentSchema = await fetchGraphQLData()

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
        pointsicleCampaigns {
          id
          displayName
          description
        }     
        
        pointsicleUsers(orderBy: points, orderDirection: desc) {
          points
          questParticipations {
          id
          participant {
            id
          }
    
          quest {
            description
          }  
          }
        }
          quests {
            id
            description
            points
          }
      }`;


      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: QUERY,
          // variables: {
          //   varName: '', 
          // },
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


  return (
    <>
      <DashboardData data={td}>
      </DashboardData>
    </>
  );
};

export default DashboardPage;
