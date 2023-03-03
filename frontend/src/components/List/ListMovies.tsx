import { List, StandardListItem } from "@ui5/webcomponents-react";

import { Link } from "react-router-dom";

const ListMovies = ({ data }: any) => {
  return (
    <>
      {data.map((movie: any) => (
        <List key={movie.imdbID}>
          <Link to={`show/${movie.imdbID}`}>
            <StandardListItem data-id={movie.imdbID} key={movie.imdbID}>
              {movie.Title}
            </StandardListItem>
          </Link>
        </List>
      ))}
    </>
  );
};

export default ListMovies;
