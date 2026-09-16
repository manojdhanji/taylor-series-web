# Taylor Series Web  
An interactive, browser‑based visualization tool for exploring **Taylor** and **Maclaurin** series.  
Built with modular JavaScript, a responsive canvas engine, and a clean UI designed for mathematical clarity.

---

## Overview

Taylor Series Web lets you visualize how polynomial approximations behave around an expansion point.  
You can:

- Select a mathematical function  
- Adjust the Taylor/Maclaurin order  
- Compare the original function with its polynomial approximation  
- Observe convergence near the expansion point and divergence farther away  

This tool is ideal for students, instructors, and anyone wanting an intuitive understanding of Taylor series.

---

## Features

### Responsive Plotting Engine
- Full‑width canvas with dynamic resizing  
- Aspect‑ratio‑preserving transforms  
- Square grid cells  
- Centered math region  
- Clean coordinate mapping  

### Function Visualization
- Original function plotted in **green**  
- Taylor/Maclaurin approximation plotted in **orange**  
- Smooth curves with adjustable resolution  

### 🎛 Interactive Controls
- Function selector  
- Taylor order slider (0–10)  
- Reset View button  
- Color legend  
- Responsive left control panel  

### Supported Functions
- `sin(x)`  
- `cos(x)`  
- `exp(x)`  
- `log (1 + x)`
- `1/ (1 + x)`
- `logistic(x)` — a sigmoidal function widely used in ML and biology  
- More functions can be added easily via `functions.js`

---

## Mathematical Background

A **Taylor series** approximates a function using its derivatives at a chosen point \( x_0 \):

```text
       ∞
f(x) = ∑ f^n(a)(x-a)^n(n!)^-1
       n=0
```

A **Maclaurin series** is a special case where x_0 = 0 .

Taylor polynomials:

- Match the function exactly at the expansion point  
- Become more accurate as the order increases  
- Are excellent *local* approximations  
- Often diverge far from the expansion point  

This app visually demonstrates these behaviors.

---

##  Project Structure

### Key Modules

#### `plot.js`
- Handles canvas resizing  
- Computes world bounds  
- Maintains uniform scaling  
- Draws grid + axes  
- Plots functions  

#### `taylor.js`
Builds a Taylor polynomial using:

- Derivatives  
- Expansion point  
- Polynomial order  

Returns a callable function representing the approximation.

#### `functions.js`
Defines each function and its derivatives.  
Adding new functions is straightforward.

#### `main.js`
Coordinates:

- Function selection  
- Taylor order updates  
- Redrawing  
- Reset behavior  

---

##  Building the Project

This project is fully client‑side.
This project includes a Docker setup for easy deployment using **Nginx** as a static file server.

###  Build the Docker image

```bash
docker compose build --no-cache
```

##  Running with Docker

###  Run Docker container

From the project root:

```bash
docker compose up -d   
```
### Open directly

Just open any modern browser and visit http://localhost:8087
This corresponds to the port mapping in your docker-compose.yaml:
    8087:80


