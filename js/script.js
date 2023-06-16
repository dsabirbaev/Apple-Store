


//////////////////////// dropdown menu /////////////////////////

const dropdowns =document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const dropArrow = dropdown.querySelector('.drop-arrow');
    const menu = dropdown.querySelector('.menu');

    select.addEventListener('click', () => {
        dropArrow.classList.toggle('drop-arrow__rotate');
        menu.classList.toggle('menu-open');
    })
})

///////////////////////////////////////////////////////////////

///////// carousel//////////////////////////////


$('.intro-cards').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
   
});

///////////////////////////////////////////////