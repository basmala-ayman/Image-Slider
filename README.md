# Image Slider Project

## Table of Contents
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Technologies Used](#techonologies-used)
- [What Does the Project Do?](#what-does-the-project-do)
- [How to Interact with the Slider?](#how-to-interact-with-the-slider)

---

### [Project Overview](#project-overview)

This project implements a simple image slider with interactive controls, allowing users to navigate through a series of images. The slider includes automatic transitions, manual navigation with buttons, pagination, and swipe functionality for touch screens.

---

### [Project Structure](#project-structure)

- **index.html**  
  This file contains the basic structure of the web page and links to the CSS and JavaScript files. It includes the container for the image slider, navigation arrows, pagination controls, and the script to enable functionality.

- **style.css**  
  Defines the styles for the slider, including the layout, design of navigation arrows, pagination, and responsive behavior. It ensures that the slider looks good on various screen sizes.

- **main.js**  
  Contains the core functionality of the slider. It:
    - Dynamically loads images into the slider.
    - Handles the automatic sliding of images every few seconds.
    - Allows users to interact with the slider using next/previous buttons, pagination dots, and swipe gestures on touch devices.
    - **Pauses** the automatic transition when the user hovers over an image and **resumes** it when the mouse moves away.
  
- **images/**  
  This folder holds the image files displayed in the slider.

---

## [Technologies Used](#techonologies-used)

- **HTML5**
- **CSS3**
- **JavaScript (JS)**
- **Font Awesome**

---

## [What Does the Project Do?](#what-does-the-project-do)

The project displays a series of images as an interactive slider. Users can:
- View images that automatically transition at regular intervals.
- Manually navigate through images using the left (previous) and right (next) arrows.
- Click on pagination dots to jump to a specific image.
- Swipe left or right to move through images on touch devices.
- Pause the automatic transition by hovering over an image, and resume it by moving the mouse away.

The slider is responsive, meaning it adapts to different screen sizes and devices.

---

## [How to Interact with the Slider?](#how-to-interact-with-the-slider)

### 1. Automatic Image Transition
By default, the images will change automatically every 3.5 seconds. You don't need to do anything to start this; it happens when the page loads.

### 2. Manual Navigation
- **Next/Previous Arrows**: You can click on the right arrow to move to the next image, or the left arrow to go back to the previous image.
  
### 3. Pagination Controls
- At the bottom of the slider, you will see small dots representing each image. Clicking on a dot will take you directly to the corresponding image.

### 4. Swipe Gesture (for touch devices)
- On touchscreens, you can swipe left or right to move through the images.

### 5. Pause on Hover
- If you hover over an image, the automatic transition will pause, allowing you to stay on that image. The slider resumes when you move the mouse away.
