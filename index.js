var nav = document.getElementById('nav');
function debounce(func, wait = 20, immediate = true) {
    var timeOut;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeOut = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = timeOut && immediate;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}
var underDiv = document.getElementById('Underdiv2');
var underDiv1 = document.getElementById('Underdiv3');
function scrollColor() {
    if (window.scrollY > 20) {
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        document.getElementById('hide').style.color = "black";
        nav.style.transition = 0.8 + "s";
    } 
    if (window.scrollY < 20) {
        nav.style.backgroundColor = "transparent";
        nav.style.color = "black";
    }
    if (window.scrollY <= 0) {
        underDiv.style.backgroundPosition = `${50}% ${window.scrollY}px`
        underDiv1.style.backgroundPosition = `${50}% ${window.scrollY}px`
    } 
    if (window.scrollY < 300) {
        underDiv.style.backgroundPosition = `${50}% ${window.scrollY - 50}px`
    }
    if (window.scrollY >= 800) {
        underDiv1.style.backgroundPosition = `${50}% ${window.scrollY - 800}px`
    }
}
window.addEventListener("scroll", debounce(scrollColor))
window.addEventListener("scroll", scrollColor());


var images = ['images/76-7-100x100.jpg', 'images/Copy-of-siite-3.png', 'images/Copy-of-siite-4.png', 'images/Copy-of-siite-5.png'];
var slideImage1 = ['images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg', 'images/pic6.jpg'];
var slideImage2 = ['images/pic7.jpg', 'images/pic8.jpg', 'images/pic9.jpg', 'images/pic10.jpg', 'images/pic11.jpg'];
var getImgId = document.getElementById('slider1');
var i = 0;
var a = 0;
function slider() {
    getImgId.src = images[i];
    document.getElementById('slider').style.animation = "slideMe 0.7s ease-in-out"
    
    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0;
        // getImgId.style{
        //     Ke
        // }
    }
    setTimeout("slider()", 5000)

}
var getDivid1 = document.getElementById('imgDiv1');
var getDivid2 = document.getElementById('imgDiv2');
var getDivid3 = document.getElementById('imgDiv3');
var getDivid4 = document.getElementById('imgDiv4');
function divSlider() {
    getDivid1.style.backgroundImage = `url(${slideImage1[a]})`
    getDivid2.style.backgroundImage = `url(${slideImage2[a]})`
    getDivid3.style.backgroundImage = `url(${slideImage1[a]})`
    getDivid4.style.backgroundImage = `url(${slideImage2[a]})`
    if (a < slideImage1.length - 1) {
        a++
    }
    else {
        a = 0;
    }
    setTimeout("divSlider()", 6000)

}
window.setInterval(divSlider(), 3000);
// window.onload = divSlider;
window.onload = slider;

function myfunction(){
    document.getElementById('hide').style.display = "inline-block";
}
function hide(){
    document.getElementById('hide').style.display = "none";
}