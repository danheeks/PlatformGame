

let { init, Sprite, GameLoop, Text } = kontra;

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);


const levels = [
          // level 1
     [   
       ['Central Cavern', 'level1',[0,0,0], 80, 480, false],
        [
         // list of monsters
            [0, false, 288, 288, 272, 528],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','floorfall1','floorfall2',
         'floorfall3','floorfall4','floorfall5','floorfall6','floorfall7','end','','',
         '','endinv','','','','key',''
         ],
    [  
     // list of lines
    'A        V E    E            V A',
    'A               V              A',
    'A                              A',
    'A                              A',
    'A                      CV  C   A',
    'ABBBBBBBBBBBBBFFFFBFFFFBBBBBBBBA',
    'A                             VA',
    'ABBB                           A',
    'A                AAA C         A',
    'ABBBB   DDDDDDDDDDDDDDDDDDDD   A',
    'A                            BBA',
    'A                              A',
    'AE          C       AAAFFFFFBBBA',
    'A    BBBBBBBBBBBBBBB         NOA',
    'A                            PQA',
    'ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBA',
    ],
    ], // end of level 1
    
          // level 2
     [   
       ['The Cold Room', 'level2',[0,0,255], 80, 480, false],
        [
         // list of monsters
            [0, true, 624, 160, 48, 624],
            [0, true, 976, 480, 400, 976],
        ],
        [
         'brick','floor','','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','paddle',''
         ],
    [  
     // list of lines
    'A                  AAAAAAAAAAAAA',
    'A      V                V     EA',
    'A                              A',
    'A                    FFFB      A',
    'A                              A',
    'ABBBBBBBBBBBBBBBBBBB        A  A',
    'A                    BBBBAFFA  A',
    'ABFFFFF                  AV A  A',
    'A                        AFFA  A',
    'A  V     BBBBBBB         AFFA  A',
    'A                  FFFF  AFFA  A',
    'A  WWWW                  AFFA  A',
    'A             BBBB V     AFFA  A',
    'A       FFFF                 NOA',
    'A                            PQA',
    'ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBA',
    ],
    ], // end of level 2
    
          // level 3
     [   
       ['The Menagerie', 'level3',[0,0,0], 80, 480, false],
        [
         // list of monsters
            [3, true, 560, 160, 48, 560],
            [3, false, 592, 160, 592, 976],
            [3, true, 656, 480, 48, 656],
        ],
        [
         'wall','floor','web','','spider','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     // list of lines
    'A     V   E    V  C    V   E   A',
    'A                 E            A',
    'A                              A',
    'A                              A',
    'A                              A',
    'ABBBBFFFFFFFFFFFFFFFFFFFFFFFFFFA',
    'A                    V        VA',
    'ABBBBBB                    BBBBA',
    'AC                             A',
    'AC    DDDDDD                   A',
    'AC                       BBBBBBA',
    'AE            BBBBB          NOA',
    'A    BBBBBB                  PQA',
    'A                    BBBBBBBBBBA',
    'A                              A',
    'ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBA',
    ],
    ], // end of level
        
          // level 4
     [   
       ['Abandoned Uranium Workings', 'level3',[0,0,0], 976, 480, true],
        [
         // list of monsters
            [0, false, 48, 480, 48, 256],
            [0, false, 288, 480, 288, 976],
        ],
        [
         'wall','floor','web','','spider','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     // list of lines
    'AV     E      AAAAAAAAAAAAAAAAAA',
    'A           V            V   NOA',
    'A                            PQA',
    'A                  BBBBBB      A',
    'A                          BBBBA',
    'AB     B         B             A',
    'A           BB  V    BBB      VA',
    'AFFF                           A',
    'A      BB                 BBB  A',
    'A                 BBB          A',
    'AWWW                          BA',
    'A           BBB       BBB      A',
    'A     BB               E    BBBA',
    'A                 BB           A',
    'A                              A',
    'ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBA',
    ],
    ], // end of level
            
          // level 5
     [   
       ["Eugene's Lair", 'level5',[240,0,0], 80, 160, false],
        [
         // list of monsters
            [2, true, 416, 160, 48, 416],
            [2, false, 128, 288, 128, 416],
            [1, false, 512, 64, 64, 416],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     // list of lines
    'A                   E          A',
    'A                             VA',
    'A                              A',
    'A                              A',
    'A                       C      A',
    'ABBBBBBBBBBBBB    FFFFBBBBBB   A',
    'A                            BBA',
    'A                    C       V A',
    'A                 DDDDDDDDDD   A',
    'A   BBBBBBBBBB                 A',
    'A                              A',
    'AFFBBBBBBBBBBB    BBBBBBB     BA',
    'A      VAV                     A',
    'ABB     A     ANOA             A',
    'A    C  A     APQAAAAAAACC     A',
    'ABBBBBBBAAAAAAAAAAAAAAAABBBBBBBA',
    ],
    ], // end of level
    
            
          // level 6
     [   
       ["Processing Plant", 'level6',[0,0,0], 512, 160, true],
        [
         // list of monsters
            [2, true, 416, 160, 48, 416],
            [2, false, 128, 288, 128, 416],
            [1, false, 512, 64, 64, 416],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     // list of lines
    'A                   E          A',
    'A                             VA',
    'A                              A',
    'A                              A',
    'A                       C      A',
    'ABBBBBBBBBBBBB    FFFFBBBBBB   A',
    'A                            BBA',
    'A                    C       V A',
    'A                 DDDDDDDDDD   A',
    'A   BBBBBBBBBB                 A',
    'A                              A',
    'AFFBBBBBBBBBBB    BBBBBBB     BA',
    'A      VAV                     A',
    'ABB     A     ANOA             A',
    'A    C  A     APQAAAAAAACC     A',
    'ABBBBBBBAAAAAAAAAAAAAAAABBBBBBBA',
    ],
    ], // end of level
    
     ];
