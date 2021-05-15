/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Table from '../components/table/Table';

let API_GET_PRODUCTS = `http://localhost:3010/api/products/page/0`

export default function ProductData() {
  const [page, setPage] = useState(0);
  
  API_GET_PRODUCTS = `http://localhost:3010/api/products/page/${page}`;

  const [products, setProducts] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect( () => {
    fetch(API_GET_PRODUCTS)
      .then( res => res.json() )
      .then( data => { 
        setProducts(data.productsData.product)
        setMeta(data.meta)
      })
  }, [] )

  useEffect(() => {
    fetch(API_GET_PRODUCTS)
      .then( res => res.json() )
      .then( dataUpdated => {
        setProducts(dataUpdated.productsData.product)
        setMeta(dataUpdated.meta)
      });
  }, [page])

  const titleColumns = ["Producto", "id", "Valor", "Categoria", "Link a la publicación"];

  function changePaginate (i) { return setPage(i) }

    return (
      <React.Fragment>
        <div className="container-fluid">
          {meta && 
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
              <Table data = {{titleColumns, products, page, meta, changePaginate}}/>
            </div>
          }
        </div>
      </React.Fragment>
    )
}