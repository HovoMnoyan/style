let numberOfFilms = prompt ("how films you see?");
let personalMovieDB = {
count: numberOfFilms,
movise: {},
actors:{},
genres: [],
privat: false
};
let a = prompt("paslednih prasmotrennih film"),
    b = prompt("acenite pojalusta");
    personalMovieDB.movise[a] = b;
    console.log(personalMovieDB);