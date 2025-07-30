<!-- Banner / Title -->
<h1 align="center">🎨 p5.js Mathematical Shape Animation 💫</h1>
<p align="center">
  An interactive p5.js sketch for mesmerizing, math-driven visuals.<br/>
  <em>Create organic, ever-changing shapes with nothing but sine & cosine!</em>
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/built%20with-p5.js-%23ED225D" alt="Built with p5.js">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License MIT">
  </a>
  <!-- Optional: add a live demo badge if you have one -->
  <!-- <a href="https://your-demo-link.com"><img src="https://img.shields.io/badge/demo-online-blue"></a> -->
</p>

---

## 📑 Table of Contents
1. [Features](#features)
2. [How It Works](#how-it-works)
3. [Mathematical Functions Used](#mathematical-functions-used)
4. [Controls](#controls)
5. [Customization Ideas](#customization)
6. [Getting Started](#getting-started)
7. [Adjustable Parameters](#parameters-you-can-adjust)
8. [Requirements](#requirements)
9. [File Structure](#file-structure)

---

## Features
- ✨ **Animated Organic Shapes**: Uses sine and cosine functions to create flowing, wave-like patterns  
- ⏱ **Real-time Animation**: Shapes evolve continuously with buttery-smooth transitions  
- 🕹 **Interactive Controls**: Click to randomize parameters, press <kbd>Space</kbd> to pause/resume  
- 🥞 **Multiple Layers**: Primary and secondary shapes leverage different mathematical formulas  
- 🧪 **Customizable Formulas**: Swap in your own math for endless experimentation  

---

## How It Works
The sketch generates shapes by:

1. Creating points around a circle using polar coordinates  
2. Modifying the radius of each point with mathematical functions  
3. Converting polar coordinates to Cartesian coordinates for display  
4. Animating parameters over time for fluid motion

---

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
