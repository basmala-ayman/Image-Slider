// images' path
let imgPath = [
    "./images/see.jpg",
    "./images/see.jpg",
    // "./images/see.jpg",
    // "./images/see.jpg",
    "./images/see.jpg",
    // "./images/Aqsaa.webp",
    // "./images/aqsa.jpg",
    "./images/Ashdod.jpeg",
    // "./images/yafa_city.webp"
];

let slider = document.getElementById("slider");
let imgs = [];
for (let i = 0; i < imgPath.length; i++) {
    let img = document.createElement("img");
    img.src = imgPath[i];
    img.setAttribute('data-counter', i + 1);
    imgs.push(img);
    slider.appendChild(img);
}

let currentIndex = 0;
let totalImages = imgPath.length;

// Clone the first image and append it at the end of the slider
const firstImageClone = imgs[0].cloneNode(true);
slider.appendChild(firstImageClone);

function slideNext() {
    currentIndex++;
    // If it's the last image (including the clone), transition to the clone
    if (currentIndex === totalImages) {
        slider.style.transition = "transform 1s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // After the transition to the cloned image, jump back to the first
        setTimeout(() => {
            slider.style.transition = "none"; // Disable transition temporarily
            currentIndex = 0;  // Reset index to the original first image
            slider.style.transform = `translateX(0)`;  // Jump back to the original first image
        },1000); // 3 seconds is the duration of the transition
    } else {
        // Normal sliding to the next image
        slider.style.transition = "transform 1s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

setInterval(slideNext, 3000);

// console.log('done')

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
// setImage(defaultImg);
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

// prevArrow.addEventListener('click', function () {
//     let counter = parseInt(slider.firstChild.getAttribute('data-counter')); // 1
//     if (counter == 1) {
//         return;
//     }
//     setImage(counter - 1);
//     checkDisabled(counter - 1);
// })