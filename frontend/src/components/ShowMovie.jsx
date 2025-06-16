import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ShowMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/m/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/m/del/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img
              src={movie.image}
              className="card-img-top"
              alt={movie.image}
            />
            <div className="card-body">
              <h4 className="card-title">{movie.title}</h4>
         
              <p className="card-text">{movie.content}</p>
              <div className="d-flex">
                <NavLink
                  to={`/update/${movie._id}`}
                  className="btn btn-success me-2"
                >
                  Update
                </NavLink>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovie; 