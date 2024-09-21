// images' path
let imgPath = [
    "./images/see.jpg",
    "./images/Aqsaa.webp",
    "./images/aqsa.jpg",
    "./images/Ashdod.jpeg",
    "./images/yafa_city.webp"
];

let imgs = [];
for (let i = 0; i < imgPath.length; i++) {
    let img = document.createElement("img");
    img.src = imgPath[i];
    img.setAttribute('data-counter', i + 1);
    imgs.push(img);
}

let slider = document.getElementById("slider");
let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");

function setImage(counter) {
    slider.innerHTML = "";
    let currentImg = imgs[counter - 1];
    currentImg.classList.add('active');
    slider.appendChild(currentImg);
}

// check first image, last image
function checkDisabled(counter) {
    if (counter == 1) {
        prevArrow.classList.add('disabled');
    } else {
        prevArrow.classList.remove('disabled');
    }
    if (counter == 5) {
        nextArrow.classList.add('disabled');
    } else {
        nextArrow.classList.remove('disabled');
    }
}

function nextSlide() {
    let counter = parseInt(slider.firstChild.getAttribute('data-counter')); // 5
    if (counter == 5) {
        return;
    }
    setImage(counter + 1);
    checkDisabled(counter + 1)
}

function lastSlide() {
    let counter = parseInt(slider.firstChild.getAttribute('data-counter')); // 1
    if (counter == 1) {
        return;
    }
    setImage(counter - 1);
    checkDisabled(counter - 1);
}

// set first image as a beginning image
// setImage(defaultImg);

let defaultImg = 1;

let sliderInterval;
function startInterval() {
    sliderInterval = setInterval(() => {
        setImage(++defaultImg);
        checkDisabled(defaultImg);
        if (defaultImg == imgPath.length) {
            defaultImg = 0;
        }
    }, 2000);
}
setImage(defaultImg);
startInterval();
function stopInterval() {
    clearInterval(sliderInterval);
}

slider.addEventListener('mouseout', startInterval);
slider.addEventListener('mouseover', stopInterval);

// motion between images
// next image
nextArrow.addEventListener('click', nextSlide);

// previous image
prevArrow.addEventListener('click', lastSlide);