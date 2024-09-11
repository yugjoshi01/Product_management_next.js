"use client"
import Cart from "@/components/cart";
import CartDrawer from "@/components/drawer";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "right", margin: "10px 35px" }}>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={showDrawer}
        >
          Cart
        </Button>
      </div>
      <Cart />
      <CartDrawer visible={drawerVisible} onClose={closeDrawer} />
    </div>
  );
}

export default App;
