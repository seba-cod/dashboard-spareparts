import React from "react";

export default function TableContent({children}) {
  return (
    <React.Fragment>
      <tbody className="ml-1">
        {children.map((product, i) => {
          return (
            <tr key={i}>
              <td>{product.name}</td>
              <td>{product.id}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td><a href={product.detail}> <i className="fas fa-external-link-alt"></i> </a></td>

            </tr>
          );
        })} 
      </tbody>
    </React.Fragment>
  );
}
const thead = ["Producto", "id", "Valor", "Categoria", "Usuario"];
