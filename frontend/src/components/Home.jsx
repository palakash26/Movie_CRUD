import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/m")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie._id}>
            <div className="card h-100">
              <img src={movie.image} className="card-img-top" alt={movie.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text flex-grow-1">{movie.content}</p>
                <NavLink
                  to={`/${movie._id}`}
                  className="btn btn-primary mt-auto"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
