

let { init, GameLoop, Text } = kontra;



const data = [ 0, 1, 3, 0, 4, 1, 3, 0, 5, 0, 6, 0, 1, 3, 2, 0, 7, 0,
               0, 0, 4, 0, 0, 6, 0, 3, 0, 0, 0, 8, 0, 9, 3, 0, 0, 0,
               3,10, 0, 0, 2, 1,11, 0, 7, 1, 0, 0, 3, 1, 0, 7, 0, 3,
               0, 2, 0, 9,11, 3, 9, 0, 1, 3,11, 4, 3, 0, 0, 0,12, 0,
               
               7, 1, 1, 8, 0,13, 0, 5, 0, 1, 0, 0, 6, 3,14, 3, 1, 7,
               0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 9, 7, 7, 0, 0, 0, 0, 0,
               3, 0, 0, 6, 0, 0, 0, 6,15,10, 0, 0, 0, 1, 0, 0, 6, 3,
               0, 7,16, 0, 7, 3, 0, 0, 1, 0, 3,16, 0, 0, 9, 0, 0, 0,
               
               0, 1, 0, 0, 0, 3, 0, 1, 0,13,11, 0, 4, 3, 0, 0, 7, 0,
               0, 0,14, 0,12, 7, 9, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0,
               4, 0, 0, 4, 0, 0, 0,14, 0, 1, 9, 0, 0, 7, 0, 3,11, 4,
               0, 7, 0, 0, 9, 0, 2, 0, 0, 1, 3, 0,10, 0, 1, 7, 0, 0,
               
               0, 0,11, 0, 0, 6, 0, 7,12, 0, 0,11, 0, 0, 4, 0, 1, 2,
               0, 5, 0, 7, 0, 0, 3, 3, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0,
               0, 1, 2, 1, 0, 1, 0, 0, 0, 4, 7, 0, 0,13,11, 0,14, 0,
               3, 5, 0, 3,11, 3, 7, 0, 9, 3, 0, 0, 5, 0, 2, 1, 5, 3,
               
               0, 0, 9, 0,11, 0, 0, 3, 0, 0,10, 0, 0, 3, 0, 7,11, 0,
               2,12, 7, 0,10, 0, 0, 1, 6, 0, 0,14, 7, 0, 3, 0, 6, 0,
               1,14, 3, 7, 0, 0, 0, 3, 0, 0, 0, 7, 0, 4, 0, 0, 0, 1,
               0, 7, 1, 2, 4, 0, 0, 3, 0, 0, 0, 5, 0, 7, 0, 0,11, 0,
               
               0, 0, 0,11,11, 0,16, 0, 1, 3, 8, 3, 0, 0, 9, 0,11, 0,
               1,14, 1, 7, 0, 0, 0, 3, 0, 0, 0, 7, 0, 4, 0, 0, 0, 1,
               0, 0, 0, 1, 6,15, 7,14, 3, 7, 0, 0, 1, 0,14, 0,12, 0,
              11, 9, 0,11, 5, 0, 0, 1, 0,11, 7, 0, 3, 6, 0, 0, 3, 2,
               
               0, 1, 3, 0, 4, 1, 3, 0, 5, 0, 6, 0, 1, 3, 2, 0, 7, 0,
              11, 0, 4, 0, 0, 6, 0, 3, 0, 2, 0,10, 0, 9, 1, 0,11,11,
               ];
               
//                     0      1      2      3      4     5     6       7      8       9     10      11    12    13     14      15   16     
const audio_names = ["boop","boop","boop","boop","aah","ooh","crack","bang","crack","ooh","crack","boop","ooh","bang","crack", "","ooh"];

let touch_string = "touch string";

function render_rect(x, y, w, h, col)
{
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = col;
    ctx.fill();
    ctx.closePath();
}

background_color = 'rgba(127, 115, 101, 1)';//'rgba(0, 255, 170, 1)';

