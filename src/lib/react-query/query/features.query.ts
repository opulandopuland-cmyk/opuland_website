import { useQuery } from "@tanstack/react-query";
import { getAboutFeatures } from "../actions/features.action";
import { QUERY_KEYs } from "../keys";

export const useGetAboutFeatures = () =>
  useQuery({ queryKey: [QUERY_KEYs.FEATURES], queryFn: getAboutFeatures });
