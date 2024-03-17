import Link from "next/link";

const DashboardData = (data: any) => {



  return (
    <>
      <div className="md:hidden">

      </div>

      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <header className="w-full mb-6">
          <h2 className="text-4xl font-bold tracking-tight mb-10">Explore Campaigns</h2>
        </header>
        <p className="text-lg text-muted-foreground">
          Top Campaigns
        </p>


        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            data.data

              .filter((subgraph: any) => {
                return (!subgraph.errors)

              })

              .map((subgraph: any) => {
                return <Link key={subgraph.subgraphID} href={`campaign/${subgraph.subgraphID}`}>
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
                </Link>
              })
          }
        </section>
      </div>
    </>
  );
};

export default DashboardData;
