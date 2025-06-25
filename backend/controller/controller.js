const mModel = require('../model/model');

exports.addMovie = async (req, res) => {
  const new_movie = new mModel(req.body);
  const result = await new_movie.save();
  res.status(200).json(result);
};

exports.showmovies = async (req, res) => {
  const movies = await mModel.find();
  if (movies != null) {
    res.status(200).json(movies);
  } else {
    res.status(404).json({ message: "📉 Movies" });
  }
};

exports.showMovie = async (req, res) => {
  const movie = await mModel.findById(req.params.id);
  if (movie != null) {
    res.status(200).json(movie);
  } else {
    res.status(204).json({ message: "not record found" });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;

    if (!title || !content || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const updatedMovie = await mModel.findByIdAndUpdate(
      id,
      { title, content, image },
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "No movie found with that ID." });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Update failed:", error);
    res
      .status(500)
      .json({ message: "Internal server error", details: error.message });
  }
};

exports.deleteMovie = async (req, resp) => {
    try {
        const res =  await mModel.findByIdAndDelete(req.params.id);
        resp.json(res);
    } catch (error) {
        console.log(error);
    }
} 