import { removeItemFromCart } from "@/store/cartSlice";
import { Button, Drawer, List } from "antd";
import { useDispatch, useSelector } from "react-redux";


  const CartDrawer = ({ visible, onClose }) => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  
    const handleRemove = (id) => {
      dispatch(removeItemFromCart({ id }));
    };
  
  

  return (
    <Drawer
      title="Your Cart"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <List
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item>
            <div>
              <img src={item.thumbnail} alt={item.title} style={{ width: "50px", marginRight: "10px" }} />
              <span>{item.title}</span> - <strong>${item.price}</strong> (x{item.quantity})
              <Button type="primary" danger onClick={() => handleRemove(item.id)} style={{ marginLeft: "10px",marginTop:"2px" }}>Remove</Button>
            </div>
          </List.Item>
        )}
      />
    </Drawer>
  )
}

export default CartDrawer;