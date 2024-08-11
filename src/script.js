const toggleMenu = document.getElementById ("toggle-menu");
const mobileMenu = document.querySelector (".nav-links");

function onToggle(e){
    e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    mobileMenu.classList.toggle('top-[10%]');
}