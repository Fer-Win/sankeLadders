var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');

var blockSize = 50; 
for (var y = 0; y <= 9; y++) {
    for (var x = 0; x <= 9; x++) {
        var xPos = x * blockSize;
        var yPos = y * blockSize;
        ctx.strokeRect(xPos, yPos, blockSize, blockSize);
        var number;
        if (y % 2 == 0) {
            number = (9 - y) * 10 + (10 - x);
        } else {
            number = (9 - y) * 10 + x + 1;
        }
        ctx.fillText(number, xPos + blockSize / 2, yPos + blockSize / 2);
    }
}

// Rest of your code...


var snakes = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
var ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };
var playerPos = 1;
var playerVisualPos = { x: 0, y: canvas.height - blockSize };
var playerTargetPos = { x: 0, y: canvas.height - blockSize };
var playerSpeed = 10;
var row = Math.floor((playerPos - 1) / 10);
var col = (playerPos - 1) % 10;
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function updateGame() {
    var diceValue = rollDice();
    var nextPos = playerPos + diceValue;
    if (nextPos > 100) {
        return;
    }
    switch (nextPos) {
        case 1: nextPos = 38; break;
        default: break;
    }
    playerPos = nextPos;
    var row = Math.floor((playerPos - 1) / 10);
    var col = (playerPos - 1) % 10;
    if (row % 2 == 1) {
        col = 9 - col;
    }
    playerTargetPos.x = col * blockSize + blockSize / 10;
    playerTargetPos.y = canvas.height - ((row + 1) * blockSize + blockSize / 10);
    document.getElementById('info').innerText = 'Current Position: ' + playerPos +
        '\nDice Roll: ' + diceValue +
        '\nNext Position: ' + nextPos;
    if (playerPos === 100) {
        document.getElementById('info').innerText = 'Player wins by reaching position 100!';
    }
}
function animate() {
    var dx = playerTargetPos.x - playerVisualPos.x;
    var dy = playerTargetPos.y - playerVisualPos.y;
    var directionX = dx > 0 ? 1 : -1;
    var directionY = dy > 0 ? 1 : -1;
    if (Math.abs(dx) > playerSpeed) {
        playerVisualPos.x += playerSpeed * directionX;
    }
    if (Math.abs(dy) > playerSpeed) {
        playerVisualPos.y += playerSpeed * directionY;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var y = 0; y <= 9; y++) {
        for (var x = 0; x <= 9; x++) {
            var xPos = x * blockSize;
            var yPos = y * blockSize;
            ctx.strokeRect(xPos, yPos, blockSize, blockSize);
            var number;
            if (y % 2 == 0) {
                number = (9 - y) * 10 + (10 - x);
            } else {
                number = (9 - y) * 10 + x + 1;
            }
            ctx.fillText(number, xPos + blockSize / 2, yPos + blockSize / 2);
        }
    }
    ctx.fillRect(playerVisualPos.x, playerVisualPos.y, blockSize, blockSize);
    requestAnimationFrame(animate);
}
animate();
document.getElementById('rollButton').addEventListener('click', updateGame);