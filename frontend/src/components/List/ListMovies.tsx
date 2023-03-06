import { List, StandardListItem } from "@ui5/webcomponents-react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { showMovie } from "../../store/reducers/show";
const ListMovies = () => {
  const data = useSelector((state: RootState) => state.movies);
  const movies = data.Search;
  const dispatch = useDispatch();
  return (
    <>
      {movies ? (
        <>
          {" "}
          {movies.map((movie: any) => (
            <List key={movie.imdbID}>
              <Link
                onClick={() => dispatch(showMovie(movie.imdbID))}
                to={`show/${movie.imdbID}`}
              >
                <StandardListItem data-id={movie.imdbID} key={movie.imdbID}>
                  {movie.Title}
                </StandardListItem>
              </Link>
            </List>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ListMovies;
