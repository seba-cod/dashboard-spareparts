import React from "react";

export default function TableThead({data}) {
  return (
    <thead className="thead-dark">
      <tr>
        {data.titleColumns.map((thead, i) => {
          return <th key={i}> {thead} </th>;
        })}
      </tr>
    </thead>
  );
}
