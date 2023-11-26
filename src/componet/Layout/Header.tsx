import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
interface IheaderProp {
  bg: string;
}
function CustomerHeader(headerProps: IheaderProp) {
  const style = { padding: 0, background: headerProps.bg };
  return <Header style={style}>welcome</Header>;
}

export default CustomerHeader;
