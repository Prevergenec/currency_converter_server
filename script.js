'use strict';

document.addEventListener('DOMContentLoaded', () => {

const rub = document.querySelector('#rub'),
      usd = document.querySelector('#usd');

rub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-style', 'aplication/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            usd.value = (rub.value  / data.current.usd).toFixed(2);
        } else {
            usd.value = 'Что-то пошло не так';
        }
    });

});

});