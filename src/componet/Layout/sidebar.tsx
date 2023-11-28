import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useMenu } from "../../services/menu";
const { Sider } = Layout;
import { AppstoreOutlined } from "@ant-design/icons";
interface IsidebarProp {
  iscollapsed: boolean;
  selectedKeys: string;
  clickCallback: Function;
}
type MenuItem = Required<MenuProps>["items"][number];
export const Sidebar: React.FC<IsidebarProp> = (sidebarProp) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(sidebarProp.iscollapsed);
  const [selectedKeys, setSelectedKeys] = useState(sidebarProp.selectedKeys);
  // const [items, setItems] = useState([] as MenuItem[]);
  const { data, isError, isLoading } = useMenu("/api/menu");
  let itemList: MenuItem[] = [];
  if (data && data?.code === 0) {
    data.data.forEach((v) => {
      let curChildrenList = [] as MenuItem[];
      if (v.children) {
        v.children.forEach((val) => {
          curChildrenList.push(getItem(val?.label, val.key));
        });
        itemList.push(
          getItem(v.label, v.key, <AppstoreOutlined />, curChildrenList)
        );
      } else {
        itemList.push(getItem(v.label, v.key, <AppstoreOutlined />));
      }
    });
    console.log(itemList);
  }

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
  async function getBooks() {
    const res = await fetch(`/api/menu`, {
      cache: "no-store",
    });
    return res.json();
  }
  useEffect(() => {
    let flag = false;
    console.log("useeffect");
    return () => {
      flag = true;
    };
  }, []);
  const clickHandle: MenuProps["onClick"] = (e) => {
    setSelectedKeys(e.key);
    let curSearchKey: string = e.key;
    if (e.keyPath.length > 1) {
      curSearchKey = e.keyPath[e.keyPath.length - 1];
    }
    // console.log(e);
    const curItem = itemList.filter((v) => v?.key === curSearchKey);
    sidebarProp.clickCallback(curItem);
    router.push(`/${curItem[0]?.key}`);
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
        items={itemList}
        onClick={clickHandle}
      />
    </Sider>
  );
};

export default Sidebar;
