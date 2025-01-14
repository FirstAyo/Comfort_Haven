const toggleMenu = document.getElementById("toggle-menu");
const mobileMenu = document.getElementById("nav-links");

function onToggle(e){
    e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    mobileMenu.classList.toggle('top-[80px]');
}

// toggleMenu.addEventListener('click', onToggle());
