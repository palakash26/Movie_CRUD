import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/m/add", movie)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="formId1"
                      placeholder=""
                      value={movie.title}
                      onChange={handleChange}
                    />
                    <label for="formId1">Title</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="content"
                      id="formId1"
                      placeholder="more info"
                      value={movie.content}
                      onChange={handleChange}
                    />
                    <label for="formId1">Content...</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      id="formId1"
                      placeholder="pste url here"
                      value={movie.image}
                      onChange={handleChange}
                    />
                    <label for="formId1">Image </label>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Add Movie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovie; 