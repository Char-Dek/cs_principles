// only javascript goes here NO HTML...
// alert("hello world");
console.log("this is coming from a separate file...")
let myVar = 5;
// console.log is like printf - shows on webpage
// allows programer to send messages to console
console.log("my first console message");
console.log(myVar); 

// bool

let playing = true;

// stating width and hight and variables for draw function
let width = 200;
let height = 450;
let x = 50;
let y = 50;

var player1 = "Tim";
// constant - his name is always ralph
const player2 = "Ralph";


// for loops in js
for (i=0; i<10; i++){
    console.log(i);
}
// state the function
function draw() {
    // variable that allows the code to look for an element in the html document with an ID of 'canvas'
    var canvas = document.getElementById('canvas');
    // if true, then do...
    if (canvas.getContext) {
        // context is 2D
      var ctx = canvas.getContext('2d');

    //   drawing - gets red green blue values for each position 
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(x, y, width, height);

    //   same thing gets  r g b values for another shape and its position
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
  }

//   ending the function
  draw();