import { useQuery } from "@tanstack/react-query";
import { getAudiencePathways } from "../actions/audience-pathways.action";
import { QUERY_KEYs } from "../keys";

export const useGetAudiencePathways = () =>
  useQuery({
    queryKey: [QUERY_KEYs.AUDIENCE_PATHWAYS],
    queryFn: getAudiencePathways,
  });
