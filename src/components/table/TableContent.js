import React from "react";

export default function TableContent(props) {
  return (
    <React.Fragment>
      <tbody className="ml-1">
        {props.data.map((movie, i) => {
          return (
            <tr key={i}>
              <td>{movie.title}</td>
              <td>{movie.duration}</td>
              <td>{movie.rating}</td>
              <td>
                {movie.genre.map((oneGenre, i) => (
                  <li key={i}> {oneGenre} </li>
                ))}
              </td>
              <td>{movie.awards}</td>
            </tr>
          );
        })}
      </tbody>
    </React.Fragment>
  );
}
