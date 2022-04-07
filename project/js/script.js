/* Задания на урок:




4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const removeElements = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');


      removeElements.forEach((elem) => {
        elem.remove();
    });

      promoGenre.textContent = 'Драма'.toLowerCase();




promoBg.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();


movieDB.movies.forEach((el, i) => {

movieList.innerHTML += `
<li class="promo__interactive-item">${i + 1}. ${el}
<div class="delete"></div>
</li>
`;
});



// removeElements.forEach((elem) => {
//     elem.remove();
// });

