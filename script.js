




'use strict';


let numberOfFilms;

function start(){
numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');

while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');

}

}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres : [],
    privat: false,
};




function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a  = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length <50){
      
    personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
    }

    // rememberMyFilms();


function detectPersonalLevel(){

    if(personalMovieDB.count < 10){

        console.log('Просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count < 30 && personalMovieDB.count > 10){
            console.log('Вы классический зритель');
        
        }else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
        
        }else {
            console.log('Произошла ошибка');
        }
        
}
// detectPersonalLevel();

function showMyDB(){
if (personalMovieDB.privat == false){
    console.log(personalMovieDB);
}

}


  function  writeYourGenres(){
      for(let i =1; i <=3; i++ ){
personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
      }
}
writeYourGenres();

showMyDB();
// console.log(personalMovieDB);