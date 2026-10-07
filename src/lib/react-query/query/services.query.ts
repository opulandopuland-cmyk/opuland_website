import { useQuery } from "@tanstack/react-query";
import {
  getWhatWeDoServices,
  getConsultancyServices,
  getAdvisoryServices,
  getDevelopmentAcquisitionCards,
} from "../actions/services.action";
import { QUERY_KEYs } from "../keys";

export const useGetWhatWeDoServices = () =>
  useQuery({
    queryKey: [QUERY_KEYs.WHAT_WE_DO],
    queryFn: getWhatWeDoServices,
  });

export const useGetConsultancyServices = () =>
  useQuery({
    queryKey: [QUERY_KEYs.CONSULTANCY_SERVICES],
    queryFn: getConsultancyServices,
  });

export const useGetAdvisoryServices = () =>
  useQuery({
    queryKey: [QUERY_KEYs.ADVISORY_SERVICES],
    queryFn: getAdvisoryServices,
  });

export const useGetDevelopmentAcquisitionCards = () =>
  useQuery({
    queryKey: [QUERY_KEYs.DEVELOPMENT_ACQUISITION],
    queryFn: getDevelopmentAcquisitionCards,
  });