level = [];
blocks = 'ABCDEFGHIJKLMNOPQRSTUVW';
wall_flags =  '1                      ';
floor_flags = '11 2 11111111         3';
on_flags =    '  1 1        2222      ';   // 1 = death,  2 = end
jump_dir = [-16, -16, -14, -10, -8, -6, -4, -2, 0, 0, 2, 4, 6,  8, 10, 14, 16, 16];
images = [];
pixel_scale = 32; // pixels per metre
font_height = 30;
//myfont = pygame.font.SysFont('Arial', font_height);  to do
left_pressed = false;
right_pressed = false;
up_pressed = false;
space_pressed = false;
animation_index = 0;
keys_left = 1;
air = 2000;
score = 0;
high_score = 0;
level_number = 0;
conveyor = [];
level_title = '';
background_color = 'rgba(0, 0, 0, 1)';//'rgba(0, 255, 170, 1)';
num_lives = 3;
paused = false;
key_down = 0;
GAME_MODE_PLAYING = 0;
GAME_MODE_DEATH = 1;
GAME_MODE_PAUSED = 2;
GAME_MODE_END_LEVEL = 3;
GAME_MODE_GAME_OVER = 4;
GAME_MODE_GAME_WIN = 5;
game_mode = GAME_MODE_PLAYING;
man_for_squashing = null;
foot_image = new Image();
foot_image.src = 'foot.png';

const GIRL_OFFSETS = [[16, 60],[14, 60],[14, 61],[16, 63],[17, 62],[18, 63],[17, 64],[16, 63],];
const GIRL_PIXEL_SCALE = 185;
const DAN_OFFSETS = [[24, 65],[19, 66],[11, 64],[15, 64],[21, 63],[16, 63],[10, 63],[15, 64],]; // rescaled
const DAN_PIXEL_SCALE = 230;
const EUGENE_OFFSETS = [ [240,480], ];
const EUGENE_PIXEL_SCALE = 240;
const TOILET_OFFSETS = [ [25, 63], [25, 63], [25, 63], [25, 63], [25, 63], [25, 63], [25, 63], [25, 63],  ];
const TOILET_PIXEL_SCALE = 32;
const GOOSE_OFFSETS = [[39, 65],[39, 65],[39, 65],[39, 65],[39, 65],[39, 65],[39, 65],[39, 65],];
const GOOSE_PIXEL_SCALE = 118;

touches = []

window.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default behavior, like scrolling
    touches = event.touches;
});

// Handle touch move
window.addEventListener('touchmove', (event) => {
    event.preventDefault();
    touches = event.touches;
});

// Handle touch end
window.addEventListener('touchend', (event) => {
    event.preventDefault();
    touches = event.touches;
});

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

function onKeyDown(e) {
    key_down = e.keyCode;
    
    switch (e.keyCode)
    {
       case 32:
           space_pressed = true;
           break;
       case 37:
           left_pressed = true;
           break;
       case 38:
           up_pressed = true;
           break;
       case 39:
           right_pressed = true;
           break;
    }
}

