"use client"

import { Input, Pagination, Table } from "antd";
import { useEffect, useState } from "react";

function Products() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [searchData,setSearchData]=useState("")
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  

  

  const fetchProducts = async (page) => {
    const skip = (page - 1) * pageSize;
    setLoading(true)
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchData}&limit=${pageSize}&skip=${skip}`);
      const data = await response.json();
      console.log("first", data);
      setData(data.products);
      setTotalProducts(data.total|| data.products.length);
    } catch (err) {
      console.error("error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, searchData);
  }, [currentPage, searchData]);

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

  const handleSearch=(e)=>{
    setSearchData(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div>
      <h1>Product List</h1>
      <Input
        placeholder="Search products"
        onChange={handleSearch}
        style={{ marginBottom: 16, width: 300 }}
      />
        <Table
          dataSource={data} // Data for the table
          columns={columns} // Column definitions
          rowKey="id" // Ensure unique key for each row (use your data's unique field)
          pagination={false}
          loading={loading}
        />
        <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalProducts}
            onChange={page => setCurrentPage(page)}
            style={{marginTop:"15px",display:"flex",justifyContent:"right"}}
          />
    </div>
  )
}

export default Products;