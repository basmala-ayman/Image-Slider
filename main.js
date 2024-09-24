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
let data = document.getElementById('data');
data.innerHTML = `${active + 1} / ${imgPath.length}`;

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

// display the counter of image
function displayData() {
    setTimeout(() => data.innerHTML = `${active + 1} / ${imgPath.length}`, 900);
}

function reloadSlider() {
    slider.style.left = -images[active].offsetLeft + 'px';
    removeAndSetActive();
    clearInterval(sliderInterval)
    sliderInterval = setInterval(() => {
        nextArrow.click();
    }, interval)
}
// swiping in touch devices
const swipeArea = slider;
let startX = 0;  // Starting X coordinate
let startY = 0;  // Starting Y coordinate
let distX = 0;   // Distance moved in X
let distY = 0;   // Distance moved in Y

// Threshold for swipe distance
const threshold = 50; // Minimum distance to be considered a swipe

// Listen for the start of a touch event
swipeArea.addEventListener('touchstart', function (e) {
    const touch = e.touches[0];  // Get the first touch point
    startX = touch.clientX;
    startY = touch.clientY;
});

// // Listen for movement during touch
// swipeArea.addEventListener('touchmove', function (e) {
//     // You can track the movement here if needed
// });

// Listen for the end of a touch event
swipeArea.addEventListener('touchend', function (e) {
    const touch = e.changedTouches[0];  // Get the first touch point
    distX = touch.clientX - startX;
    distY = touch.clientY - startY;

    // Determine if the swipe is horizontal
    if (Math.abs(distX) > Math.abs(distY)) {
        if (distX > threshold) {
            console.log('Swiped Right');
            // Action for right swipe
            active = active == 0 ? images.length - 1 : active - 1;
            displayData();
            reloadSlider();
        } else if (distX < -threshold) {
            console.log('Swiped Left');
            // Action for left swipe
            active = active == images.length - 1 ? 0 : active + 1;
            displayData();
            reloadSlider();
        }
    }
});

// start slider
window.onload = reloadSlider;
window.onresize = reloadSlider;

// check if user stop on the image
slider.addEventListener('mouseover', stopInterval);
slider.addEventListener('mouseout', reloadSlider);

// to move by pagination
listItems.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        displayData();
        reloadSlider();
    })
})

// to click on next arrow
nextArrow.onclick = function () {
    active = active == images.length - 1 ? 0 : active + 1;
    displayData();
    reloadSlider();
}

// to click on previous arrow
prevArrow.onclick = function () {
    active = active == 0 ? images.length - 1 : active - 1;
    displayData();
    reloadSlider();
}