const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");


// whole screen black
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);


// red rectangle
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);


// green rectanble
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);


// transparent purple rectangle
ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);
