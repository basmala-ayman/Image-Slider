// images' path
let imgPath = [
    "./images/see.jpg",
    "./images/Aqsaa.webp",
    "./images/aqsa.jpg",
    "./images/Ashdod.jpeg",
    "./images/yafa_city.webp",
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
];
let slider = document.getElementById("slider");
let pagination = document.querySelector("#pagination ul");
let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");
let active = 0;
let interval = 3500;

// set all images in slider
for (let i = 0; i < imgPath.length; i++) {
    let img = document.createElement("img");
    img.src = imgPath[i];
    slider.appendChild(img);
}
let images = document.querySelectorAll(".slider img");

// create pagination li
for (let i = 0; i < images.length; i++) {
    pagination.appendChild(document.createElement('li'));
}

let listItems = document.querySelectorAll('#pagination ul li');

function removeAndSetActive() {
    listItems.forEach((ele) => {
        ele.classList.remove('active');
    })
    listItems[active].classList.add('active');
}

let sliderInterval;
function stopInterval() {
    clearInterval(sliderInterval)

}
function reloadSlider() {
    slider.style.left = -images[active].offsetLeft + 'px';
    removeAndSetActive();
    clearInterval(sliderInterval)
    sliderInterval = setInterval(() => nextArrow.click(), interval)
}

slider.addEventListener('mouseover', stopInterval);
slider.addEventListener('mouseout', reloadSlider);

window.onload = reloadSlider;
window.onresize = reloadSlider;

listItems.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})

nextArrow.onclick = function () {
    active = active == images.length - 1 ? 0 : active + 1;
    reloadSlider();
}
prevArrow.onclick = function () {
    active = active == 0 ? images.length - 1 : active - 1;
    reloadSlider();
}