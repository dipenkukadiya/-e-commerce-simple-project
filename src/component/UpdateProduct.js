import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params=useParams();
  const navigate =useNavigate();
  useEffect(()=>{
      getProductDetails();
    })
    const getProductDetails= async()=>{
      console.log(params);
      let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`);
        result =await result.json();
        console.warn(result);
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)

  }

  const updateProduct = async () => {
    let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
    method :'put',
    body:JSON.stringify({name,price,category,company}),
    headers:{
        'Content-type':"application/json"
    }

  });
  result= await result.json();
  console.warn(result);
  navigate('/')
  }

  return (
    <div className="product">
      <h1>update product</h1>

      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        className="inputbox"
        type="text"
        placeholder="enter product name"
      ></input>
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
        className="inputbox"
        type="text"
        placeholder="enter product price"
      ></input>

      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
        className="inputbox"
        type="text"
        placeholder="enter product category"
      ></input>
     
      <input
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
        className="inputbox"
        type="text"
        placeholder="enter product company"
      ></input>
   
      <button onClick={updateProduct} className="appbutton">
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
