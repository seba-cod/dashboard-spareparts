import React from "react";

export default function TableContent({products, users}) {  

  let rows = null;
console.log(users)
console.log(products)
  
if (users) {
  rows = users.map(
    user => {
        let newArray = [
            user.name,
            user.username,
            user.id,
            user.email,
            user.detail
        ]
      return newArray;
    }
  )
}
  if (products) {
    rows = products.map(
        product => { 
            let newArray = [
                  product.name, 
                  product.id, 
                  `$ ${product.price}`, 
                  product.category, 
                  product.detail
            ]
          return newArray;
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