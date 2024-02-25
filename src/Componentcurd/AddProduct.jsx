import React, { useState } from "react";
import productService from "../Service/product.service";
import './AddProduct.css';
const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    name: "",
    author: "",
    genre: "",
    chapters: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        setProduct({
          name: "",
          author: "",
          genre: "",
          chapters: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="zo">
      <div className="containerproduct">
        <div className="rowproduct">
          <div className="colproduct">
           
              <div className="cardheadadd">ADD STUDENT DETAILS</div>

              <div className="cardbodyadd">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mbpro">
                    <label>NAME</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mbpro">
                    <label>EMAIL</label>
                    <input
                      type="text"
                      name="author"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.author}
                    />
                  </div>
                  <div className="mbpro">
                    <label>ADDRESS</label>
                    <input
                      type="text"
                      name="genre"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.genre}
                    />
                  </div>

                  <div className="mbpro">
                    <label>PHONENUMBER</label>
                    <input
                      type="number"
                      name="chapters"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.chapters}
                    />
                  </div>
                  <button className="glow-on-hover4">ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      // </div>
  );
};

export default AddProduct;