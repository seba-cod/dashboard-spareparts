import React, { useState, useEffect, useRef } from "react";
import TableWrapper from "./TableWrapper";
import TableThead from "./TableThead";
import TableContent from "./TableContent";

export default function Table(props) {
  const [page, setPage] = useState(0)

  let API_GET_PRODUCTS = `http://localhost:3010/api/products/page/${page}`;

  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    fetch(API_GET_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.productsData.product);
        setCategoryInfo(data.productsData.countProductsByCategory);
        setMeta(data.meta);
      });
  }, []);

  useEffect(() => {
    fetch(API_GET_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.productsData.product);
        setCategoryInfo(data.productsData.countProductsByCategory);
        setMeta(data.meta);
      });
  }, [page]);

  const paginate = [];
  for (let i = 1; i <= meta.totalPages; i++) {
    paginate.push(i);
  }

  function changePaginate (i) {
    return setPage(i)
  }

  const thead = ["Producto", "id", "Valor", "Categoria", "Link a la publicación"];

  return (
    <div className="row justify-content-center table-hover mx-4">
      <TableWrapper>
        <TableThead data={thead} />
        <TableContent>
        {products}
        </TableContent>
      </TableWrapper>

      <div className="align">
        {meta.hasPrevious && <i className="fas fa-arrow-left"></i>}
        {paginate.map((pages, i) => {
          return (
            <button onClick={() => changePaginate(i)} key={i} className="btn">
              <strong>{pages}</strong>
            </button>
          );
        })}
        {!meta.isLast && meta.hasNext && <i className="fas fa-arrow-right"></i>}
      </div>
    </div>
  );
}
