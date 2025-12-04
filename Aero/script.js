const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function Snowflake() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1;
    this.speed = Math.random() * 1 + 0.5;
    this.wind = Math.random() * 1 - 0.5;
}

function createSnowflakes() {
    for (let i = 0; i < 150; i++) {
        snowflakes.push(new Snowflake());
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.beginPath();

    snowflakes.forEach(flake => {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });

    ctx.fill();
    moveSnowflakes();
}

function moveSnowflakes() {
    snowflakes.forEach(flake => {
        flake.y += flake.speed;
        flake.x += flake.wind;

        if (flake.y > canvas.height) {
            flake.y = -5;
            flake.x = Math.random() * canvas.width;
        }
    });
}

function update() {
    drawSnowflakes();
    requestAnimationFrame(update);
}

createSnowflakes();
update();
