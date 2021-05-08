import React, { useState, useEffect } from "react";
// import imagenFondo from "../assets/images/mandalorian.jpg";

const API_GET_PRODUCT_BY_PK = 'http://localhost:3010/api/products/2'

export default function LastLoadedInDb(props) {

  let [product, setProduct] = useState([0])

  useEffect( () => {
    fetch(API_GET_PRODUCT_BY_PK)
      .then(res => res.json())
      .then(data => { setProduct(data.productData) })
  }, [] )


  console.log(product)
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            {product.name}
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={`${product.image}`}
              alt={`${props.stats.altImage}`}
            />
          </div>
          <p>{product.description}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a>
        </div>
      </div>
    </div>
  );
}
