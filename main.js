window.onload = function () {
    // Set up canvas and context
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    // Array to hold particle objects
    var particles = [],
        numParticles = 1000; // Number of particles

    // Create particles with random properties
    for (var i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width, // Random x position
            y: Math.random() * height, // Random y position
            vx: Math.random() * 2 - 1, // Random horizontal velocity
            vy: Math.random() * 2 - 1, // Random vertical velocity
            color: randomColor(), // Random particle color
            trail: [] // Trail array
        });
    }

    // Start animation loop
    update();

    // Function to update particle positions and draw them
    function update() {
        // Clear canvas
        context.clearRect(0, 0, width, height);

        // Update and draw each particle
        particles.forEach(function (particle) {
            // Update particle position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = width;
            if (particle.x > width) particle.x = 0;
            if (particle.y < 0) particle.y = height;
            if (particle.y > height) particle.y = 0;

            // Add current position to trail
            particle.trail.push({ x: particle.x, y: particle.y });

            // Limit trail length
            if (particle.trail.length > 20) {
                particle.trail.shift();
            }

            // Draw the particle and its trail
            drawParticle(particle);
        });

        // Request next frame
        requestAnimationFrame(update);
    }

    // Function to draw a single particle and its trail
    function drawParticle(particle) {
        // Draw trail
        context.beginPath();
        context.moveTo(particle.trail[0].x, particle.trail[0].y);
        for (var i = 1; i < particle.trail.length; i++) {
            var p = particle.trail[i];
            context.lineTo(p.x, p.y);
        }
        context.strokeStyle = "rgba(" + hexToRgb(particle.color) + ", 0.05)";
        context.stroke();

        // Draw particle
        context.beginPath();
        context.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.fill();
    }

    // Function to generate a random color
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Function to convert hex color to RGB
    function hexToRgb(hex) {
        var bigint = parseInt(hex.substring(1), 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return r + ", " + g + ", " + b;
    }
};
