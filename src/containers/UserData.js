/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import Table from '../components/table/Table';

export default function UserData() {

  const [page, setPage] = useState(0)

  let API_GET_USERS = `http://localhost:3010/api/users/page/${page}`;

  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    fetch(API_GET_USERS)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.userData.product);
        setMeta(data.meta);
      });
  }, [API_GET_USERS]);

  useEffect(() => {
    fetch(API_GET_USERS)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.userData.product);
        setMeta(data.meta);
      });
  }, [API_GET_USERS, page]);

  const rows = users.map( user => {
          let userArray = [user.name, user.username, user.id, user.email, (<a href={user.detail}><i className="fas fa-external-link-alt"></i></a>)]
          return userArray })

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
  const titleColumns = ["Nombre completo", "Username", "Id", "email", "Link al Usuario"];

    return (
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <Table data={titleColumns, rows, page, paginate, hasPrevious, hasNext, isLast, changePaginate}/>
        </div>
    </div>
    )
}

