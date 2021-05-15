/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import Table from '../components/table/Table';

let API_GET_USERS = `http://localhost:3010/api/users/page/0`;

export default function UserData() {
  const [page, setPage] = useState(0)

  API_GET_USERS = `http://localhost:3010/api/users/page/${page}`;

  const [users, setUsers] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect( () => {
    fetch(API_GET_USERS)
      .then( res => res.json() )
      .then( data => {
        setUsers(data.usersData);
        setMeta(data.meta);
      })
  }, [] )

  useEffect(() => {
    fetch(API_GET_USERS)
      .then( res => res.json() )
      .then( dataUpdated => {
        setUsers(dataUpdated.usersData);
        setMeta(dataUpdated.meta);
      });
  }, [page])

  const titleColumns = ["Nombre completo", "Username", "Id", "email", "Link al Usuario"];

  function changePaginate (i) { return setPage(i) }

    return (
      <React.Fragment>
        <div className="container-fluid">
          {users && meta && 
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
              <Table data = {{titleColumns, users, page, meta, changePaginate}}/>
            </div>
          }
        </div>
      </React.Fragment>
    )
}