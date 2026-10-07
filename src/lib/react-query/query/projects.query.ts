import { useQuery } from "@tanstack/react-query";
import { getProjects, getTeamExperience } from "../actions/projects.action";
import { QUERY_KEYs } from "../keys";

export const useGetProjects = () =>
  useQuery({ queryKey: [QUERY_KEYs.PROJECTS], queryFn: getProjects });

export const useGetTeamExperience = () =>
  useQuery({
    queryKey: [QUERY_KEYs.TEAM_EXPERIENCE],
    queryFn: getTeamExperience,
  });
