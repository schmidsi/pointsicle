import { getAllPointsiclesQLData } from "./getAllPointsicles";

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



export const getAllPointsiclesIds = async () => {


  function getNumericValueFromString(str: string): number {
    const numericPart = str.replace(/\D/g, '');
    return numericPart ? parseInt(numericPart, 10) : 0;
  }
  let latestVersion: Version | null = null;


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

    return manifestIds

}