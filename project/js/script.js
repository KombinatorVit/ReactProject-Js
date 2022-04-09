'use strict';


document.addEventListener('DOMContentLoaded', () => {
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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');



    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

                if(favorite){
console.log('Добавляем любимый фильм!');
                }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }


        event.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach((elem) => {
            elem.remove();
        });
    };


    const makeChanges = () => {
        promoGenre.textContent = 'Драма'.toLowerCase();

        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };



    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((el, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${el}
    <div class="delete"></div>
    </li>
    `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);


            });

        });

    }


    deleteAdv(removeElements);
    makeChanges();
    createMovieList(movieDB.movies, movieList);


});