"use client";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon) {
  
  return {
    key,
    icon,
    label,
  };
}




const items = [
  getItem("Products", "1", <PieChartOutlined />),
  getItem("Yug", "2", <DesktopOutlined />),
];

const Uilayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router=useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick = (e) => {
    switch (e.key) {
      case "1":
        console.log("Products clicked");
        router.push('/products')
        break;
      case "2":
        console.log("Yug clicked");
        router.push('/yug')
        break;
      default:
        break;
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
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
          items={items}
          onClick={handleClick}
        />
      </Sider>
    </Layout>
  );
};

export default Uilayout;
