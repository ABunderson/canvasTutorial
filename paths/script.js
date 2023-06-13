const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);

// turn the human degrees into radians for JS
function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

//make a triangle
// start path move before color also set color
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// create the lines and fill
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
// ends path and fills in shape
ctx.fill();

// make a circle
ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
// first two parameter = position of arc's center X and Y
// third is radius
// fourth and firth start and end angles 0 degress is horizontally to the right
// sixth clockwise or anticlockwise. false = clockwise
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

// another circle but a packman
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// line to get the packman fill
// the fill is drawn from the start point to end point without the line it is ugly
ctx.lineTo(200, 106);
ctx.fill();