function onKeyUp(e) {
    switch (e.keyCode)
    {
       case 32:
           space_pressed = false;
           break;
       case 37:
           left_pressed = false;
           break;
       case 38:
           up_pressed = false;
           break;
       case 39:
           right_pressed = false;
           break;
    }
}

function is_wall(c)
{
    if(c == ' ')
        return false;
        
    index = c.charCodeAt(0) - 65;
    return wall_flags[index] != ' ';
}

function floor_flag(c)
{
    if (c == ' ')
        return 0;
    index = c.charCodeAt(0) - 65;
    if (floor_flags[index] == ' ')
        return 0
    return Math.trunc(floor_flags[index]);
}

function on_flag(i,j)
{
    c = level[j][i];
    if (c == ' ')
        return false;
    if (c == 'V')
    {
        // clear key
        score += 100;
        level[j][i] = ' ';
    }
    index = c.charCodeAt(0) - 65;
    if (on_flags[index] == ' ')
        return 0;
    return Math.trunc(on_flags[index]);
}


function affect_floor(j,i)
{
    c = level[j][i]
    if (c >= 'F' && c < 'M')
        level[j][i] = String.fromCharCode(c.charCodeAt(0)+1);
    else if (c == 'M')
        level[j][i] = ' ';
}

man = null;
monsters = [];

function load_level(scene)
{
    air = 2000;
    level = [];
    
    for (let i = 0; i < levels[level_number][3].length; i++)
    {
        line = levels[level_number][3][i];
        line_list = [];
        for (let j = 0; j<32; j++)
        {
            line_list.push(line[j]);
        }
        level.push(line_list);
    }
    
    leftward = levels[level_number][0][5];
    man = new Man(levels[level_number][0][3], levels[level_number][0][4], leftward);
    monsters = [];
    for (let i = 0; i < levels[level_number][1].length; i++)
    {
        m = levels[level_number][1][i];
        if (m[0] == 1)
            monsters.push(new Eugene( m[1], m[2], m[3], m[4], m[5]));
        else
            monsters.push(new Monster(m[0], m[1], m[2], m[3], m[4], m[5]));
    }
    images = [];
    image_folder_name = levels[level_number][0][1];
    level_title = new Text({text: levels[level_number][0][0], font: '32px Arial', color: 'white', x: 400 });
    background_color = 'rgba(' + levels[level_number][0][2][0] + ', ' + levels[level_number][0][2][1] + ', ' + levels[level_number][0][2][2] + ', 1)';
    for (let i = 0; i < levels[level_number][2].length; i++) {
        image_name = levels[level_number][2][i];
        // images[0] for 'A', images[1] for 'B' etc.
        if (image_name == '')
            images.push(null);
        else
        {
            var img = new Image();
            img.src = image_folder_name + '/' + image_name + '.png';
            images.push(img);
        }
    }
    
    conveyor = [];
    for(let i = 0; i<4; i++)
    {
        var image = new Image();
        image.src = image_folder_name + '/conveyor' + (i+1) + '.png';
        conveyor.push(image);
    }
}
    
function animated_zoom()
{
    save_pixel_scale = pixel_scale;
    half_width = man.image.get_width() * 0.5;
    half_height = man.image.get_height() * 0.5;
    
    multiplier = 1.27;
    frames = 10;
    
    final_scale = math.pow(multiplier, frames);
    final_man_pos = [512, 700];
    save_man_pos = [man.pos[0], man.pos[1]];
    
    for(let i = 0; i<frames; i++)
    {
        pixel_scale *= multiplier;
        man.images = [];
        man.leftward_images = [];
        man.load_images();
        draw_background();
        
        man_shift = [(final_man_pos[0] - save_man_pos[0]) * (i+1)/frames,
                     (final_man_pos[1] - save_man_pos[1]) * (i+1)/frames];
        
        man.pos[0] = save_man_pos[0] + man_shift[0];
        man.pos[1] = save_man_pos[1] + man_shift[1];
        
        man.draw();
        
        for(let j = 0; j<monsters.length; j++)
        {
            monster = monsters[j];
            monster.images = []
            monster.leftward_images = []
            monster.load_images()
            
            save_monster_pos = [monster.pos[0], monster.pos[1]];
            monster.pos[0] -= save_man_pos[0];
            monster.pos[0] *= pixel_scale / save_pixel_scale;
            monster.pos[0] += man.pos[0];
            monster.pos[1] -= save_man_pos[1];
            monster.pos[1] *= pixel_scale / save_pixel_scale;
            monster.pos[1] += man.pos[1];

            monster.draw();

            monster.pos[0] = save_monster_pos[0];
            monster.pos[1] = save_monster_pos[1];
        }
        
        //draw_level()
        draw_level([man.pos[0] - save_man_pos[0] * pixel_scale / save_pixel_scale, man.pos[1] - save_man_pos[1] * pixel_scale / save_pixel_scale]);            
        
        clock.tick(12.5);
        pygame.display.flip();
    }
    pixel_scale = save_pixel_scale;
    
    time.sleep(0.5);
}

