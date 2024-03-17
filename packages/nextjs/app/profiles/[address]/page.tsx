import Link from "next/link";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "~~/components/ui/button";

const Profile = ({ params }: {
  params: {
    address: string
  }
}) => {


  return (

    <>
      <div>
        <h2 className="text-4xl font-bold tracking-tight">Participations</h2>
        <p className="text-xl text-muted-foreground">
          Users participations
        </p>
      </div>
      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* <Link href={`profile/participation/a`}>
          <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
            <div className="card-content p-6">
              <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">Campaign 1</h2>
              <p className="text-gray-600 mb-4">
                This is a description of the first campaign. It provides some details about the campaign.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Points: 120/200</span>
                  <span className="text-gray-700 font-semibold">Participants: 150</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-700">
                  <div
                    className={`${true ? 'bg-stone-400' : 'bg-green-400'} h-3 rounded-full`}
                    style={{
                      width: "60%",
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray
                    -500">Time left: 22h 15m</span>
                </div>

              </div>
            </div>
          </div>
        </Link> */}




        {
          []

            .filter((subgraph: any) => {
              return (!subgraph.errors)

            })

            .map((subgraph: any) => {
              return (

                <Link key={subgraph.subgraphID} href={`campaign/${subgraph.subgraphID}`}>
                  <div className="card bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden">
                    <div className="card-content p-6">
                      <h2 className="card-title text-2xl font-bold text-gray-700 mb-2">{subgraph.data.pointsicleCampaigns[0].displayName}</h2>
                      <p className="text-gray-600 mb-4">
                        {subgraph.data.pointsicleCampaigns[0].description}
                      </p>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-semibold">Participants: {subgraph.data.pointsicleUsers.length}+</span>
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
