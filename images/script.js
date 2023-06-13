const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);

// add an image
const image = new Image();
image.src = "firefox.png";
// make sure it is rendered and then draw
// draw it also display only part and resize
//1 image
// 2 & 3 define top left corner coordinates of the image where we want to start taking the image from
// 4 &5 width and height of the area we are taking from the image
// 6 & 7 where we want to put the image on the canvas relative to the top-left corner of the canvas
// 8 & 9 width and height to draw the image could resize here
image.addEventListener("load", () => ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175));
// accessibility label
canvas.setAttribute("aria-label", "Firefox Logo");
