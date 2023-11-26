import { Layout } from "antd";
const { Footer } = Layout;
interface IfootProp {
  text: string;
}
export const CustomerFoot: React.FC<IfootProp> = (footProp) => {
  return <Footer style={{ textAlign: "center" }}>{footProp.text}</Footer>;
};
