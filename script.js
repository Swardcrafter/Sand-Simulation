const canvas = document.querySelector('#main_canvas');
const ctx = canvas.getContext('2d');

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

ctx.fillRect(30, 30, 5, 5);
