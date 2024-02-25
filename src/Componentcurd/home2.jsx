import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../Service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <center>
                <h1>Student Details</h1>
              </center>
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">EMAIL</th>
                      <th scope="col">ADDRESS</th>
                      <th scope="col">PHONENUMBER</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr className="tab">
                        <td>{num + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.author}</td>
                        <td>{p.genre}</td>
                        <td>{p.chapters}</td>
                        <td>
                        <button  className="btn btn-dark">
                        <Link to={`/editProduct/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-dark">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;