function on_man_death()
{
    game_mode = GAME_MODE_DEATH; // stay in a collision mode for a moment
    animation_index = 0;
}
        
function on_lose_life()
{
    num_lives -= 1;
    if(num_lives == 0)
        on_game_over();
    else
    {
        load_level();
        game_mode = GAME_MODE_PLAYING;
        animation_index = 0;
    }
    left_pressed = false;
    right_pressed = false;
    up_pressed = false;
    space_pressed = false;
}

class Rect
{
    constructor(xmin, ymin, xmax, ymax)
    {
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
    }
    
    intersects(rect)
    {
        if (rect.xmin > this.xmax)return false;
        if (rect.ymin > this.ymax)return false;
        if (rect.xmax < this.xmin)return false;
        if (rect.ymax < this.ymin)return false;
        return true;
    }
    
    intersecting_rect(rect)
    {
        if (rect.xmin > this.xmax)return null;
        if (rect.ymin > this.ymax)return null;
        if (rect.xmax < this.xmin)return null;
        if (rect.ymax < this.ymin)return null;
        
        let xmin = this.xmin;
        if(rect.xmin > xmin)xmin = rect.xmin; // use biggest xmin
        let ymin = this.ymin;
        if(rect.ymin > ymin)ymin = rect.ymin; // use biggest ymin
        let xmax = this.xmax;
        if(rect.xmax < xmax)xmax = rect.xmax; // use smallest xmax
        let ymax = this.ymax;
        if(rect.ymax < ymax)ymax = rect.ymax; // use smallest ymax        
        
        return new Rect(xmin, ymin, xmax, ymax);
    }
        
    toString()
    {
        return "["+ this.xmin + "," + this.ymin + "," + this.xmax + "," + this.ymax + "]";
    }
}

    
function make_flipped_image(img)
{
    ctx.drawImage(img,0,0);
    var idt = ctx.getImageData(0,0,img.width,img.height);

    getPixelXY(idt, 1,1); // same pixel using x,y
    setPixelXY(idt, 1,1, 0,0,0,255); // a black pixel
    ctx.putImageData(idt, 0,0);  // 0,0 is xy coordinates
    new_img = new Image();
    new_img.src = canvas.toDataURL();
    return new_img;
}

class Being
{
    constructor(x, y, leftward)
    {
        this.leftward = leftward;
        this.image_is_leftward = leftward;
        this.images = [];
        this.image_data = [];
        this.image_data_created = [];
        this.leftward_images = [];
        this.pos = [x, y];
        this.move_step = pixel_scale * 0.25;
        this.leftward = false;
        this.move_dir = 0;
        this.image_index = 0;
        this.load_images();
    }
    
    load_images()
    {
    }
    
    get_current_image_index()
    {
        let i =this.image_index;
        
        if(this.leftward)
        {
            i = 9 - this.image_index;
            if(i > 7)i -= 8;
        }
        
        return i;
    }
        
    draw()
    {
        let i =this.get_current_image_index();
        this.image_shift = [Math.trunc(this.pos[0] - this.offsets[i][0]), Math.trunc(this.pos[1] - this.offsets[i][1])];
        
        if(this.leftward != this.image_is_leftward)
        {
            this.image_shift = [-Math.trunc(this.pos[0] + this.offsets[i][0]), Math.trunc(this.pos[1] - this.offsets[i][1])];
            ctx.save();
            ctx.scale(-1,1);
            ctx.drawImage(this.images[i], this.image_shift[0] , this.image_shift[1]);
            ctx.restore();
        }
        else
        {
            ctx.drawImage(this.images[i], this.image_shift[0], this.image_shift[1]);
        }
        
        if(!this.image_data_created[i] && (this.images[i].width > 0))
        {
            // Create an off-screen canvas
            const offScreenCanvas = document.createElement('canvas');
            const offScreenCtx = offScreenCanvas.getContext('2d');
            
            offScreenCtx.drawImage(this.images[i], 0, 0);
            const imageData = offScreenCtx.getImageData(0, 0, this.images[i].width, this.images[i].height);
            // test colour all pixels white
            const data = imageData.data;
            for (let j = 0; j < data.length; j += 4) {
                if(data[j+3] > 0)
                {
                    data[j] = 255;
                    data[j+1] = 128;
                    data[j+2] = 230;
                }
            }
            this.image_data.push(imageData);
            
            this.image_data_created[i] = true;
        }
    }

