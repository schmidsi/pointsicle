
import DashboardData from './data'

// import { columns } from "./_components/columns"
// import { DataTable } from "./_components/data-table"
// import { UserNav } from "./_components/user-nav"
// import { taskSchema } from "./_data/schema"

const fetchGraphQLData = async () => {
  const QUERY = `
  query {
    subgraphDeploymentSchemas(
      where: {schema_contains: "type PointsicleCampaign @entity(immutable: true)"}
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
  // query {

  //   pointsicleCampaigns(first: 5) {
  //     id
  //     displayName
  //   }

  //   pointsicleUsers(orderBy: points, orderDirection: desc) {
  //     points
  //   }

  //   quests {
  //     id
  //     description
  //     points
  //   }

  // }`;


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


const DashboardPage = async () => {


  let data = await fetchGraphQLData()
  // console.log(data);

  let manifestIds = data.data.subgraphDeploymentSchemas.filter((subgraph: any) => {

    return subgraph.manifest.deployment.activeSubgraphCount !== 0

  }).map((subgraph: any) => {

    return subgraph.manifest.id

  })

  console.log(manifestIds, 'mids');


  return (
    <>

      <DashboardData data={data}>


      </DashboardData>




    </>
  );
};

export default DashboardPage;
