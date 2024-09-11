"use client";

import { addItemToCart } from "@/store/cartSlice";
import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;

function Cart() {
    const dispatch= useDispatch()
    const [data,setData]=useState()
    const [addedItems, setAddedItems] = useState([]);
    const cartItems = useSelector((state) => state.cart.items);
    console.log("carditems",cartItems)
    const fetchCartData=async()=>{
        try{
            let res= await fetch('https://dummyjson.com/products');
            let data= await res.json();
            console.log("data",data.products);
            setData(data.products)
        }catch(err){
            console.error("data fetching failed");
        }
    }
    useEffect(()=>{
        fetchCartData();
    },[])

    const handleAddToCart=(product)=>{
        dispatch(addItemToCart(product));
        setAddedItems([...addedItems, product.id])
    }
    console.log("first",addedItems)
  return ( 
    <>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px",margin:"25px 40px"}}>
    {data && data.map((product)=>(
        <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={product.thumbnail}
        />
      }
      actions={[
        <Button type="primary" ghost onClick={() => handleAddToCart(product)}>
    {cartItems.find((item) => item.id === product.id) ? "Added" : "Add to Cart"}
    </Button>
      ]}
    >
      <Meta title={product.title} description={product.description} />
    </Card>
    ))}
    </div>
    </>
  );
}

export default Cart;