const express = require('express');
const albumRouter = require('./album.router');
const artistRouter = require('./artist.router');
const genreRouter = require('./genre.router');
const songRouter = require('./song.router');
const router = express.Router();

// colocar las rutas aquí
router.use(genreRouter);
router.use(artistRouter);
router.use(albumRouter);
router.use(songRouter);

module.exports = router;
