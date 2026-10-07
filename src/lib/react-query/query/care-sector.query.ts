import { useQuery } from "@tanstack/react-query";
import {
  getCareAudienceCards,
  getCareJourneySteps,
} from "../actions/care-sector.action";
import { QUERY_KEYs } from "../keys";

export const useGetCareAudienceCards = () =>
  useQuery({
    queryKey: [QUERY_KEYs.CARE_AUDIENCE],
    queryFn: getCareAudienceCards,
  });

export const useGetCareJourneySteps = () =>
  useQuery({
    queryKey: [QUERY_KEYs.CARE_JOURNEY],
    queryFn: getCareJourneySteps,
  });
