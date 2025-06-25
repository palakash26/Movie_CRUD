import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/upa/${id}`, movie)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4">Update Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Enter movie title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            placeholder="Enter movie content"
            rows="6"
            value={movie.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-control"
            placeholder="Enter image URL"
            value={movie.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie; 