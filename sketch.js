// p5.js Mathematical Animation Sketch
// Creates flowing, organic shapes using trigonometric functions

let time = 0;
let animationRunning = true;
let canvas;

// Animation parameters
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const CENTER_X = CANVAS_WIDTH / 2;
const CENTER_Y = CANVAS_HEIGHT / 2;

// Shape parameters - modify these for different effects
let amplitude = 100;      // How far the shape extends from center
let frequency = 3;        // How many waves around the circle
let timeSpeed = 0.02;     // Animation speed
let numPoints = 200;      // Resolution of the shape

function setup() {
    // Create canvas and attach to container
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('sketch-container');
    
    // Set color mode for better color control
    colorMode(HSB, 360, 100, 100, 100);
    
    // Smooth drawing
    noFill();
    strokeWeight(2);
}

function draw() {
    // Dark background with slight transparency for trail effect
    background(220, 20, 10, 20);
    
    // Update time if animation is running
    if (animationRunning) {
        time += timeSpeed;
    }
    
    // Draw the main animated shape
    drawMathematicalShape();
    
    // Draw additional decorative elements
    drawSecondaryShape();
    
    // Draw center point
    drawCenterPoint();
}

function drawMathematicalShape() {
    // Primary shape using sine and cosine functions
    stroke(180 + sin(time) * 30, 80, 90, 80);
    
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        let angle = map(i, 0, numPoints, 0, TWO_PI);
        
        // PLACEHOLDER 1: Main radius calculation
        // You can replace this formula to create different shapes
        let radius = amplitude + 
                    sin(angle * frequency + time) * 30 +          // Basic wave
                    cos(angle * frequency * 2 + time * 1.5) * 20 + // Harmonic
                    sin(time * 2) * 15;                           // Global pulsing
        
        // Convert polar to cartesian coordinates
        let x = CENTER_X + cos(angle) * radius;
        let y = CENTER_Y + sin(angle) * radius;
        
        vertex(x, y);
    }
    endShape(CLOSE);
}

function drawSecondaryShape() {
    // Secondary shape with different parameters
    stroke(60 + cos(time * 1.3) * 40, 60, 70, 60);
    strokeWeight(1);
    
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        let angle = map(i, 0, numPoints, 0, TWO_PI);
        
        // PLACEHOLDER 2: Secondary shape formula
        // Experiment with different mathematical functions here
        let radius = amplitude * 0.7 + 
                    cos(angle * (frequency + 2) - time * 0.8) * 25 +
                    sin(angle * frequency * 3 + time * 2) * 15 +
                    cos(time * 1.5) * 20;
        
        let x = CENTER_X + cos(angle) * radius;
        let y = CENTER_Y + sin(angle) * radius;
        
        vertex(x, y);
    }
    endShape(CLOSE);
    
    strokeWeight(2); // Reset stroke weight
}

function drawCenterPoint() {
    // Pulsing center point
    let pulseSize = 5 + sin(time * 3) * 3;
    
    fill(0, 0, 100, 80);
    noStroke();
    ellipse(CENTER_X, CENTER_Y, pulseSize, pulseSize);
    
    // Restore drawing settings
    noFill();
    stroke(255);
}

// Control functions
function toggleAnimation() {
    animationRunning = !animationRunning;
}

function resetAnimation() {
    time = 0;
    animationRunning = true;
}

// Interactive features
function keyPressed() {
    if (key === ' ') {
        toggleAnimation();
    } else if (key === 'r' || key === 'R') {
        resetAnimation();
    }
}

function mousePressed() {
    // Click to add some randomness
    if (mouseX > 0 && mouseX < CANVAS_WIDTH && mouseY > 0 && mouseY < CANVAS_HEIGHT) {
        amplitude = random(50, 150);
        frequency = random(2, 6);
        timeSpeed = random(0.01, 0.05);
    }
}

// PLACEHOLDER SECTION: Alternative Mathematical Formulas
// Replace the radius calculations in drawMathematicalShape() and drawSecondaryShape()
// with any of these formulas for different effects:

/*
// 1. Flower pattern
let radius = amplitude + sin(angle * frequency) * 40 * cos(time);

// 2. Star burst
let radius = amplitude + abs(sin(angle * frequency + time)) * 50;

// 3. Spiral effect
let radius = amplitude + (angle + time) * 5;

// 4. Breathing effect
let radius = amplitude * (1 + sin(time * 2) * 0.5) + sin(angle * frequency) * 20;

// 5. Complex harmonic
let radius = amplitude + 
            sin(angle * frequency + time) * 30 +
            sin(angle * frequency * 3 + time * 2) * 20 +
            cos(angle * frequency * 5 + time * 3) * 10;

// 6. Lissajous-inspired
let radius = amplitude + 
            sin(angle * frequency + time) * cos(angle * (frequency + 1) + time * 1.5) * 40;

// 7. Heartbeat pattern
let radius = amplitude + sin(angle * frequency) * (30 + sin(time * 4) * 20);

// 8. Turbulence effect
let radius = amplitude + 
            noise(angle * 0.1, time * 0.1) * 60 +
            sin(angle * frequency + time) * 20;
*/
