"use client";
import { store } from "@/store/store";
import { FileImageOutlined, PieChartOutlined, RetweetOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Provider } from 'react-redux';

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
  getItem("User", "2", <UserOutlined />),
  getItem("redux", "3", <RetweetOutlined />),
  getItem("cart", "4", <ShoppingCartOutlined />),
  getItem("Product-image", "5", <FileImageOutlined />),
  getItem("Query", "6",  <PieChartOutlined />),
];

const Uilayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const Router=useRouter();
  const {

    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick = (e) => {
    switch (e.key) {
      case "1":
        console.log("Products clicked");
        Router.push('/products')
        break;
      case "2":
        console.log("user clicked");
        Router.push('/user')
        break;
        case "3":
        console.log("redux clicked");
        Router.push('/redux')
        break;
        case "4":
          console.log("cart clicked");
          Router.push('/cart')
          break;
          case "5":
          console.log("image clicked");
          Router.push('/images')
          break;
          case "6":
          console.log("image clicked");
          Router.push('/query')
          break;
      default:
        break;
    }
  };

  return (
    <Provider store={store}>
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
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </Provider>
  );
};

export default Uilayout;
