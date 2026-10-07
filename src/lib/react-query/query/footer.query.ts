import { useQuery } from "@tanstack/react-query";
import { getFooterColumns } from "../actions/footer.action";
import { QUERY_KEYs } from "../keys";

export const useGetFooterColumns = () =>
  useQuery({
    queryKey: [QUERY_KEYs.FOOTER_LINKS],
    queryFn: getFooterColumns,
  });
