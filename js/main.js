// banner section slider

var slider_show = document.getElementById('slider_show');
var slides = slider_show.getElementsByTagName('img');
var index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


var slider_show_title = document.getElementById('slider_show_title');
var slidesText = slider_show_title.getElementsByTagName('div');
var i = 0;

function nextSlideText() {
    slidesText[i].classList.remove('active');
    i = (i + 1) % slidesText.length;
    slidesText[i].classList.add('active');
}

function prevSlideText() {
    slidesText[i].classList.remove('active');
    i = (i - 1 + slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active');
}

function menuToggle() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}

//side navbar

function openNav() {
    document.getElementById("my_sidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("my_sidenav").style.width = "0";
}

// carousel stop
$(document).ready(function(){
    //Event for pushed the video
    $('#carouselExampleIndicators').carousel({
        pause: true,
        interval: false
    });
});
