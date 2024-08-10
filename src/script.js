const toggleMenu = document.getElementById ("toggle-menu");
const mobileMenu = document.querySelector (".nav-links");

function onToggle(e){
    if (e.name === 'menu-outline'){
        e.name = 'close-outline';
        mobileMenu.classList.toggle('top-[12%]');
    }
    else{
        e.name = 'menu-outline';
        mobileMenu.classList.toggle('top-[-100%]');
    }
}