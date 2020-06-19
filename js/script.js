/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан 2",
        "Лига справедливости 2",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll('.promo__adv').forEach(
	elem => elem.remove()
);
document.querySelectorAll('.promo__genre').forEach(
	elem => elem.textContent = 'Драма'
);
document.querySelectorAll('.promo__bg').forEach(
	elem => elem.style.backgroundImage = 'url(./img/bg.jpg)'
);


document.querySelectorAll('.promo__interactive-item').forEach(
	elem => elem.remove()
);

const list = document.getElementsByClassName('promo__interactive-list')[0];

movieDB.movies.sort();

movieDB.movies.forEach((item, index) => {
	
	console.log(index + 1, item);
	
	const li = document.createElement('li');
	li.classList.add('promo__interactive-item');
	li.textContent = `${index + 1} ${item}`;
	list.append(li);
	
	const divDelete = document.createElement('div');
	divDelete.classList.add('delete');
	li.append(divDelete);
	
});







