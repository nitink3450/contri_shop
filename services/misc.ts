import axios, { AxiosResponse } from "axios";
const newsletterHost = "https://dig-common-api.herokuapp.com/";
export const subscribeToNewsletter = (data: any): Promise<AxiosResponse> => {
  return axios.post(`${newsletterHost}newsletter/subscribe`, data);
};
