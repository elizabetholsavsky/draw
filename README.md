<div align="center"> 
  
  [![drawma-50](https://github.com/elizabetholsavsky/drawma/assets/116515976/b5c49b4e-011c-4d86-899a-073247922437)](https://elizabetholsavsky.github.io/drawma/)

  <a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>
  ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)
  ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)
  ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)
  
  [https://elizabetholsavsky.github.io/drawma/](https://elizabetholsavsky.github.io/drawma/)
  
</div>

## Description

[*Drawma*](https://elizabetholsavsky.github.io/drawma/) is a simple drawing website built alongside the [Coding Nepal](https://github.com/codingnepal) tutorial. The website utilizes the HTML canvas element to allow users to draw outline shapes, filled shapes, straight lines, and various brush and eraser sizes in the user's colors of choice. Drawings can be saved to the user's personal device.

![drawma](https://github.com/elizabetholsavsky/drawma/assets/116515976/740dbe2a-4019-41c3-b652-f48699914510)

## Table of Contents

* [Contributing](#contributing)
* [Objectives](#objectives)
* [Learning Outcomes](#learning-outcomes)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Contributing
[Drawing App in JavaScript video](https://www.youtube.com/watch?v=y84tBZo8GFo) by [Coding Nepal](https://github.com/codingnepal)

More information about `<canvas>` can be found here:
* [HTML Living Standard-- The canvas element](https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element)
* [Can I Use-- HTML element: Canvas](https://caniuse.com/?search=HTML%20canvas)
* [MDN Web Docs-- HTML Canvas Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
* [HTML Canvas Deep Dive by Josh Marinacci](https://joshondesign.com/p/books/canvasdeepdive/toc.html)

## Objectives
I was interested in creating this project to learn more about the HTML5 canvas. Canvas is a container for JavaScript-created graphics and includes several methods for drawing paths and shapes. Canvas is often used to make 2D JavaSript games, which I am determined to create as a personal project in the future. I first began learning about Canvas through [*Chris Courses* YouTube Tutotials](https://www.youtube.com/watch?v=EO6OkltgudE&list=PLIrAIaNuo8lUwoVTogeikht-HMOQm_j5O&index=2) and used this project to dip my toes into the code. 

## Learning Outcomes
During this project I learned about the DOM method `getContext` which was respresented by `ctx` in the coded application. The function takes only one parameter-- the type of context (2D). I was then able to set properties like `beginPath`, `stroke`, `fillStyle`, `strokeRect`, `arc`, `lineTo`, etc. to draw and style shapes within the canvas.

I also learned that the origin of the coordinate grid used for canvas is in the upper left corner with the y axis going down (and I also learned that this is common for computer graphics). When I first began drawing onto the canvas, I noticed that the mousedown event started the drawing far away from my mouse. We corrected this behavior using the `offsetX` and `offsetY` properties from the `MouseEvent` object which allowed access of the X an Y coordinates of the mouse pointer within the canvas. 

There are lots of ways I could take this project to the next level. Some ideas I'd consider for future development include adding a 'create text' button, make the application usable on touch devices by using touch events in addition to mouse events, and 'undo' functionallity by storing drawing history into an array and popping off the last action. 

I am in awe of the [Classic MS Paint clone](https://github.com/1j01/jspaint) ([www.jspaint.app](https://jspaint.app)) created by [1j01](https://github.com/1j01). The possibilities are endless!
  
## Usage
Visit [https://elizabetholsavsky.github.io/drawma/](https://elizabetholsavsky.github.io/drawma/) to begin drawing. Choose a color from the palette or use the color picker (white paint pot). Use a shape tool or brush to begin drawing. Note that the line width can be adjusted using the slider. Toggle 'Fill' to draw solid shapes in the color of your choice. If you make a mistake, use the 'Eraser' tool which is also available in a range of sizes using the slider. If you would like to save your image, click the 'Save' button to save your artwork as a `.jpeg` file or click the 'Clear' button to start over again. Remember, every masterpiece begins with a single stroke...

## License
[MIT License](https://opensource.org/licenses/MIT)

## Questions
* Email elizabetholsavsky@gmail.com
* LinkedIn [https://www.linkedin.com/in/elizabetholsavsky/](https://www.linkedin.com/in/elizabetholsavsky/)
* Portfolio [https://elizabetholsavsky.com/](https://elizabetholsavsky.com/)
* Hashnode [https://elizabetholsavsky.hashnode.dev/](https://elizabetholsavsky.hashnode.dev/)
* Twitter [@elizavsky](https://twitter.com/home)
