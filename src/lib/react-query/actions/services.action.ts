import {
  whatWeDoServices,
  consultancyServices,
  advisoryServices,
  developmentAcquisitionCards,
} from "@/data/services";

export const getWhatWeDoServices = async () => whatWeDoServices;
export const getConsultancyServices = async () => consultancyServices;
export const getAdvisoryServices = async () => advisoryServices;
export const getDevelopmentAcquisitionCards = async () =>
  developmentAcquisitionCards;
