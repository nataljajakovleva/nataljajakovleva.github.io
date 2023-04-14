const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.progress_protsent'),
        lines = document.querySelectorAll('.progress_line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});