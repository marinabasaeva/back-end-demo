// const express = require("express");
// const cors = require("cors");

// const app = express();

// const controllerFile = require("./controller");

// app.use(express.json());
// app.use(cors());

// app.get("/api/movies", controllerFile.getMovies);
// app.delete("/api/movies/:id", controllerFile.deleteMovie);
// app.post('/api/movies', controllerFile.createMovies)
// app.put(`/api/movies/:id`, controllerFile.updateMovie);
// app.listen(4004, () => console.log(`running on 4004`));

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getMovies,
    deleteMovie, 
    createMovie, 
    updateMovie
} = require('./controller')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)

app.listen(4004, () => console.log(`running on 4004`))