"use client"

import { useQuery } from "@tanstack/react-query";
function Query() {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("https://dummyjson.com/products").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
  <div>
    <ul>
      {data?.products?.map((product) => (
        <ul>
        <li key={product.id}><strong>Product Id:</strong>{product.id}</li>
        <li key={product.id}><strong>Product Name:</strong>{product.title}</li>
        <li key={product.id}><strong>Product Description:</strong>{product.description}</li>
        <li key={product.id}><strong>Product Price:</strong>{product.price}</li>
        </ul>
      ))}
    </ul>
    <button onClick={() => mutation.mutate()}>Add Product</button>
  </div>
  )
}

export default Query;