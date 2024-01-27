import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.warn(userId);
    let result = await fetch(`http://127.0.0.1:5000/add`, {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="product">
      <h1>add product</h1>

      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        className="inputbox"
        type="text"
        placeholder="enter product name"
      ></input>
      {error && !name && <span className="invalid"> Enter valid name</span>}
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
        className="inputbox"
        type="text"
        placeholder="enter product price"
      ></input>
      {error && !price && <span className="invalid"> Enter valid price</span>}

      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
        className="inputbox"
        type="text"
        placeholder="enter product category"
      ></input>
      {error && !category && (
        <span className="invalid"> Enter valid category</span>
      )}

      <input
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
        className="inputbox"
        type="text"
        placeholder="enter product company"
      ></input>
      {error && !company && (
        <span className="invalid"> Enter valid company</span>
      )}

      <button onClick={addProduct} className="appbutton">
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
