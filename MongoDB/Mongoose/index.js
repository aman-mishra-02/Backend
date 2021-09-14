const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() =>{
        console.log("CONNECTED");
    })
    .catch(err => {
        console.log(err);
    })

    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });

    const Movie = mongoose.model('Movie', movieSchema);

    const Godfather = new Movie({title:'Godfather', year: 1972, score: 9.3, rating: 'R' });

    Movie.insertMany([
        {title: 'Amelie', year:2001, score:8.3, rating: 'R',},
        {title: 'Alien', year:1979, score:8.1, rating: 'R',},
        {title: 'Joker', year:2019, score:8.8, rating: 'R',},
        {title: 'Pulp Fiction', year:1994, score:8.9, rating: 'R',},
        {title: 'Scent Of a Women', year:1992, score:8.4, rating: 'R',}
    ])
    .then(data => {
        console.log("Pushed Good To Go");
        console.log(data);
    })