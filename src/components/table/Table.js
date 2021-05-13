import React from 'react';
import TableWrapper from "./TableWrapper";
import TableThead from "./TableThead";
import TableContent from "./TableContent";

export default function Table(props, {data}) {
  const { titleColumns, rows, changePaginate, paginate, hasPrevious, hasNext, isLast } = data;
  console.log('🚀 ~ file:', titleColumns, rows, changePaginate, paginate, hasPrevious, hasNext, isLast);

  return (
    <div className="row justify-content-center table-hover mx-4">
      <TableWrapper>
        <TableThead data={titleColumns} />
        <TableContent data={rows} />
      </TableWrapper>

      <div className="align">
        {hasPrevious && <i className="fas fa-arrow-left"></i>}
        {{paginate}.map((pages, i) => {
          return (
            <button onClick={() => changePaginate(i)} key={i} className={`btn ${pages === i && 'activo'}`} >
              <strong>{pages}</strong>
            </button>
          )
        })}
        {!isLast && hasNext && <i className="fas fa-arrow-right"></i>}
      </div>
    </div>
  );
}

