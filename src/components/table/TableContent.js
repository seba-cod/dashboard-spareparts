import React from "react";

export default function TableContent({data}) {  
 const {users, products} = data;

let rows = null;

console.log('estos son los Usuarios en Table: ', data)
if (users) {
  rows = users.map(
    user => {
        let newUserArray = [
            user.name,
            user.user_name,
            user.id,
            user.email,
            user.detail
        ]
      return newUserArray;
    }
  )
} else if (products) {
    rows = products.map(
        product => { 
            let newProductArray = [
                  product.name, 
                  product.id, 
                  product.price, 
                  product.category, 
                  product.detail
            ]
          return newProductArray;
        }
      ) 
  }




  return (
    <React.Fragment>
      <tbody className="ml-1">
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map( (rowValue, idx) => ( <td key={idx}> 

              { rowValue }
              { idx === 4 && ( 
                (<a href={rowValue[4]}> <i className="fas fa-external-link-alt"></i></a> )
              ) }

             </td> ))}
          </tr>
        ) ) }
      </tbody>
    </React.Fragment>
  )
}