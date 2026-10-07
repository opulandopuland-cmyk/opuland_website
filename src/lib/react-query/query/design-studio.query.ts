import { useQuery } from "@tanstack/react-query";
import {
  getDesignServices,
  getDesignProcessSteps,
  getPortfolioItems,
} from "../actions/design-studio.action";
import { QUERY_KEYs } from "../keys";

export const useGetDesignServices = () =>
  useQuery({
    queryKey: [QUERY_KEYs.DESIGN_SERVICES],
    queryFn: getDesignServices,
  });

export const useGetDesignProcessSteps = () =>
  useQuery({
    queryKey: [QUERY_KEYs.DESIGN_PROCESS],
    queryFn: getDesignProcessSteps,
  });

export const useGetPortfolioItems = () =>
  useQuery({ queryKey: [QUERY_KEYs.PORTFOLIO], queryFn: getPortfolioItems });
