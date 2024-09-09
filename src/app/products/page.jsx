"use client"

import { Spin, Table } from "antd";
import { useEffect, useState } from "react";

function Products() {
  const [data,setData]=useState([])
  const [loading,setloading]=useState([true])

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response= await fetch("https://dummyjson.com/products");
        const data= await response.json();
        console.log("first",data)
        setData(data.products)
      }catch(err){
        console.error("error fetching data:",err);
      }finally{
        setloading(false)
      }
    }

    fetchData();
  },[])

  const columns = [
    {
      title: "Product ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];


  return (
    <div>
      <h1>Product List</h1>
      {loading ? (
        <Spin size="large" /> // Show loading spinner while data is being fetched
      ) : (
        <Table
          dataSource={data} // Data for the table
          columns={columns} // Column definitions
          rowKey="id" // Ensure unique key for each row (use your data's unique field)
        />
      )}
    </div>
  )
}

export default Products;