import React, { useState, useEffect } from "react";
import ContentRowHighlight from "../HighlightCards/ContentRowHighlight";
import LastLoadedInDb from "./LastLoadedInDb";
import CategoriesInDb from "./CategoriesInDb";
const API_GET_ALL_META_IN_DB = 'http://localhost:3010/api/information'

function MainSection() {


  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect( () => {
    fetch(API_GET_ALL_META_IN_DB)
      .then(res => res.json())
      .then(
        (data) => {
          setProducts(data.totalProductsInDb)
          setUsers(data.totalUsersInDb)
          setOrders(data.totalGain)
        })
  },[])

  const statsRow = [
    {
      title: "Productos publicados",
      color: "primary",
      amount: products,
      icon: "fas fa-luggage-cart",
    },
    {
      title: "Usuarios registrados",
      color: "info",
      amount: users,
      icon: "fa-user",
    },
    {
      title: "Ganancias totales",
      color: "success",
      amount: `$ ${orders}`,
      icon: "fa-file-invoice-dollar",
    }
  ];

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <ContentRowHighlight stats={statsRow} />
        <div className="row">
          <LastLoadedInDb/>
          <CategoriesInDb/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainSection;
