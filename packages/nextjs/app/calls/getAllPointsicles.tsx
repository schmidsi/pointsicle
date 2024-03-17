export interface Version {
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

export interface DeploymentSchema {
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

export const getAllPointsiclesQLData = async () => {
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
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from GraphQL endpoint');
  }

  const data = await response.json();
  return data;
};