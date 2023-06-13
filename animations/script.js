const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);

ctx.translate(width / 2, height / 2);

// get the image
const image = new Image();
image.src = "walk-right.png";
image.onload = draw;

// keep track of location
let sprite = 0;
let posX = 0;


// draw function
function draw() {
    // clear the canvas each time
    ctx.fillRect(-(width / 2), -(height / 2), width, height);
    // draw the image
    ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
    // alter the person taken from the image each time
    // happening at a rate of 5 frames per sec
    if (posX % 13 === 0) {
        // check if it is the last frame and if so reset
        if (sprite === 5) {
            sprite = 0;
            // move to next frame
        } else {
            sprite++;
        }
    }
    // change the posX value in the drawImage
    // reset character at left side of screen when he walks off
    if (posX > width / 2) {
        let newStartPos = -(width / 2 + 102);
        posX = Math.ceil(newStartPos);
        console.log(posX);
    } else {
        posX += 2;
    }
    //   loop the annimation
    window.requestAnimationFrame(draw);
}