    putImageData()
    {
        let i = this.get_current_image_index();
        if(!this.image_data_created[i])
        {
            this.draw();
            return;
        }
        let image_shift = [Math.trunc(this.pos[0] - this.offsets[i][0]), Math.trunc(this.pos[1] - this.offsets[i][1])];
        if(this.leftward != this.image_is_leftward)
        {
            let width = this.images[i].width;
            let height = this.images[i].height;
            let data = this.image_data[i].data;
            var image_data2 = ctx.getImageData(0,0,width,height);
            
            for(let j = 0; j<= height; j++)
            {
                for(let i = 0; i<= width; i++)
                {
                    let k1 = (j * width + i) * 4;
                    let k2 = ((j+1) * width - i - 1) * 4;
                    image_data2.data[k2] = data[k1];
                    image_data2.data[k2 + 1] = data[k1+1];
                    image_data2.data[k2 + 2] = data[k1+2];
                    image_data2.data[k2 + 3] = data[k1+3];
                }
            }
            ctx.putImageData(image_data2, image_shift[0] , image_shift[1]);
        }
        else
        {
            ctx.putImageData(this.image_data[i], image_shift[0] , image_shift[1]);
        }
    }


    load_images2(root_path, offsets, character_pixel_scale, leftward, num_images = 8)
    {
        this.offsets = offsets;
        this.image_is_leftward = leftward;

        var image_pixel_scale = character_pixel_scale;
        var image_scale = pixel_scale / image_pixel_scale;

        for(let i = 0; i<num_images; i++)
        {
            var image_name = root_path + '.png';
            var img = null;
            if (num_images > 1)
                image_name = root_path + i + '_32.png';
            try
            {
                img = new Image();
                img.src = image_name;
            }
            catch(error)
            {
                console.error(error);
                console.error('image_name = ' + image_name);
            }

            this.images.push(img);
            this.image_data_created.push(false);
        }
    }

    get_on_posns()
    {
        const j = Math.trunc(this.pos[1] / pixel_scale) - 1;
        const i = Math.trunc(this.pos[0]/pixel_scale - 0.51);
        return [[i,j],[i+1,j],[i,j-1],[i+1,j-1]];
    }
    
    get_rect_from_image()
    {
        let i = this.get_current_image_index();
        return new Rect(this.pos[0], this.pos[1], this.pos[0] + this.images[i].width, this.pos[1] + this.images[i].height);
    }
        
    being_collision(being)
    {
        var rect1 = this.get_rect_from_image();
        var rect2 = being.get_rect_from_image();
        
        if(!rect1.intersects(rect2))
            return false;
            
        // check every pixel
        let r = rect1.intersecting_rect(rect2);
        for(let j = r.ymin; j<= r.ymax; j++)
        {
            for(let i = r.xmin; i<= r.xmax; i++)
            {
                if(this.pixel_hits_pixel(being, i, j))
                    return true;
            }
        }
        return false;
    }
    
    pixel_hits_pixel(being, x, y)
    {
        let image_index1 = this.get_current_image_index();
        let image_index2 = being.get_current_image_index();
        
        let image_data1 = this.image_data[image_index1];
        let image_data2 = this.image_data[image_index2];
        
        let i1 = (x - this.pos[0]) * 4 + (y - this.pos[1]) * 4 * image_data1.width + 3;
        if(image_data1.data[i1] != 0)
        {
            let i2 = (x - being.pos[0]) * 4 + (y - being.pos[1]) * 4 * image_data2.width + 3;
            if(image_data2.data[i2] != 0)
                return true;
        }
        
        return false;
    }
}

var version_for_Monster = null;

class Monster extends Being
{
    constructor(version, leftward, x, y, minx, max_x)
    {
        version_for_Monster = version;
        super(x, y, leftward);
        this.min_x = minx;
        this.max_x = max_x;
    }
        
