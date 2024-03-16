import { useEffect, useState } from "react";
import { ExecutionResult } from "graphql";
import { PointsicleSubgraphsDocument, PointsicleSubgraphsQuery, execute } from "~~/.graphclient";

export function usePointsicleSubgraphs() {
  const [result, setResult] = useState<ExecutionResult<PointsicleSubgraphsQuery>>();

  useEffect(() => {
    execute(PointsicleSubgraphsDocument, {}).then(result => {
      setResult(result);
      console.log(result);
    });
  }, []);

  return { data: result };
}