var background = 
{
    render: function ()
    {
       render_rect(0, 0, 576, 832, background_color);
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

function render_dot(color, x, y)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(16+x, 16+y, 7, 0, Math.PI * 2, true); // Outer circle
    ctx.fill();
}

function render_skull(color, x, y)
{
// shape code created by danheeks software https://github.com/danheeks/PyCAD

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(21.87+x,20.37+y);
    ctx.lineTo(19.20+x,20.71+y);
    ctx.lineTo(18.66+x,16.71+y);
    ctx.lineTo(18.20+x,20.71+y);
    ctx.lineTo(15.81+x,20.64+y);
    ctx.lineTo(15.27+x,17.17+y);
    ctx.lineTo(14.88+x,20.71+y);
    ctx.lineTo(12.27+x,20.71+y);
    ctx.lineTo(11.88+x,17.25+y);
    ctx.lineTo(11.73+x,21.02+y);
    ctx.lineTo(9.19+x,21.25+y);
    ctx.lineTo(9.26+x,16.79+y);
    ctx.lineTo(8.72+x,14.17+y);
    ctx.lineTo(7.57+x,11.78+y);
    ctx.lineTo(6.49+x,8.93+y);
    ctx.lineTo(6.88+x,5.23+y);
    ctx.lineTo(8.88+x,1.39+y);
    ctx.lineTo(12.11+x,-0.39+y);
    ctx.lineTo(16.58+x,-0.46+y);
    ctx.lineTo(21.20+x,0.23+y);
    ctx.lineTo(24.02+x,2.99+y);
    ctx.lineTo(24.45+x,6.98+y);
    ctx.lineTo(23.96+x,8.40+y);
    ctx.lineTo(23.83+x,11.59+y);
    ctx.lineTo(21.81+x,13.74+y);
    ctx.lineTo(21.87+x,20.37+y);
    ctx.moveTo(12.80+x,11.40+y);
    ctx.lineTo(14.35+x,11.78+y);
    ctx.lineTo(18.20+x,11.63+y);
    ctx.lineTo(18.81+x,10.55+y);
    ctx.lineTo(19.50+x,7.93+y);
    ctx.lineTo(18.50+x,4.85+y);
    ctx.lineTo(16.81+x,4.54+y);
    ctx.lineTo(14.19+x,4.70+y);
    ctx.lineTo(11.96+x,6.08+y);
    ctx.lineTo(10.80+x,8.32+y);
    ctx.lineTo(11.34+x,10.01+y);
    ctx.lineTo(12.80+x,11.40+y);
    ctx.moveTo(14.19+x,7.85+y);
    ctx.lineTo(15.35+x,7.55+y);
    ctx.lineTo(16.50+x,7.93+y);
    ctx.lineTo(17.12+x,8.86+y);
    ctx.lineTo(16.89+x,10.32+y);
    ctx.lineTo(16.19+x,10.86+y);
    ctx.lineTo(14.81+x,11.01+y);
    ctx.lineTo(13.81+x,10.47+y);
    ctx.lineTo(13.19+x,9.32+y);
    ctx.lineTo(14.19+x,7.85+y);
    ctx.moveTo(5.11+x,19.79+y);
    ctx.lineTo(24.43+x,26.26+y);
    ctx.lineTo(27.05+x,25.80+y);
    ctx.lineTo(28.67+x,26.11+y);
    ctx.lineTo(28.28+x,27.88+y);
    ctx.lineTo(26.82+x,29.65+y);
    ctx.lineTo(25.20+x,29.42+y);
    ctx.lineTo(23.89+x,27.80+y);
    ctx.lineTo(4.72+x,21.25+y);
    ctx.lineTo(3.10+x,21.56+y);
    ctx.lineTo(1.87+x,20.64+y);
    ctx.lineTo(2.56+x,18.56+y);
    ctx.lineTo(4.03+x,17.79+y);
    ctx.lineTo(5.26+x,18.25+y);
    ctx.lineTo(5.11+x,19.79+y);
    ctx.moveTo(4.10+x,26.34+y);
    ctx.lineTo(23.05+x,20.33+y);
    ctx.lineTo(25.20+x,19.02+y);
    ctx.lineTo(26.59+x,18.10+y);
    ctx.lineTo(28.82+x,19.10+y);
    ctx.lineTo(29.28+x,20.64+y);
    ctx.lineTo(27.36+x,21.41+y);
    ctx.lineTo(25.20+x,21.25+y);
    ctx.lineTo(6.11+x,27.95+y);
    ctx.lineTo(5.41+x,29.73+y);
    ctx.lineTo(3.64+x,30.03+y);
    ctx.lineTo(2.02+x,28.42+y);
    ctx.lineTo(1.64+x,26.34+y);
    ctx.lineTo(2.79+x,25.41+y);
    ctx.lineTo(4.10+x,26.34+y);
    ctx.fill();
}

function render_ghost(color, x, y)
{
// shape code created by danheeks software https://github.com/danheeks/PyCAD

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(6.00+x,28.30+y);
    ctx.lineTo(5.60+x,8.00+y);
    ctx.lineTo(7.50+x,3.40+y);
    ctx.lineTo(11.10+x,-0.10+y);
    ctx.lineTo(15.70+x,-0.80+y);
    ctx.lineTo(20.60+x,-0.10+y);
    ctx.lineTo(24.00+x,2.00+y);
    ctx.lineTo(25.50+x,5.30+y);
    ctx.lineTo(26.10+x,10.50+y);
    ctx.lineTo(25.90+x,24.80+y);
    ctx.lineTo(26.10+x,27.90+y);
    ctx.lineTo(24.50+x,27.90+y);
    ctx.lineTo(24.00+x,25.40+y);
    ctx.lineTo(21.20+x,25.40+y);
    ctx.lineTo(21.10+x,28.20+y);
    ctx.lineTo(18.60+x,28.10+y);
    ctx.lineTo(18.70+x,25.40+y);
    ctx.lineTo(14.00+x,25.60+y);
    ctx.lineTo(13.70+x,28.30+y);
    ctx.lineTo(11.90+x,28.40+y);
    ctx.lineTo(11.70+x,26.10+y);
    ctx.lineTo(8.70+x,25.80+y);
    ctx.lineTo(8.70+x,28.30+y);
    ctx.lineTo(6.00+x,28.30+y);
    ctx.moveTo(23.90+x,19.80+y);
    ctx.lineTo(24.50+x,19.70+y);
    ctx.lineTo(21.70+x,15.70+y);
    ctx.lineTo(11.50+x,16.00+y);
    ctx.lineTo(8.50+x,19.10+y);
    ctx.lineTo(8.50+x,20.40+y);
    ctx.lineTo(9.10+x,20.40+y);
    ctx.lineTo(9.30+x,19.00+y);
    ctx.lineTo(11.70+x,16.60+y);
    ctx.lineTo(13.30+x,16.90+y);
    ctx.lineTo(15.90+x,16.40+y);
    ctx.lineTo(19.70+x,16.40+y);
    ctx.lineTo(20.10+x,16.70+y);
    ctx.lineTo(21.00+x,16.40+y);
    ctx.lineTo(22.40+x,17.70+y);
    ctx.lineTo(23.90+x,19.80+y);
    ctx.moveTo(17.70+x,12.10+y);
    ctx.lineTo(19.20+x,12.20+y);
    ctx.lineTo(20.10+x,13.60+y);
    ctx.lineTo(21.50+x,13.70+y);
    ctx.lineTo(22.30+x,13.30+y);
    ctx.lineTo(22.80+x,12.90+y);
    ctx.lineTo(22.80+x,12.00+y);
    ctx.lineTo(24.30+x,11.70+y);
    ctx.lineTo(23.60+x,9.60+y);
    ctx.lineTo(22.20+x,7.80+y);
    ctx.lineTo(20.00+x,7.40+y);
    ctx.lineTo(19.00+x,8.30+y);
    ctx.lineTo(17.80+x,9.80+y);
    ctx.lineTo(17.70+x,12.10+y);
    ctx.moveTo(19.80+x,12.10+y);
    ctx.lineTo(19.90+x,10.80+y);
    ctx.lineTo(20.50+x,9.90+y);
    ctx.lineTo(21.70+x,10.00+y);
    ctx.lineTo(22.30+x,11.10+y);
    ctx.lineTo(22.20+x,12.40+y);
    ctx.lineTo(21.70+x,12.90+y);
    ctx.lineTo(20.50+x,13.10+y);
    ctx.lineTo(19.80+x,12.10+y);
    ctx.moveTo(10.80+x,13.90+y);
    ctx.lineTo(12.80+x,13.50+y);
    ctx.lineTo(13.50+x,11.80+y);
    ctx.lineTo(14.40+x,11.30+y);
    ctx.lineTo(14.10+x,8.80+y);
    ctx.lineTo(12.30+x,7.60+y);
    ctx.lineTo(9.90+x,7.60+y);
    ctx.lineTo(9.20+x,9.20+y);
    ctx.lineTo(8.10+x,9.30+y);
    ctx.lineTo(8.30+x,13.00+y);
    ctx.lineTo(9.50+x,12.70+y);
    ctx.lineTo(10.80+x,13.90+y);
    ctx.moveTo(11.00+x,13.00+y);
    ctx.lineTo(10.00+x,11.80+y);
    ctx.lineTo(10.00+x,10.40+y);
    ctx.lineTo(11.40+x,10.00+y);
    ctx.lineTo(12.40+x,10.80+y);
    ctx.lineTo(12.70+x,11.90+y);
    ctx.lineTo(12.30+x,12.90+y);
    ctx.lineTo(11.00+x,13.00+y);
    ctx.fill();
}    

function render_lightning_horizontal(color, x, y)
{
// shape code created by danheeks software https://github.com/danheeks/PyCAD
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(18.10+x,16.30+y);
    ctx.lineTo(17.50+x,18.10+y);
    ctx.lineTo(18.20+x,21.70+y);
    ctx.lineTo(17.20+x,23.50+y);
    ctx.lineTo(15.20+x,25.10+y);
    ctx.lineTo(13.10+x,24.90+y);
    ctx.lineTo(10.50+x,22.50+y);
    ctx.lineTo(1.30+x,15.00+y);
    ctx.lineTo(-0.10+x,12.10+y);
    ctx.lineTo(0.50+x,10.90+y);
    ctx.lineTo(1.40+x,11.20+y);
    ctx.lineTo(3.90+x,12.60+y);
    ctx.lineTo(6.70+x,13.40+y);
    ctx.lineTo(11.90+x,16.30+y);
    ctx.lineTo(12.10+x,9.80+y);
    ctx.lineTo(13.10+x,8.70+y);
    ctx.lineTo(15.10+x,8.00+y);
    ctx.lineTo(17.50+x,9.10+y);
    ctx.lineTo(18.70+x,9.90+y);
    ctx.lineTo(20.40+x,11.00+y);
    ctx.lineTo(22.00+x,12.50+y);
    ctx.lineTo(23.30+x,13.70+y);
    ctx.lineTo(25.10+x,14.90+y);
    ctx.lineTo(26.70+x,16.70+y);
    ctx.lineTo(29.40+x,18.90+y);
    ctx.lineTo(30.90+x,21.40+y);
    ctx.lineTo(30.00+x,21.80+y);
    ctx.lineTo(24.60+x,19.50+y);
    ctx.lineTo(20.40+x,17.80+y);
    ctx.lineTo(18.10+x,16.30+y);
    ctx.fill();
}

function render_lightning_vertical(color, x, y)
{
// shape code created by danheeks software https://github.com/danheeks/PyCAD

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(10.10+x,32.80+y);
    ctx.lineTo(9.70+x,31.20+y);
    ctx.lineTo(11.10+x,28.60+y);
    ctx.lineTo(13.00+x,24.10+y);
    ctx.lineTo(14.90+x,19.90+y);
    ctx.lineTo(10.30+x,20.50+y);
    ctx.lineTo(8.60+x,19.60+y);
    ctx.lineTo(7.30+x,17.90+y);
    ctx.lineTo(7.60+x,15.30+y);
    ctx.lineTo(9.80+x,11.70+y);
    ctx.lineTo(20.10+x,0.20+y);
    ctx.lineTo(21.00+x,0.10+y);
    ctx.lineTo(20.90+x,3.50+y);
    ctx.lineTo(18.90+x,7.20+y);
    ctx.lineTo(14.50+x,13.70+y);
    ctx.lineTo(21.90+x,14.20+y);
    ctx.lineTo(23.30+x,15.90+y);
    ctx.lineTo(23.30+x,18.80+y);
    ctx.lineTo(12.30+x,31.50+y);
    ctx.lineTo(10.10+x,32.80+y);
    ctx.fill();
}

function render_bomb(color, x, y)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(15.70+x,27.20+y);
    ctx.lineTo(19.20+x,27.00+y);
    ctx.lineTo(22.80+x,24.40+y);
    ctx.lineTo(24.80+x,20.20+y);
    ctx.lineTo(24.90+x,15.70+y);
    ctx.lineTo(23.90+x,11.20+y);
    ctx.lineTo(21.30+x,9.10+y);
    ctx.lineTo(18.50+x,7.70+y);
    ctx.lineTo(18.90+x,5.40+y);
    ctx.lineTo(19.10+x,2.70+y);
    ctx.lineTo(15.10+x,0.10+y);
    ctx.lineTo(14.80+x,1.10+y);
    ctx.lineTo(17.40+x,3.70+y);
    ctx.lineTo(17.60+x,6.10+y);
    ctx.lineTo(15.80+x,7.90+y);
    ctx.lineTo(11.20+x,9.10+y);
    ctx.lineTo(8.30+x,11.40+y);
    ctx.lineTo(6.70+x,14.90+y);
    ctx.lineTo(6.10+x,19.10+y);
    ctx.lineTo(7.10+x,21.80+y);
    ctx.lineTo(9.20+x,25.80+y);
    ctx.lineTo(12.80+x,27.00+y);
    ctx.lineTo(15.70+x,27.20+y);
    ctx.moveTo(15.10+x,-1.60+y);
    ctx.lineTo(16.30+x,-4.50+y);
    ctx.lineTo(17.10+x,-3.90+y);
    ctx.lineTo(15.10+x,-1.60+y);
    ctx.moveTo(10.90+x,-1.50+y);
    ctx.lineTo(11.70+x,-2.40+y);
    ctx.lineTo(14.20+x,-0.40+y);
    ctx.lineTo(10.90+x,-1.50+y);
    ctx.moveTo(11.70+x,3.30+y);
    ctx.lineTo(13.60+x,0.70+y);
    ctx.lineTo(13.00+x,3.40+y);
    ctx.lineTo(11.70+x,3.30+y);
    ctx.moveTo(13.00+x,10.80+y);
    ctx.lineTo(10.90+x,11.90+y);
    ctx.lineTo(9.60+x,13.00+y);
    ctx.lineTo(9.10+x,16.00+y);
    ctx.lineTo(9.60+x,17.80+y);
    ctx.lineTo(11.30+x,18.20+y);
    ctx.lineTo(11.50+x,16.30+y);
    ctx.lineTo(11.20+x,13.90+y);
    ctx.lineTo(13.00+x,12.00+y);
    ctx.lineTo(13.00+x,10.80+y);
    ctx.fill();
}
        
