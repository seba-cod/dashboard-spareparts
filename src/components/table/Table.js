import React from 'react';
import TableInfo from "./TableInfo";


export default function Table({data}) {

  const { products, users } = data;
  
  return (
    <React.Fragment>
      {products && 
        <div className="row justify-content-center table-hover col-auto">
          <TableInfo data={data} products={products}/>
        </div> }
      {users && 
      <div className="row justify-content-center table-hover col-auto">
        <TableInfo data={data} products={users}/>
      </div> }
    </React.Fragment>
  );
}

