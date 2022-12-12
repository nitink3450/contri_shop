import { FC } from "react";
import {
  Account,
  Activity,
  User,
  Email,
  Password,
  Logout,
  Home,
  Search,
  Bitcoin,
  Edit,
  EOC,
  NFT,
  Wallet,
} from "./DynamicIconList";

interface Props {
  type:
    | "Account"
    | "Activity"
    | "User"
    | "Email"
    | "Password"
    | "Logout"
    | "Home"
    | "Search"
    | "Edit"
    | "EOC"
    | "NFT"
    | "Bitcoin"
    | "Wallet";
  className?: string;
}

const Components = {
  Account,
  Activity,
  User,
  Email,
  Password,
  Logout,
  Home,
  Search,
  Bitcoin,
  Edit,
  EOC,
  NFT,
  Wallet,
};
const DynamicIcon: FC<Props> = ({ type, className = "" }) => {
  if (typeof Components[type] !== undefined) {
    const Component = Components[type];
    return <Component className={className} />;
  }

  return <></>;
};

export default DynamicIcon;
