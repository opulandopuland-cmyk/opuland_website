import { useQuery } from "@tanstack/react-query";
import { getHomeStats, getProjectsStats } from "../actions/stats.action";
import { QUERY_KEYs } from "../keys";

export const useGetHomeStats = () =>
  useQuery({ queryKey: [QUERY_KEYs.STATS], queryFn: getHomeStats });

export const useGetProjectsStats = () =>
  useQuery({
    queryKey: [QUERY_KEYs.PROJECTS_STATS],
    queryFn: getProjectsStats,
  });
