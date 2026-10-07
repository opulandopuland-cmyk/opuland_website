import { useQuery } from "@tanstack/react-query";
import { getNavLinks } from "../actions/nav.action";
import { QUERY_KEYs } from "../keys";

export const useGetNavLinks = () =>
  useQuery({ queryKey: [QUERY_KEYs.NAV], queryFn: getNavLinks });
