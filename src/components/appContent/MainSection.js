import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import LastLoadedInDb from "./LastLoadedInDb";
import GenresInDb from "./GenresInDb";
import mandolarian from "../../assets/images/mandalorian.jpg";

function MainSection() {
  const statsRow = [
    {
      title: "Movies in Data Base",
      color: "primary",
      amount: 21,
      icon: "fa-film",
    },
    {
      title: "Total awards",
      color: "success",
      amount: 79,
      icon: "fa-award",
    },
    {
      title: "Actors quantity",
      color: "warning",
      amount: 49,
      icon: "fa-user",
    },
    {},
  ];

  const statsDb = {
    title: "Last movie in Data Base",
    image: `${mandolarian}`,
    altImage: "Star Wars - Mandalorian",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
    consequatur explicabo officia inventore libero veritatis iure
    voluptate reiciendis a magnam, vitae, aperiam voluptatum non
    corporis quae dolorem culpa citationem ratione aperiam voluptatum
    non corporis ratione aperiam voluptatum quae dolorem culpa ratione
    aperiam voluptatum?`,
  };

  const genres = [
    "Acción",
    "Animación",
    "Aventura",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasia",
    "Infantiles",
    "Musical",
  ];

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <ContentRowMovies stats={statsRow} />
        <div className="row">
          <LastLoadedInDb stats={statsDb} />
          <GenresInDb stats={genres} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainSection;
