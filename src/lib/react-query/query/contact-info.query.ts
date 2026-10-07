import { useQuery } from "@tanstack/react-query";
import {
  getContactDetails,
  getSocialLinks,
} from "../actions/contact-info.action";
import { QUERY_KEYs } from "../keys";

export const useGetContactDetails = () =>
  useQuery({
    queryKey: [QUERY_KEYs.CONTACT_INFO],
    queryFn: getContactDetails,
  });

export const useGetSocialLinks = () =>
  useQuery({
    queryKey: [QUERY_KEYs.CONTACT_INFO, "social"],
    queryFn: getSocialLinks,
  });
