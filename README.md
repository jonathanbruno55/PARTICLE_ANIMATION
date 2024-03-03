# Particle Animation

This JavaScript code creates an animated scene of particles moving around within a canvas element in a web browser.

## Features

- Generates a canvas element and sets up a drawing context.
- Creates an array of particles with random properties such as position, velocity, and color.
- Animates the particles, updating their positions and leaving a trail behind them.
- Handles edge wrapping, ensuring particles smoothly transition from one side of the canvas to the other.
- Utilizes requestAnimationFrame for smooth animation rendering.

## Usage

To use this code in your project, follow these steps:

1. **Include Script**: Include the JavaScript code in your HTML file, either inline or by linking to an external file.

2. **Add Canvas**: Add a canvas element to your HTML with the id `canvas`.

   ```html
   <canvas id="canvas"></canvas>
   ```

3. **Initialization**: Call `window.onload` to initialize the animation when the window loads.

   ```javascript
   window.onload = function () {
     // Your initialization code here
   };
   ```

Customize the animation parameters and styles to fit your project requirements.

## Parameters

- `numParticles`: Number of particles to be generated.
- `particle.trail.length`: Length of the trail behind each particle.

## Functions

- `update()`: Main animation loop that updates particle positions and draws them.
- `drawParticle(particle)`: Draws a single particle and its trail.
- `randomColor()`: Generates a random color for particles.
- `hexToRgb(hex)`: Converts a hex color code to its RGB equivalent.

Feel free to experiment with the code and create your own unique particle animations!
