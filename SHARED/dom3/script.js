const form = document.querySelector('.form');
const div = document.querySelector('.division');
const p = document.querySelector('.paragraph');
const btn = document.querySelector('.btn');
const link = document.querySelector('.link');

form.addEventListener('click', function () {
    console.log('click form');
});

div.addEventListener('click', function () {
    setTimeout(() => {
        console.log('click div');
    }, 1000);
});

p.addEventListener('click', function (event) {
    event.stopPropagation(); // отменяет всплытие
    event.stopImmediatePropagation(); // отменяет всплытие и работу других обработчиков
    setTimeout(() => {
        console.log('click p');
    }, 2000);
});

p.addEventListener('click', function () {
    setTimeout(() => {
        console.log('second click p');
    }, 3000);
});


btn.addEventListener('click', function (event) {
    console.log(event);
    console.log('current target', event.currentTarget);
    console.log('target', event.target); // непосредственно элемент на который кликнули
});


link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('CLICK A');
});


document.querySelector('#list').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'LI') {
        console.log(e.target.textContent);
    }
});
