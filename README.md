# p5.js Mathematical Shape Animation

An interactive p5.js sketch that creates beautiful animated shapes using mathematical functions, particularly trigonometric functions like sine and cosine.

## Features

- **Animated Organic Shapes**: Uses sine and cosine functions to create flowing, wave-like patterns
- **Real-time Animation**: Shapes evolve continuously over time with smooth transitions
- **Interactive Controls**: Click to randomize parameters, use spacebar to pause/resume
- **Multiple Layers**: Primary and secondary shapes with different mathematical formulas
- **Customizable Formulas**: Easy-to-modify placeholder sections for experimenting with different mathematical functions

## How It Works

The sketch generates shapes by:

1. Creating points around a circle using polar coordinates
2. Modifying the radius of each point using mathematical functions
3. Converting polar coordinates to cartesian coordinates for display
4. Animating the parameters over time for fluid motion

## Mathematical Functions Used

### Primary Shape

```javascript
let radius = amplitude + 
    sin(angle * frequency + time) * 30 +          // Basic wave
    cos(angle * frequency * 2 + time * 1.5) * 20 + // Harmonic
    sin(time * 2) * 15;                           // Global pulsing
```

### Secondary Shape

```javascript
let radius = amplitude * 0.7 + 
    cos(angle * (frequency + 2) - time * 0.8) * 25 +
    sin(angle * frequency * 3 + time * 2) * 15 +
    cos(time * 1.5) * 20;
```

## Controls

- **Spacebar**: Pause/Resume animation
- **R**: Reset animation
- **Mouse Click**: Randomize shape parameters
- **Control Buttons**: Use the on-screen buttons for pause/resume and reset

## Customization

The code includes placeholder sections with alternative mathematical formulas you can use:

1. **Flower Pattern**: `sin(angle * frequency) * 40 * cos(time)`
2. **Star Burst**: `abs(sin(angle * frequency + time)) * 50`
3. **Spiral Effect**: `(angle + time) * 5`
4. **Breathing Effect**: `amplitude * (1 + sin(time * 2) * 0.5)`
5. **Complex Harmonic**: Multiple sine/cosine combinations
6. **Lissajous-inspired**: `sin(angle * frequency + time) * cos(angle * (frequency + 1) + time * 1.5)`
7. **Heartbeat Pattern**: Pulsing sine waves
8. **Turbulence Effect**: Uses Perlin noise for organic randomness

## Getting Started

1. Open `index.html` in a web browser
2. Watch the animated shapes
3. Experiment with the interactive controls
4. Modify the mathematical formulas in `sketch.js` to create your own patterns

## Parameters You Can Adjust

- `amplitude`: How far the shape extends from center
- `frequency`: How many waves around the circle
- `timeSpeed`: Animation speed
- `numPoints`: Resolution/smoothness of the shape

## Requirements

- Modern web browser with JavaScript enabled
- No additional installation required (uses CDN for p5.js)

## File Structure

```text
├── index.html          # Main HTML file
├── sketch.js           # p5.js animation code
├── style.css           # Styling for the page
└── README.md           # This file
```

Experiment with different mathematical functions to create unique, mesmerizing animations!
