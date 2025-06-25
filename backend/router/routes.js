const express = require('express');
const { addMovie, showmovies, updateMovie, showMovie, deleteMovie } = require('../controller/controller');

const routes = express.Router()

routes.post('/add', addMovie)
routes.get('/', showmovies)
routes.put('/upa/:id', updateMovie)
routes.get('/movie/:id', showMovie)
routes.delete('/del/:id', deleteMovie)

module.exports = routes 