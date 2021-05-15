import React from "react";

export default function TableThead({titleColumns}) {
  return (
    <thead className="thead-dark">
      {titleColumns &&
      <tr>
        {titleColumns.map((thead, i) => {
          return <th key={i}> {thead} </th>;
        })}
      </tr>
      }
    </thead>
  );
}
