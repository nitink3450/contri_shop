// import { appConfig } from "@app/config";
// import AppConfig from "@config/appConfig";
import AppConfig from "@config/appConfig";
import Web3 from "web3";

export const defaultWeb3 = (type: "http" | "local" = "local") => {
  let provider = null;
  if (type === "local") {
    provider = Web3.givenProvider;
  } else {
   // provider = new Web3.providers.HttpProvider(AppConfig.infuraProvider);
  }
  return new Web3(provider);
};
