import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../Service/product.service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    author: "",
    genre: "",
    chapters: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/return");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="zo">
      <div className="containerproduct">
        <div className="rowproduct">
          <div className="colproduct">
          
              <div className="cardheadadd">UPDATE</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="cardbodyadd">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mbpro">
                    <label>Id</label>
                    <input
                      type="numbers"
                      name="id"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.id}
                    />
                  </div>
                  <div className="mbpro">
                    <label>Name</label>
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
                      type="NUMBER"
                      name="chapters"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.chapters}
                    />
                  </div>
                  <button className="glow-hover5">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
  );
};

export default EditProduct;