import React from "react";
import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { navItem } from "../../types/nav";
// import { Interface } from "readline";
interface IProps {
  nav1: navItem[];
}
const Nav: React.FC<IProps> = (prop) => {
  const { nav1 } = prop;
  let items: ItemType[] = [
    {
      title: "Home",
    },
  ];

  for (const item of nav1) {
    if (item.link) {
      items.push({ title: <a href="{item.link}">{item.name}</a> });
    } else {
      items.push({ title: `${item.name}` });
    }
  }
  console.log("🚀 ~ file: nav.tsx:24 ~ items:", items);
  return <Breadcrumb items={items} />;
};

export default Nav;
