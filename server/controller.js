const movies = require('./db.json')
let globalId = 11

module.exports = {
    getMovies: (req, res) => res.status(200).send(movies),
    deleteMovie: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        let { title, rating, imageURL } = req.body
        let newMovie = {
            id: globalId,
            title, 
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = movies.findIndex(elem => +elem.id === +id)

        if (movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}





// const movies = require("./db.json");

// let globalId = 11;

// module.exports = {
//     getMovies: (req, res) => {
//         res.status(200).send(movies);
//     },
//     deleteMovie: (req, res) => {
//         let index = movies.findIndex((elem) => elem.id === +req.params.id);
//         movies.splice(index, 1);
//         console.log(movies);
//         res.status(200).send(movies);
//     },
//     createMovies: (req,res) => {
//         console.log(req.params,req.query,req.body)
//         let { title, rating, imageURL } = req.body

//         let newMovie = {
//             id: globalId,
//             title,
//             rating,
//             imageURL,
//         }

//         movies.push(newMovie)
//         globalId++
//         res.status(200).send(movies)
//     },

//     updateMovie: (req, res) => {
//         let id = req.params.id;
//         let type = req.body.type;

//         let index = movies.findIndex((elem) => +elem.id === +id);

//         if (movies[index].rating === 5 && type === "plus") {
//             res.status(400).send("cannot set a rating above 5");
//         } else if ((movies[index].rating === 0) & (type === "minus")) {
//             res.status(400).send("cannot set a rating below 0");
//         } else if (type === "plus") {
//             movies[index].rating++;
//             res.status(200).send(movies);
//         } else if (type === "minus") {
//             movies[index].rating--;
//             res.status(200).send(movies);
//         } else {
//             res.sendStatus(400);
//         }
//     },
            
// }