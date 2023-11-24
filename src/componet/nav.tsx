import React from "react";
import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
// import { Interface } from "readline";
interface IProps {
  nav1: string;
}
const Nav: React.FC<IProps> = (prop) => {
  const { nav1 } = prop;
  let items: ItemType[] = [
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: nav1,
    },
  ];
  return <Breadcrumb items={items} />;
};

export default Nav;
