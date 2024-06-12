import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [state, Setstate] = useState([]);
  const postProduct = () => {
    axios
      .post("https://dummyjson.com/products/add", { title:state})
      .then((response) => console.log(response))
      .catch((er) => console.error(er));
  };

  return (
    <>
      <div>AddProduct</div>
      <p>{state}</p>
      <input
        value={state}
        onChange={(e) => Setstate(e.target.value)}
        placeholder="Enter title"
      />
      <button onClick={postProduct}>Add Product</button>
    </>
  );
}

export default AddProduct;
