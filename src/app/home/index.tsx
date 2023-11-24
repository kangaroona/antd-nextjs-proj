import { cookies } from "next/headers";
// import { CustomLayout } from "@/components";
// import styles from "./page.module.scss";
import Nav from "../../componet/nav";
const Home = () => {
  const _token = cookies().get("token")?.value || "";
  const _userInfoStr = cookies().get("userInfo")?.value;
  const userInfo = _userInfoStr ? JSON.parse(_userInfoStr || "{}") : {};

  return (
    <>
      <div>
        👏👏👏 很高兴看见你～
        <br />
        <br />
        这是一个 NextJS v13 的试验性项目。
      </div>
    </>
  );
};

export default Home;
