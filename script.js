

'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres : [],
    privat: false,
};

const lastFilms = prompt('Один из последних просмотренных фильмов?', '');
const lastFilms2 = prompt('Один из последних просмотренных фильмов?', '');
const filmScore = prompt('На сколько оцените его?', '');
const filmScore2 = prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastFilms] = filmScore;
personalMovieDB.movies[lastFilms2] = filmScore2;

console.log(personalMovieDB);