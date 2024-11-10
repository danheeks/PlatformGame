

let { init, GameLoop, Text } = kontra;

function render_rect(x, y, w, h, col)
{
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = col;
    ctx.fill();
    ctx.closePath();
}

var background = 
{
    render: function ()
    {
       render_rect(0, 0, 1024, 710, background_color);
    }
}


let { canvas } = init();
var ctx = canvas.getContext("2d");
    
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function render_text(font, color, text, x, y)
{
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    ctx.fillText(text, x, y);
}
        
let loop = GameLoop({  // create the main game loop
  fps: 12.5,
  render: function() { // render the game state
  }
});

loop.start();    // start the game

