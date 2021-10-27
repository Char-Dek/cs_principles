// global variables

let canvas;
let ctx;

function init() {
    // creates a variable called canvas that holds the HTML document element <canvas></canvas>
    // the canvas allows us to draw things on the HTML document page
    // check out the MDN reference here for more info https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
    // method - function for an object 
    canvas = document.createElement("canvas");
    // the CanvasRenderingContext2D interface, part of the Canvas API, allows us to draw
    // You can use it to create shapes, text, images, and other objects.
    // here we assign the context to ctx, which is a shorthand way of accessing commands
    ctx = canvas.getContext('2d');
    // smart to do just so you know
    console.log("game initialized"); 
    // Here we append the body of the HTML document, which adds the canvas to the document body
    document.body.appendChild(canvas);
    gameLoop();
}


function draw() {
    oneSquare.draw();
    twoSquare.draw();
}

// here we have a big leap!
// We are using the window.requestAnimationFrame() 
// .requestAnimationFrame() is a method (likg a function attached to an object)
// It tells the browser that you wish to animate
// It asks the browser to call a specific function, in our case gameLoop
// It uses this function to 'repaint'
// In JS this called a callback, where a function passes an argument to another function
let Square = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.update = function () {
    //     this.x += 5;
    // }
    this.draw = function () {
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
}

// instantiations...
let oneSquare = new Square(10, 10, 50, 50);
let twoSquare = new Square(60, 60, 50, 50);

let gameLoop = function(){
    // update();
    // console.log("the game loop is alive now comment this out before it eats up memory")
    draw();
    window.requestAnimationFrame(gameLoop);
}
