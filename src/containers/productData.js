/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import Table from '../components/table/Table';

export default function ProductData() {

  const [page, setPage] = useState(0)

  let API_GET_PRODUCTS = `http://localhost:3010/api/products/page/${page}`;

  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    fetch(API_GET_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.productsData.product);
        setMeta(data.meta);
      });
  }, [API_GET_PRODUCTS]);

  useEffect(() => {
    fetch(API_GET_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.productsData.product);
        setMeta(data.meta);
      });
  }, [API_GET_PRODUCTS, page]);

  let rows = [];
  products.map( product => (
        rows.push(product.name, product.id, product.price, product.category, (<a href={product.detail}><i className="fas fa-external-link-alt"></i></a>))
    )
  )
  
  let paginate = [];
  for (let i = 1; i <= meta.totalPages; i++) {
    paginate.push(i);
  }

  function changePaginate (i) {
    return setPage(i)
  }

  const hasPrevious = meta.hasPrevious;
  const hasNext = meta.hasNext;
  const isLast = meta.isLast;
  const titleColumns = ["Producto", "id", "Valor", "Categoria", "Link a la publicación"];

    return (
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <Table data={titleColumns, rows, page, paginate, hasPrevious, hasNext, isLast, changePaginate}/>
        </div>
      </div>
    )
}

