import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

const CampaignPage = ({ props }: {
  props: {
    data: any
  }
}) => {

  if (!props.data) {
    return <>GraphQL request returned an error for this one, oops</>
  }

  

  const tasks = props.data.pointsicleUsers ? props.data.pointsicleUsers.map((user: any) => {

    // console.log(user, ' useruseruseruseruser');

    return {
      id: user.id,
      points: user.points
    }
  }

  ) : []


  return (
    <>
      <div className="md:hidden">

      </div>
      <div className="hidden max-w-screen-xl w-full mt-16 mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">{props.data.pointsicleCampaigns[0].displayName} Campaign</h2>
            <p className="text-xl text-muted-foreground">
              {props.data.pointsicleCampaigns[0].description}
            </p>
          </div>
        </div>

        <section className="w-full mb-10">
          <h2 className="text-2xl font-bold mb-5">Quests</h2>
          <p className="text-lg text-muted-foreground">
            Complete these quests to earn prizes:
          </p>
          <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">

            {
              props.data.quests.map((quest: any, index: number) => {

                return (
                  <div key={quest.id} className="flex justify-between items-center border-b-2 border-gray-200">
                    <div className="w-full text-left p-5 focus:outline-none">
                      <h3 className="font-semibold text-lg">Quest {index + 1}</h3>
                      <p className="text-gray-500">{quest.description}</p>
                    </div>
                    <span className="mr-8 text-right w-24 whitespace-nowrap font-semibold">+{quest.points} Points</span>
                  </div>
                )
              })
            }

          </div>
        </section>
        <hr />
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <p className="text-lg text-muted-foreground">
          Top 100 Participants:
        </p>

        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
};

export default CampaignPage;
