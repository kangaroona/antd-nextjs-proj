"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { navItem } from "../types/nav";
// import "@/theme/globals.scss";
const { Header, Content, Footer, Sider } = Layout;
import Nav from "../componet/nav";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import Sidebar from "../componet/sidebar";
import { StringDecoder } from "string_decoder";
// import { useRouter } from "next/navigation";
type MenuItem = Required<MenuProps>["items"][number];

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

const items: MenuItem[] = [
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const sidebarClick = (curV) => {
    console.log("curV", curV);
    let curNavArr: navItem[] = [];
    if (curV.length === 0) return;
    const parentLink: string = curV[0]?.children ? "label" : "";
    console.log(
      "🚀 ~ file: layout.tsx:68 ~ sidebarClick ~ curV[0].children:",
      curV[0]?.children
    );
    curNavArr.push({ name: curV[0]?.label, link: parentLink });
    setNav(curNavArr);
  };
  const [collapsed, setCollapsed] = useState(false);
  const [navArr, setNav] = useState([] as navItem[]);
  // const router = useRouter();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Layout style={{ minHeight: "100vh" }}>
            <Sidebar
              iscollapsed={collapsed}
              selectedKeys="1"
              clickCallback={sidebarClick}
            />
            <Layout>
              <Header style={{ padding: 0, background: colorBgContainer }}>
                welcome
              </Header>

              <Content style={{ margin: "0 16px" }}>
                <Nav nav1={navArr} />
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                  }}
                >
                  Bill is a cat.
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2023 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
