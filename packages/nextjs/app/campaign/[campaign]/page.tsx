import CampaignPage from './data'

  const campaignCall = async (subgraphId: string) => {
    const QUERY = `
    query {
      pointsicleCampaigns {
        id
        displayName
        description
      }     
      
      pointsicleUsers(orderBy: points, orderDirection: desc) {
        points
        id
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

    
    const response = await fetch(`https://gateway-arbitrum.network.thegraph.com/api/${'e8c6e4f2a7fc3b832f3917a050e8057a'}/subgraphs/id/${subgraphId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: QUERY,
 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from GraphQL endpoint');
    }

    const data = await response.json();
    return data;
  };


const DashboardPage = async ({params}: {
  params: {
    campaign: string
  }
}) => {


  let data = await campaignCall(params.campaign)
  
  return (
    <>
      <CampaignPage props={data}>
      </CampaignPage>
    </>
  );
};

export default DashboardPage;