    load_images()
    {
        if (version_for_Monster == 0)
            this.load_images2('Girl Monster/', GIRL_OFFSETS, GIRL_PIXEL_SCALE, true);
        else if (version_for_Monster == 2)
            this.load_images2('toilet/', TOILET_OFFSETS, TOILET_PIXEL_SCALE, false);
        else if (version_for_Monster == 3)
            this.load_images2('Goose/', GOOSE_OFFSETS, GOOSE_PIXEL_SCALE, true);
    }
            
    move()
    {
        if (this.leftward)
        {
            this.pos[0] -= this.move_step;
            this.image_index -= 1;
            if (this.pos[0] <= this.min_x)
                this.leftward = false;
        }
        else
        {
            this.pos[0] += this.move_step;
            this.image_index += 1;
            if (this.pos[0] >= this.max_x)
                this.leftward = true;
        }
        if (this.image_index > 7)
            this.image_index = 0;
        else if (this.image_index < 0)
            this.image_index = 7;
    }
}
            
class Eugene extends Being
{
    constructor(x, y, upward, miny, max_y)
    {
        super(x, y, false);
        this.upward = upward;
        this.min_y = miny;
        this.max_y = max_y;
        this.move_step = pixel_scale * 0.125;
    }

    load_images()
    {
        this.load_images2('eugene', EUGENE_OFFSETS, EUGENE_PIXEL_SCALE, false, 1);
    }

    move()
    {
        if (keys_left == 0)
            this.upward = false;
        if (this.upward)
        {
            this.pos[1] -= this.move_step;
            if (this.pos[1] <= this.min_y)
                this.upward = false;
        }
        else
        {
            this.pos[1] += this.move_step;
            if (this.pos[1] >= this.max_y)
            {
                this.pos[1] = this.max_y;
                this.upward = true;
            }
        }
    }
}

class Man extends Being
{
    constructor(x = 0, y = 0, leftward = false)
    {
        super(x, y, leftward);
        this.in_jump = false;
        this.move_dir_on_jump = 0;
        this.jump_index = 0;
        this.fall_count = 0;
    }

    load_images()
    {
        this.load_images2('walking man/t', DAN_OFFSETS, DAN_PIXEL_SCALE, false);
    }

    add_move_dir()
    {
        if (!this.wall_in_front())
        {
            // apply velocity to position
            this.pos[0] += this.move_dir * this.move_step;
            this.image_index += this.move_dir;
            if (this.image_index > 7)
                this.image_index = 0;
            else if (this.image_index < 0)
                this.image_index = 7;
        }
    }
    
    move()
    {
        let on = this.on_flag();
        if (on == 1)
        {
            return 1; // life lost
        }
        else if (on == 2 && keys_left == 0)
        {
            return 2; // end level
        }
        if (this.in_jump)
        {
            if (this.jump_index >= jump_dir.length)
                this.in_jump = false;
        }
        if (this.in_jump)
        {
            if (jump_dir[this.jump_index] >= 0)
            {
                if (this.on_floor() != 0)
                    this.in_jump = false;
            }
        }
        
        else
        {
            const f = this.on_floor();
            if (f == 0)
            {
                this.pos[1] += 16;
                this.fall_count += 1;
            }
            else
            {
                if (this.fall_count > 8)
                {
                    return 1; // lose life
                }
                this.fall_count = 0;
                if (left_pressed)
                {
                    this.move_dir = -1;
                    this.leftward = true;
                }
                else if (right_pressed)
                {
                    this.move_dir = 1;
                    this.leftward = false;
                }
                else
                    this.move_dir = 0;
                if (f == 2)
                {
                    this.move_dir -= 1;
                    if (this.move_dir < -1)
                        this.move_dir = -1;
                }
                else if (f == 3)
                {
                    this.move_dir += 1;
                    if (this.move_dir > 1)
                        this.move_dir = 1;
                }
                if (up_pressed || space_pressed)
                {
                    this.in_jump = true;
                    this.jump_index = 0;
                }
                else
                    this.add_move_dir();
            }
        }

        if (this.in_jump)
        {
            this.add_move_dir();
            if (this.wall_above())
                this.in_jump = false;
            else
            {
                this.pos[1] += jump_dir[this.jump_index];
                this.jump_index += 1;
            }
        }
        return 0; // not life lost or end level
    }
    
