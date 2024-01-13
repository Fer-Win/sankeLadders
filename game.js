var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');

// Draw the game board as a grid
var blockSize = 50; // Size of each block in the grid
for (var x = 0; x <= canvas.width; x += blockSize) {
    for (var y = 0; y <= canvas.height; y += blockSize) {
        ctx.strokeRect(x, y, blockSize, blockSize);
    }
}

// Define the positions of snakes and ladders
var snakes = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
var ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

// Initialize the player's position
var playerPos = 1;

// Initialize the player's visual position for animation
var playerVisualPos = { x: 0, y: 0 };

// Initialize the player's target position
var playerTargetPos = { x: 0, y: 0 };

// Initialize the player's speed
var playerSpeed = 5;

var row = Math.floor((playerPos - 1) / 10);
var col = (playerPos - 1) % 10;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateGame() {
    // Roll the dice
    var diceValue = rollDice();

    // Calculate the next position
    var nextPos = playerPos + diceValue;

    // Check if the next position is a snake or a ladder
    switch (nextPos) {
        case 1: nextPos = 38; break; // Ladder
        // ... add cases for all other positions ...
        default: break;
    }

    // Update the player's position
    playerPos = nextPos;

    // Calculate the row and column of the player's position on the game board
    var row = Math.floor((playerPos - 1) / 10);
    var col = (playerPos - 1) % 10;

    // Reverse the direction of every other row
    if (row % 2 == 1) {
        col = 9 - col;
    }

    // Calculate the x and y coordinates on the canvas
    playerTargetPos.x = col * blockSize;
    playerTargetPos.y = (9 - row) * blockSize; // Subtract from 9 because the y-coordinate is 0 at the top of the canvas

    // Update information on the page
    document.getElementById('info').innerText = 'Current Position: ' + playerPos +
        '\nDice Roll: ' + diceValue +
        '\nNext Position: ' + nextPos;

    // Check for winning state
    if (playerPos === 100) {
        document.getElementById('info').innerText = 'Player wins by reaching position 100!';
    }
}



function animate() {
    // Calculate the distance to the target position
    var dx = playerTargetPos.x - playerVisualPos.x;
    var dy = playerTargetPos.y - playerVisualPos.y;

    // Calculate the direction of the movement
    var directionX = dx > 0 ? 1 : -1;
    var directionY = dy > 0 ? 1 : -1;

    // Update the player's visual position
    if (Math.abs(dx) > playerSpeed) {
        playerVisualPos.x += playerSpeed * directionX;
    }
    if (Math.abs(dy) > playerSpeed) {
        playerVisualPos.y += playerSpeed * directionY;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the game board
    for (var x = 0; x <= canvas.width; x += blockSize) {
        for (var y = 0; y <= canvas.height; y += blockSize) {
            ctx.strokeRect(x, y, blockSize, blockSize);
        }
    }

    // Draw the player at the new position
    ctx.fillRect(playerVisualPos.x, playerVisualPos.y, blockSize, blockSize);

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Attach the updateGame function to the button click event
document.getElementById('rollButton').addEventListener('click', updateGame);
