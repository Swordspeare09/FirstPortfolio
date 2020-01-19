const navSlide = () =>{

    const burwidget = document.querySelector('.burwidget');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burwidget.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });

}

navSlide();