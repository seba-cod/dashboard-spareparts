import React, { useState, useEffect } from "react";

const API_GET_LASTPRODUCT_IN_DB = 'http://localhost:3010/api/product/last'

export default function LastLoadedInDb(props) {

  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  useEffect( () => {
    fetch(API_GET_LASTPRODUCT_IN_DB)
      .then(res => res.json())
      .then(
        (data) => {
          setProduct(data.data);
          setUser(data.data.userOwner);
        })
  },[])
  // Al setear un estado como un array vacio significa que useEffect se va a correr una sola vez como cuando usabamos componentDidMount()
  // Manejar errores de esta forma en vez de dentro del catch nos permite identificar un error en la DB de uno en un componente


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto publicado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 25 + "rem" }}
              src={`${product.image}`}
              alt={`imagen del producto`}
            />
          </div>
          <p>
            <span>Nombre del producto: {product.name} </span> <br/>
            <span>Descripción: {product.description} </span> <br/>
         
            <span> Valor: <strong>${product.price}</strong> | Producto vendido por Usuario: <strong>{user.user_name}</strong> </span>
          </p>
          <a className="btn btn-primary" target="_blank" rel="noreferrer" href={product.link}>
            Ver detalle
          </a>
        </div>
      </div>
    </div>
  );
}
