import React from "react";

export default function TableWrapper(props) {
  return (
    <React.Fragment>
      <table className="table table-bordered" style={{boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)"}}>
        {props.children}
      </table>
    </React.Fragment>
  );
}
