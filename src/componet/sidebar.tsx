import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
const { Sider } = Layout;
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
interface IsidebarProp {
  iscollapsed: boolean;
  defaultSelectedKeys: string;
  clickCallback: Function;
}
type MenuItem = Required<MenuProps>["items"][number];

export const Sidebar: React.FC<IsidebarProp> = (sidebarProp) => {
  const [collapsed, setCollapsed] = useState(sidebarProp.iscollapsed);
  const [selectedKeys, setSelectedKeys] = useState(
    sidebarProp.defaultSelectedKeys
  );
  const [items, setItems] = useState([] as MenuItem[]);
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  useEffect(() => {
    const itemList: MenuItem[] = [
      getItem("Option 1", "1", <AppstoreOutlined />),
      getItem("Option 2", "2", <BarChartOutlined />),
      getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "3"),
        getItem("Bill", "4"),
        getItem("Alex", "5"),
      ]),
      getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
      ]),
      getItem("Files", "9", <CloudOutlined />),
    ];
    setItems(itemList);
  }, []);
  const clickHandle: MenuProps["onClick"] = (e) => {
    setSelectedKeys(e.key);
    sidebarProp.clickCallback(e.key);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        selectedKeys={[selectedKeys]}
        items={items}
        onClick={clickHandle}
      />
    </Sider>
  );
};

export default Sidebar;
