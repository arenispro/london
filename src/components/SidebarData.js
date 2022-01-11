import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Big Ben",
    path: "/bigben",
    icon: <FaIcons.FaClock />,
    cName: "nav-text",
  },
  {
    title: "Buckingham Palace",
    path: "/palace",
    icon: <AiIcons.AiFillCrown />,
    cName: "nav-text",
  },
  {
    title: "London Eye",
    path: "/londoneye",
    icon: <AiIcons.AiFillEye />,
    cName: "nav-text",
  },

  {
    title: "Tower of London",
    path: "/tower",
    icon: <GiIcons.GiHeartTower />,
    cName: "nav-text",
  },
  {
    title: "V&A Museum",
    path: "/museum",
    icon: <MdIcons.MdMuseum />,
    cName: "nav-text",
  },
];
