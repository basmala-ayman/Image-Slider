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
    img.draggable = "false";
    img.alt = `image- ${i + 1}`;
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

// update the slider
function reloadSlider() {
    slider.style.left = -images[active].offsetLeft + 'px';
    removeAndSetActive();
    clearInterval(sliderInterval)
    sliderInterval = setInterval(() => {
        nextArrow.click();
    }, interval)
}

// swiping on touch screen
let startX = 0;
let startY = 0;
let acceptDist = 50; // minimum distance to swipe
let isHorizontalSwipe = false;

function swiping(distX, distY) {
    // if (isHorizontalSwipe) {
    if (Math.abs(distX) > Math.abs(distY)) {
        if (distX > acceptDist) {
            // swiping to the right means move to the previous image
            prevArrow.click();
        } else if (distX < -acceptDist) {
            // swiping to the left means move to the next image
            nextArrow.click();
        }
    }
}

slider.addEventListener('touchstart', function (event) {
    let startPoint = event.touches[0];
    startX = startPoint.clientX;
    startY = startPoint.clientY;
    isHorizontalSwipe = false;
})

// // Listen for movement during touch
// slider.addEventListener('touchmove', function (e) {
//     const touch = e.touches[0];
//     let distX = touch.clientX - startX;
//     let distY = touch.clientY - startY;

//     // Determine the swipe direction after small movement
//     if (!isHorizontalSwipe && Math.abs(distX) > Math.abs(distY)) {
//         // If horizontal movement is greater than vertical, it's a horizontal swipe
//         isHorizontalSwipe = true;
//     }

//     // If it's a horizontal swipe, prevent vertical scrolling
//     if (isHorizontalSwipe) {
//         e.preventDefault();  // Prevent vertical motion (scrolling)
//     }
// });


slider.addEventListener('touchend', function (event) {
    let endPoint = event.changedTouches[0];
    let distX = endPoint.clientX - startX;
    let distY = endPoint.clientY - startY;
    swiping(distX, distY);
})

// start slider motion
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