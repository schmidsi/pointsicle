
import { Progress } from "@/components/ui/progress"








const DashboardPage = async ({ params }: {
  params: {
    address: string,
    participation: string
  }
}) => {

  const call = async () => {
    const QUERY = `
    query {
      pointsicleCampaigns {
        id
        displayName
        description
      }     
      
      pointsicleUser(id: "${params.address}") {
        points
        questParticipations {
        id
        participant {
          id
        }
  
        quest {
          id
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

    const response = await fetch(`https://gateway-arbitrum.network.thegraph.com/api/${'e8c6e4f2a7fc3b832f3917a050e8057a'}/subgraphs/id/${params.participation}`, {
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




  let request = await call()

  console.log(request, ' ewqewqeqqwe');
  

  return (
    <>

      <div className="hidden max-w-screen-xl w-full mt-16 mx-auto h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">User Participation</h2>
            <p className="text-xl text-muted-foreground">
              Complete these tasks to earn rewards
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        {/* <hr /> */}

        <section className="w-full mb-10">
          <h2 className="text-2xl font-bold mb-5">Quests</h2>
          <p className="text-lg text-muted-foreground">
            Complete these quests to earn prizes
          </p>
          <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">

            {/* <div className="flex justify-between items-center border-b-2 border-gray-200">
              <div className="w-full text-left p-5 focus:outline-none">
                <h3 className="font-semibold text-lg">Quest 1: Sign Up</h3>
                <p className="text-gray-500">Sign up to our platform to start earning points.</p>
              </div>
              <span className="pr-5 font-semibold">+100 Points</span>
            </div> */}

            {
              request.data.quests.map((quest: any, index: number) => {

                return (
                  <div key={quest.id} className="flex justify-between items-center border-b-2 border-gray-200">
                    <div className="w-full text-left p-5 focus:outline-none">
                      <h3 className="font-semibold text-lg">Quest {index + 1}</h3>
                      <p className="text-gray-500">{quest.description}</p>
                    </div>
                    <span className="mr-8 text-right w-24 whitespace-nowrap font-semibold">{request.data.pointsicleUser.questParticipations.find((parti: any) => {
                      return parti.quest.id == quest.id
                      }) ? `Done!` : `+${quest.points} Points`} </span>
                  </div>
                )
              })
            }
          </div>
        </section>
        <p className="text-lg text-muted-foreground">

        </p>
      </div>
    </>
  );
};

export default DashboardPage;
