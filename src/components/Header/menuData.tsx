import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Signal Integriity IC",
        path: "/signal-integriity-ic",
        newTab: false,
      },
      {
        id: 22,
        title: "LDO Products",
        path: "/lDO-Products",
        newTab: false,
      },
      {
        id: 23,
        title: "Clock Divers IC",
        path: "/clock-divers-ic",
        newTab: false,
      },
      {
        id: 24,
        title: "RF IC",
        path: "/rf-ic",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Silicon IP",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "PLL IP",
        path: "/pll-ip",
        newTab: false,
      },
      {
        id: 32,
        title: "SERDES IP",
        path: "/serdes-ip",
        newTab: false,
      },
      {
        id: 33,
        title: "Analog-Glue IP",
        path: "/analog-glue-ip",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
