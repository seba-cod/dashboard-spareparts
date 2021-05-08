import React, { useState, useEffect } from "react";

const API_GET_PRODUCT_BY_PK = 'http://localhost:3010/api/product'

export default function ProductData() {

  let [product, setProduct] = useState([0])

  useEffect( () => {
    fetch(API_GET_PRODUCT_BY_PK)
      .then(res => res.json())
      .then(data => { setProduct(data.productData) })
  }, [] )


    return (
        <React.Fragment>
        </React.Fragment>
    )
}
