import { useQuery } from "@tanstack/react-query";
import {
  getWhyInvestCards,
  getPartnerChips,
  getInvestStrategies,
  getInvestProcessSteps,
} from "../actions/invest.action";
import { QUERY_KEYs } from "../keys";

export const useGetWhyInvestCards = () =>
  useQuery({ queryKey: [QUERY_KEYs.WHY_INVEST], queryFn: getWhyInvestCards });

export const useGetPartnerChips = () =>
  useQuery({ queryKey: [QUERY_KEYs.PARTNERS], queryFn: getPartnerChips });

export const useGetInvestStrategies = () =>
  useQuery({
    queryKey: [QUERY_KEYs.INVEST_STRATEGIES],
    queryFn: getInvestStrategies,
  });

export const useGetInvestProcessSteps = () =>
  useQuery({
    queryKey: [QUERY_KEYs.INVEST_PROCESS],
    queryFn: getInvestProcessSteps,
  });
