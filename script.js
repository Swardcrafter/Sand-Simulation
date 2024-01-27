const canvas = document.querySelector('#main_canvas');
const ctx = canvas.getContext('2d');

// Config
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const SIZE = WIDTH / 30;

const COLS = WIDTH / 30;
const ROWS = HEIGHT / 30;

canvas.width = WIDTH;
canvas.height = HEIGHT;

let board = [];

// Generate Empty Board
for (let i = 0; i < ROWS; i++) {
	board.push([]);
	for (let j = 0; j < COLS; j++) {
		if (Math.random() > 0.5) {
			board[i].push(0);
		} else {
			board[i].push(1);
		}
	}
}

function DrawBoard() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);

	for (let i = 0; i < ROWS; i++) {
		for (let j = 0; j < COLS; j++) {
			let pixel = board[i][j];

			ctx.fillRect(i * SIZE, j * SIZE, SIZE, SIZE);
		}
	}
}

DrawBoard();
