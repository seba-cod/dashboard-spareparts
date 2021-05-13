import React from "react";

export default function TableContent({data}) {
  return (
    <React.Fragment>
      <tbody className="ml-1">
        {data.rows.map((row, i) => (
          <tr key={i}>
            {row.map( (rowValue, i) => ( <td key={i}> {rowValue} </td> ))}
          </tr>
        ) ) }
      </tbody>
    </React.Fragment>
  )
}