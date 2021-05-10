import React, { useState, useEffect } from "react";

const API_GET_CATEGORIES = "http://localhost:3010/api/category";

export default function CategoriesInDb() {
  let [category, setCategory] = useState([0]);

  useEffect(() => {
    fetch(API_GET_CATEGORIES)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {category.map((data, i) => {
              return (
                <div key={i} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <a
                      style={{ textDecotarion: "none", color: "#fff" }}
                      target="_blank"
                      rel="noreferrer"
                      href={data.link}
                    >
                      <div className="card-body">
                        {data.name}
                        <i style={{ marginLeft:'1rem'}} className="fas fa-external-link-alt"></i>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
