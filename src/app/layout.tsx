"use client";
import React from "react";
import { Layout, theme } from "antd";
import { navItem } from "../types/nav";
const { Content } = Layout;
import Nav from "../componet/Layout/nav";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import Sidebar from "../componet/Layout/sidebar";
import { CustomerFoot } from "../componet/Layout/CustomerFoot";
import CustomerHeader from "../componet/Layout/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const sidebarClick = (curV) => {
  //   let curNavArr: navItem[] = [];
  //   if (curV.length === 0) return;
  //   const parentLink: string = curV[0]?.children ? "label" : "";
  //   curNavArr.push({ name: curV[0]?.label, link: parentLink });
  //   setNav(curNavArr);
  // };
  // const [collapsed, setCollapsed] = useState(false);
  // const [navArr, setNav] = useState([] as navItem[]);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Layout style={{ minHeight: "100vh" }}>
            <Sidebar iscollapsed={false} selectedKeys="" />
            <Layout>
              <CustomerHeader bg={colorBgContainer} />
              <Content style={{ margin: "0 16px" }}>
                <Nav nav1={[]} />
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                  }}
                >
                  {children}
                </div>
              </Content>
              <CustomerFoot text=" Ant ©2023 Created by Ant" />
            </Layout>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
