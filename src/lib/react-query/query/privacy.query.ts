import { useQuery } from "@tanstack/react-query";
import { getPrivacySections } from "../actions/privacy.action";
import { QUERY_KEYs } from "../keys";

export const useGetPrivacySections = () =>
  useQuery({
    queryKey: [QUERY_KEYs.PRIVACY],
    queryFn: getPrivacySections,
  });
