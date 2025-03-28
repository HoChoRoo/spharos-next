import CartIcon from "@/components/ui/icons/CartIcon";
import GnbMenuIcon from "@/components/ui/icons/GnbMenuIcon";
import searchIcon from "@/components/ui/icons/SearchIcon";
import { mainTabMenuType } from "@/types/initialDataTypes";

export const navMenuData = [
  {
    id: 1,
    title: "gnb",
    icon: GnbMenuIcon,
  },
  { id: 2, title: "search", icon: searchIcon },
  { id: 3, title: "cart", icon: CartIcon },
];

export const mainTabMenuData: mainTabMenuType[] = [
  {
    id: 1,
    title: "전체",
    link: "/",
  },
];