    on_floor()
    {
        if (this.pos[1] % pixel_scale != 0)
            return 0;
        
        var foot_block_j = Math.trunc(this.pos[1] / pixel_scale);
        var foot_block_left = Math.trunc(this.pos[0]/pixel_scale - 0.51);
        
        var floor_found = 0;
        
        var b = level[foot_block_j][foot_block_left];
        var f = floor_flag(b);
        if (f != 0)
        {
            affect_floor(foot_block_j,foot_block_left);
            floor_found = f;
        }

        b = level[foot_block_j][foot_block_left + 1];
        f = floor_flag(b);
        if (f != 0)
        {
            affect_floor(foot_block_j,foot_block_left + 1);
            if (floor_found == 0)
                floor_found = f;
        }
        
        return floor_found;
    }
    
    wall_in_front()
    {
        var wall_step = false;
        if (this.leftward)
        {
            if (this.image_index == 1 || this.image_index == 5)
                wall_step = true;
        }
        else
        {
            if (this.image_index == 0 || this.image_index == 4)
                wall_step = true;
        }
        if (wall_step)
        {
            const knee_block_j = Math.trunc(this.pos[1] / pixel_scale) - 1;
            let add = 0.5;
            if (this.leftward)
                add = -1.5;
            const block_right = Math.trunc(this.pos[0]/pixel_scale + add);
            
            const b1 = level[knee_block_j][block_right];
            const b2 = level[knee_block_j - 1][block_right];
            if (is_wall(b1) || is_wall(b2))
                return true;
        }
        return false;
    }
    
    wall_above()
    {
        if (this.pos[1] % pixel_scale != 0)
            return false;
        const foot_block_j = Math.trunc(this.pos[1] / pixel_scale) - 3;
        const foot_block_left = Math.trunc(this.pos[0]/pixel_scale - 0.51);

        const b1 = level[foot_block_j][foot_block_left];
        if (is_wall(b1))
            return true;

        const b2 = level[foot_block_j][foot_block_left + 1];
        if (is_wall(b2))
            return true;
        
        return false;
    }
    
    on_flag()
    {
        var posns = this.get_on_posns();
        const j = Math.trunc(this.pos[1] / pixel_scale) - 1;
        const i = Math.trunc(this.pos[0]/pixel_scale - 0.51);
        var tests = [[i,j],[i+1,j],[i,j-1],[i+1,j-1]];
        for(let k = 0; k<tests.length; k++)
        {
            const test = tests[k];
            const on = on_flag(test[0], test[1]);
            if (on == 1)
            {
                // to do, do pixel check
                return 1;
                // death, check with mask
                man.update_mask();
                img_char = level[test[1]][test[0]];
                img = images[img_char.charCodeAt(0)-65];
                mask = pygame.mask.from_surface(img);
                shiftx = test[0]*pixel_scale;
                shifty = test[1]*pixel_scale;
                if (man.mask.overlap(mask, (shiftx - man.image_shift[0], shifty - man.image_shift[1])))
                    return 1;
            }
            else if (on != 0)
                return on;
        }
        return 0;
    }
}

function on_game_over()
{
    num_lives = 3;
    level_number = 0;
    load_level();
    game_mode = GAME_MODE_GAME_OVER;
    animation_index = 0;
}
        
function on_game_win()
{
    win_img = this.load.image('win.png');
    screen.blit(win_img, (0,0));
    pygame.display.flip();
    time.sleep(10);
}
        
function on_end_level()
{
    game_mode = GAME_MODE_END_LEVEL;
}           
                
function draw_background()
{
    //screen.fill(background_color);
}
    
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
    
function draw_level(offset = [0,0])
{
    local_keys_left = 0;
    y = 0;
    for(let i = 0; i<level.length; i++)
    {
        line = level[i];
        for(let x = 0; x<32; x++)
        {
            var posx = x*pixel_scale + offset[0];
            var posy = y + offset[1];
            if (line[x] != ' ')
            {
                if(posx == 256 && posy == 288)
                {
                    posx = 256;
                }
                
                if (line[x] == 'D')
                    img = conveyor[animation_index & 3];
                else if (line[x] == 'W')
                    img = conveyor[3-(animation_index & 3)];
                else
                {
                    img_char = line[x];
                    if ((animation_index & 3) > 1 && keys_left == 0 && img_char == 'N')
                        img_char = 'R';
                    img = images[img_char.charCodeAt(0)-65];
                }
                if (img != null)
                {
                    ctx.drawImage(img, posx, posy);
                }
            }
            if (line[x] == 'V')
                local_keys_left += 1;
        }
        y += pixel_scale;
    }
        
    keys_left = local_keys_left;

    // level title
    level_title.y = y;
    level_title.render();
}

