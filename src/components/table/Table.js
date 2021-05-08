import React from "react";
import TableWrapper from "./TableWrapper";
import TableThead from "./TableThead";
import TableContent from "./TableContent";

export default function Table(props) {
  const movies = [
    {
      title: "Billy Elliot",
      duration: 123,
      rating: 5,
      genre: ["Drama", "Comedia"],
      awards: 2,
    },
    {
      title: "Alicia en el país de las maravillas",
      duration: 143,
      rating: 4.8,
      genre: ["Drama", "Acción", "Comedia"],
      awards: 3,
    },
    {
      title: "Star Wars",
      duration: 131,
      rating: 6,
      genre: ["Drama", "Ciencia Ficción", "Comedia"],
      awards: 3,
    }
  ];

  const thead = ["Titulo", "Duración", "Rating", "Género", "Premios"];

  return (
    <div className="row justify-content-center table-hover mx-4">
      <TableWrapper>
        <TableThead data={thead} />
        <TableContent data={movies} />
      </TableWrapper>
    </div>
  );
}
