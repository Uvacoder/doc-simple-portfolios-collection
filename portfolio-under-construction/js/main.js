// ANIMATION CASSIE WRITING

var bounceIn = anime({
    targets: '.letter__part',
    translateY: {
        value: [-30, 0],
        duration: 900,
        elasticity: 600,
        easing: 'easeOutElastic'
    },
    opacity: {
        value: [0, 1],
        duration: 300,
        easing: 'linear'
    },
    delay: function(el, i) { return i * 40 },
    // delay increment per letter.
});

var lineDrawing = anime({
    targets: '.color-2, .color-3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: function(el, i) { return i * 60 },
    loop: false,
    direction: 'alternate',
});

// END ANIMATION CASSIE WRITING



//https://codepen.io/cassieevans/pen/aLPKYo

// https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/
//http://creativejs.com/resources/requestanimationframe/

// Obtain a reference to the canvas element using its id.
var canvas = document.getElementById('noise');
// Obtain a graphics context on the canvas element for drawing.
var ctx = canvas.getContext('2d');
// setting canvas width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = canvas.width;
var height = canvas.height;

function noise(canvas) {
    //obtain a reference to the canvas’ image data
    var imageData = ctx.createImageData(width, height);
    //micro-optimisation to get a reference to the raw pixel data
    var data = imageData.data;
    //make a new ImageBuffer for direct manipulation of that ImageData 
    var buffer = new Uint32Array(imageData.data.buffer);
    var length = buffer.length;
    // Cycling through all the integers in the array. The values of the red, green, and blue channels, along with the alpha channel are packed into a single integer using bitwise left-shifts and bitwise ORs.
    for (i = 0; i < length; i++) {
        buffer[i] = 255 * Math.random() << 24;
    }
   
    ctx.putImageData(imageData, 0, 0);



}



// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill/cross browser by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var fps = 15;

function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw);
        for (let i = 0; i < 2; i++) {
            noise();
        }
    }, 1000 / fps);
}
draw();
