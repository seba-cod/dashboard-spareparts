import React, {useRef} from 'react';
import TableWrapper from "./TableWrapper";
import TableThead from "./TableThead";
import TableContent from "./TableContent";


export default function Table({data, products, users}) {
  const { titleColumns, changePaginate, meta } = data;
  let leftArrowPreviousPage = useRef();
  let rightArrowNextPage = useRef();
  let changePageOnClickButton = useRef();

  /* este es un intento de cambiar el paginado tomando una de las flechas y apuntando a la página siguiente o la anterior, no obtener con éxito el número de página anterior o siguiente (i) a la funcion changePaginate*/
  const changePage = () => {
    // const actualPageWhereImStanding = Number(changePageOnClickButton.current.innerText); // esto me está devolviendo el último valor mapeado o sea la ultima pagina
    // console.log('esta es la pagina en la q estoy parado: ', actualPageWhereImStanding)
    // changePageOnClickButton.current.onclick( changePaginate(actualPageWhereImStanding) )
  };

  return (
    <React.Fragment>

        <TableWrapper>
          <TableThead titleColumns={titleColumns} />
          <TableContent data={{users, products}} />
        </TableWrapper>

      { meta && 
        <div className="align">

          {meta.hasPrevious && <button ref={leftArrowPreviousPage} onClick={(e) => changePage()}><i className="fas fa-arrow-left"></i> </button>}

          {meta.totalPages.map((pages, i) => {
            return (
              <button ref={changePageOnClickButton} onClick={() => changePaginate(i)} key={i} className={`btn ${pages === i && 'activo'}`} >
                <strong>{pages}</strong>
              </button>
            )
          })}

          {!meta.isLast && meta.hasNext && <button ref={rightArrowNextPage} onClick={(e) => changePage(e)} ><i className="fas fa-arrow-right"></i></button>}
        </div>
      }
    </React.Fragment>
  );
}

