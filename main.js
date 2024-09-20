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

function setImage(counter) {
    slider.innerHTML = "";
    let currentImg = imgs[counter - 1];
    slider.appendChild(currentImg);
}

let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");

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

let defaultImg = 1;
// set first image as a beginning image
setImage(defaultImg);
checkDisabled(defaultImg);

// motion between images
nextArrow.onclick = function () {
    let counter = parseInt(slider.firstChild.getAttribute('data-counter')); // 5
    if (counter == 5) {
        return;
    }
    setImage(counter + 1);
    checkDisabled(counter + 1)
}

prevArrow.addEventListener('click', function () {
    let counter = parseInt(slider.firstChild.getAttribute('data-counter')); // 1
    if (counter == 1) {
        return;
    }
    setImage(counter - 1);
    checkDisabled(counter - 1);
})