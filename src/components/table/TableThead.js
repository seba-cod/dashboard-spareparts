import React from "react";

export default function TableThead(props) {
  return (
    <thead className="thead-dark">
      <tr>
        {props.data.map((thead, i) => {
          return <th key={i}> {thead} </th>;
        })}
      </tr>
    </thead>
  );
}