canvas.addEventListener('click', function(evt) {
    if(!isTouchDevice())
    {
        let i = Math.floor(evt.x / 32);
        let j = Math.floor(evt.y / 32);
        let index = j*18 + i;
        let name = audio_names[data[index]];
        if(name != "")
        {
        var audio = new Audio(name + ".mp3");
        audio.play();
        }
    }
});
    
window.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default behavior, like scrolling
    touch = event.touches[event.touches.length - 1];
    let i = Math.floor(touch.pageX / 32);
    let j = Math.floor(touch.pageY / 32);
    if(i < 0)i = 0;
    if(i > 17) i = 17;
    if(j < 0)j = 0;
    if(j > 25)j = 25;
    let index = j*18 + i;
    let name = audio_names[data[index]];
    if(name != "")
    {
    var audio = new Audio(name + ".mp3");
    audio.play();
    }
    });


    
let loop = GameLoop({  // create the main game loop
  fps: 12.5,
  render: function() { // render the game state
    background.render();
    let index = 0;
    for(let j = 0; j < 26; j++)
    {
        for(let i = 0; i<18; i++)
        {
            switch(data[index])
            {
                case 1:
                    render_dot('rgba(184, 188, 165, 1)', i * 32, j * 32);
                    break;
                case 2:
                    render_dot('rgba(139, 149, 151, 1)', i * 32, j * 32);
                    break;
                case 3:
                    render_dot('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 4:
                    render_skull('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 5:
                    render_ghost('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 6:
                    render_lightning_horizontal('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 7:
                    render_bomb('rgba(89, 85, 76, 1)', i * 32, j * 32);
                    break;
                case 8:
                    render_lightning_vertical('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 9:
                    render_ghost('rgba(139, 149, 151, 1)', i * 32, j * 32);
                    break;
                case 10:
                    render_lightning_vertical('rgba(89, 85, 76, 1)', i * 32, j * 32);
                    break;
                case 11:
                    render_dot('rgba(188, 184, 165, 1)', i * 32, j * 32);
                    break;
                case 12:
                    render_ghost('rgba(184, 188, 165, 1)', i * 32, j * 32);
                    break;
                case 13:
                    render_bomb('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 14:
                    render_lightning_vertical('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                case 15:
                    break;
                case 16:
                    render_ghost('rgba(165, 159, 143, 1)', i * 32, j * 32);
                    break;
                default:
                    render_dot('rgba(89, 85, 76, 1)', i * 32, j * 32);
                    break;
            }
            index += 1;
        }
    }
    render_text('32px Arial','white', touch_string, 0,580);
  }
});

loop.start();    // start the game

