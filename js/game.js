

let { init, Sprite, GameLoop } = kontra;

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
         'brick','floor','thorn bush','','stalactite','floorfall','','',
         '','','','','','end','','',
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
    'A           C       AAAFFFFFBBBA',
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
level_number = 2;
conveyor = [];
level_title = '';
background_color = 'rgba(0, 0, 0, 1)';//'rgba(0, 255, 170, 1)';
num_lives = 3;

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


var background = 
{
  render: function ()
   {
    //ctx.save()
    ctx.beginPath();
    ctx.rect(0, 0, CANVAS_W, CANVAS_H);
    ctx.fillStyle = background_color;
    ctx.fill();
    ctx.closePath();
}
}


let { canvas } = init();
var ctx = canvas.getContext("2d");
const CANVAS_W = canvas.width;
const CANVAS_H = canvas.height;

function onKeyDown(e) {
    //console.log(e.keyCode);
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
    
    man_x = levels[level_number][0][3];
    man_y = levels[level_number][0][4];
    leftward = levels[level_number][0][5];
    man = new Man(man_x, man_y, leftward);
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
    level_title = levels[level_number][0][0];
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
    
                // to do            
    // create floorfall images
    //for (let i = 0; i<7; i++)
    //{
      //  images[6+i] = pygame.Surface((pixel_scale, pixel_scale), pygame.SRCALPHA)
//        images[6+i].blit(images[5],(0,4*(i+1)))     
  //  }   
    
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
        
function on_lose_life()
{
    num_lives -= 1;
    if(num_lives == 0)
        on_game_over();
    else
        load_level();
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
        
    draw()
    {
        console.log(this.image_index);
        var i =this.image_index;
        this.image = this.images[i];
        this.image_shift = [Math.trunc(this.pos[0] - this.offsets[i][0]), Math.trunc(this.pos[1] - this.offsets[i][1])];
        
        if(this.leftward != this.image_is_leftward)
        {
            ctx.save();
            ctx.scale(-1,1);
            ctx.drawImage(this.image, -this.image.width - this.image_shift[0] , this.image_shift[1]);
            ctx.restore();
        }
        else
        {
            ctx.drawImage(this.image, this.image_shift[0], this.image_shift[1]);
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
        return Rect(this.pos[0], this.pos[1], this.pos[0] + this.image.width + this.pos[1] + this.image.height);
    }
        
    being_collision(being)
    {
        var rect1 = this.get_rect_from_image();
        var rect2 = being.get_rect_from_image();
        
        return rect1.intersects(rect2);
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
            this.image_index += Math.abs(this.move_dir);
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
            //animated_zoom();
            on_lose_life();
            return true;
        }
        else if (on == 2 && keys_left == 0)
        {
            on_end_level();
            return true;
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
                    //animated_zoom();
                    on_lose_life();
                    return true;
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
        return false; // not life lost
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
    back_col = 'rgba(0,0,0, 1)';
    foot = this.load.image('foot.png');
    flipped_img = pygame.transform.flip(foot, true, true);
    man_for_squashing = new Man();
    man_for_squashing.image_index = 2;

    for(let i = 0; i<33; i++)
    {
        screen.fill(back_col);
        man_for_squashing.pos = [512, 600];
        man_for_squashing.draw();
        screen.blit(foot, [400, i * 20 -768])
        screen.blit(flipped_img, [360, 570]);

        //for event in pygame.event.get():
        //    if event.type == pygame.QUIT:
        //        exit()
        
        clock.tick(12.5);
        pygame.display.flip();
    }

    time.sleep(3);
    
    num_lives = 3;
    level_number = 0;
    load_level();
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
    // animated air going down
    air_down_step = 10;
    while(air > 0)
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
        }
        draw_background();
        man.draw();
        for(let i = 0; i<monsters.length; i++)
        {
            monster.draw();
        }
        draw_level();
        draw_air();
        draw_score();
        draw_lives();
        pygame.display.flip();
    }
    
    level_number += 1;
    if(level_number >= levels.length)
    {
        level_number = 0;
        on_game_win();
    }
    
    load_level();
}

    
        
            
                
function draw_background()
{
    //screen.fill(background_color);
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
   // screen.blit(myfont.render(level_title, False, pygame.Color(255,255,255)),(400,y));
}

function draw_air()
{
    pygame.draw.rect(screen, pygame.Color(255,0,0), pygame.Rect(0, 544, 319, 32))
    pygame.draw.rect(screen, pygame.Color(0,255,0), pygame.Rect(319, 544, 705, 32))
    screen.blit(myfont.render("Air", False, pygame.Color(255,255,255)),(50,540))
    pygame.draw.rect(screen, pygame.Color(255,255,255), pygame.Rect(128, 552, air * 0.448, 16))
}

function draw_score()
{
    screen.blit(myfont.render("High Score " + "{:06d}".format(high_score), False, pygame.Color(255,255,255)),(0,580));
    screen.blit(myfont.render("Score " + "{:06d}".format(score), False, pygame.Color(255,255,255)),(512,580));
    screen.blit(myfont.render("Keys " + "{:d}".format(keys_left), False, pygame.Color(255,255,255)),(512,612));
}
    
function draw_lives()
{
    for(let i=0; i<num_lives - 1; i++)
    {
        man_for_lives.pos = [i * 64 + 64, 702];
        man_for_lives.draw();
    }
    man_for_lives.image_index += 1;
    if(man_for_lives.image_index == 8)
        man_for_lives.image_index = 0;
}
        
function draw_everything()
{
    background.render();
    man.draw();
    for(let i = 0; i<monsters.length; i++)
    {
        monsters[i].draw();
    }
    draw_level();
    //draw_air();
    //draw_score();
    //draw_lives();
}
                        
 


let loop = GameLoop({  // create the main game loop
  fps: 12.5,
  update: function() { // update the game state
    life_lost = man.move();
    
    if (life_lost)
        return;

    for(let i=0; i<monsters.length; i++)
    {
        monster = monsters[i];
        monster.move()
    }
    
    life_lost = false
    
    animation_index += 1;
  },
  render: function() { // render the game state
    draw_everything();
  }
});

load_level();
man_for_lives = new Man();
dan = new Man()

loop.start();    // start the game

