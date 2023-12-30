const icon = document.querySelector('.icon');
const menu = document.querySelector('nav');

icon.addEventListener('click', () => {
    menu.classList.toggle('showData');
    if (menu.classList.contains('showData')) {
        document.getElementById('bar').className = "fa-solid fa-xmark";
    } else {
        document.getElementById('bar').className = "fa-solid fa-bars";
    }
    console.log(menu);
});