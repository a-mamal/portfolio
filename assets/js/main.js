const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// open/close sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active'); 
});

// close after clicking a link
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active'); 
    });
});