function render_text(font, color, text, x, y)
{
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    ctx.fillText(text, x, y);
}

function draw_air()
{
    render_rect(0, 544, 319, 32, 'rgba(255,0,0, 1)');
    render_rect(319, 544, 705, 32, 'rgba(0,255,0, 1)');
    render_text('32px Arial','white', "Air", 50,545);
    render_rect(128, 552, air * 0.448, 16, 'rgba(255,255,255, 1)');
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function draw_score()
{
    render_text('32px Arial','white', "Hijh Score " + pad(high_score, 6), 0,580);
    render_text('32px Arial','white', "Score " + pad(score, 6), 512,580);
    render_text('32px Arial','white', "Keys " + keys_left.toString(), 512,612);
    render_text('32px Arial','white', "Touches " + touches.length.toString(), 512,648);
}
    
function draw_lives()
{
    for(let i=0; i<num_lives - 1; i++)
    {
        man_for_lives.pos = [i * 64 + 64, 702];
        man_for_lives.draw();
    }
}
        
let loop = GameLoop({  // create the main game loop
  fps: 12.5,
  update: function() { // update the game state
    switch(game_mode)
    {
        case GAME_MODE_PLAYING:
            move_result = man.move();
            if(move_result == 0)
            {
                for(let i=0; i<monsters.length; i++)
                {
                    monster = monsters[i];
                    monster.move();
                    if(man.being_collision(monster))
                    {
                        move_result = 1; // lose life
                        break;
                    }
                }
            }
            
            air -= 1;
            
            if (move_result == 1)
                on_man_death();
            else if(move_result == 2)
                on_end_level();
            else if(air <= 0)
                on_man_death();
            else
            {
                animation_index += 1;
                if(animation_index >= 4)animation_index = 0;
                man_for_lives.image_index += 1;
                if(man_for_lives.image_index == 8)
                    man_for_lives.image_index = 0;
            }
            break;
            
        case GAME_MODE_DEATH:
            animation_index += 1;
            if(animation_index >= 50)
            {
                on_lose_life();                
            }
            break;
            
        case GAME_MODE_GAME_OVER:
            animation_index += 1;
            if(animation_index >= 50)
            {
                animation_index = 0;
                game_mode = GAME_MODE_PLAYING;
            }
            break;
            
        case GAME_MODE_END_LEVEL:
            // animate air going down
            air_down_step = 10;
            if(air > 0)
            {
                if (air > air_down_step)
                {
                    air -= air_down_step;
                    score += air_down_step;
                }
                else
                {
                    score += air;
                    air = 0;
                    level_number += 1;
                    if(level_number >= levels.length)
                    {
                        level_number = 0;
                        on_game_win();
                    }
                    else
                    {                
                        load_level();
                        game_mode = GAME_MODE_PLAYING;
                        animation_index = 0;
                    }
                }
            }
            else
            {
                animation_index += 1;
                if(animation_index >= 4)animation_index = 0;
            }
            break;
    
            
    }
    
  },
  render: function() { // render the game state
        switch(game_mode)
        {
            case GAME_MODE_PLAYING:
            case GAME_MODE_END_LEVEL:
                background.render();
                man.putImageData();
                for(let i = 0; i<monsters.length; i++)
                {
                    monsters[i].draw();
                }
                draw_level();
                draw_air();
                draw_score();
                draw_lives();
                break;
                
            case GAME_MODE_DEATH:
                background.render();
                man.putImageData();
                for(let i = 0; i<monsters.length; i++)
                {
                    monsters[i].draw();
                }
                break;

            case GAME_MODE_GAME_OVER:
                background.render();
                if(man_for_squashing == null)
                {
                    man_for_squashing = new Man();
                    man_for_squashing.image_index = 2;
                    man_for_squashing.pos = [512, 600];
                }
                man_for_squashing.draw();
                let y = animation_index;
                if(y > 32)y = 32;
                ctx.drawImage(foot_image, 400, y * 20 -768);
                //screen.blit(flipped_img, [360, 570]);
                break;
        }
  }
});

load_level();
man_for_lives = new Man();
dan = new Man()
var audio = new Audio("E1.mp3");
audio.play();

loop.start();    // start the game

