 
    const search_btn = document.getElementById('search-icon')
    const search_bar = document.getElementById('search-bar')

    const burger = document.getElementById('burger-btn')
    const close_btn = document.getElementById('nav__close-btn')
    const burger_menu = document.getElementById('nav')

 document.addEventListener("DOMContentLoaded", () => {
 
    search_btn.addEventListener('click', function() {
        search_bar.classList.add('active');
    });

    burger.addEventListener('click', function() {
        burger_menu.classList.add('active');
    })

    close_btn.addEventListener('click', function() {
        burger_menu.classList.remove('active');
    })

  });