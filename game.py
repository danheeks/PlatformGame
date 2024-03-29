import math
import pygame
import traceback

pygame.init()

SCREEN_WIDTH = 1024
SCREEN_HEIGHT = 710

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
clock = pygame.time.Clock()
w = screen.get_width()
h = screen.get_height()

# game area 32 x 16 or 17, total screen 32 x 24

# levels, list of [info list, monster list, image_names, level line list]

# 'D' = leftward conveyor
# 'W' = rightward_conveyor

levels = [
          # level 1
     [   
       ['Central Cavern', 'level1',[0,0,0], 80, 480, False],
        [
         # list of monsters
            [0, False, 288, 288, 272, 528],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     # list of lines
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
    ], # end of level 1
    
          # level 2
     [   
       ['The Cold Room', 'level2',[0,0,255], 80, 480, False],
        [
         # list of monsters
            [0, True, 624, 160, 48, 624],
            [0, True, 976, 480, 400, 976],
        ],
        [
         'brick','floor','','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','paddle',''
         ],
    [  
     # list of lines
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
    ], # end of level 2
    
          # level 3
     [   
       ['The Menagerie', 'level3',[0,0,0], 80, 480, False],
        [
         # list of monsters
            [3, True, 560, 160, 48, 560],
            [3, False, 592, 160, 592, 976],
            [3, True, 656, 480, 48, 656],
        ],
        [
         'wall','floor','web','','spider','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     # list of lines
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
    ], # end of level
        
          # level 4
     [   
       ['Abandoned Uranium Workings', 'level3',[0,0,0], 976, 480, True],
        [
         # list of monsters
            [0, False, 48, 480, 48, 256],
            [0, False, 288, 480, 288, 976],
        ],
        [
         'wall','floor','web','','spider','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     # list of lines
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
    ], # end of level
            
          # level 5
     [   
       ["Eugene's Lair", 'level5',[240,0,0], 80, 160, False],
        [
         # list of monsters
            [2, True, 416, 160, 48, 416],
            [2, False, 128, 288, 128, 416],
            [1, False, 512, 64, 64, 416],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     # list of lines
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
    ], # end of level
    
            
          # level 6
     [   
       ["Processing Plant", 'level6',[0,0,0], 512, 160, True],
        [
         # list of monsters
            [2, True, 416, 160, 48, 416],
            [2, False, 128, 288, 128, 416],
            [1, False, 512, 64, 64, 416],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','','',
         '','','','','','end','','',
         '','endinv','','','','key',''
         ],
    [  
     # list of lines
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
    ], # end of level
    
     ]

level = []
blocks =      'ABCDEFGHIJKLMNOPQRSTUVW'
wall_flags =  '1                      '
floor_flags = '11 2 11111111         3'
on_flags =    '  1 1        2222      '   # 1 = death,  2 = end
jump_dir = [-16, -16, -14, -10, -8, -6, -4, -2, 0, 0, 2, 4, 6,  8, 10, 14, 16, 16]
images = []
pixel_scale = 32 # pixels per metre
font_height = 30
myfont = pygame.font.SysFont('Arial', font_height)
cursor = pygame.image.load('cursor.png')
left_pressed = False
right_pressed = False
up_pressed = False
space_pressed = False
animation_index = 0
keys_left = 1
air = 2000
score = 0
high_score = 0
level_number = 0 
conveyor = []
level_title = ''
background_color = pygame.Color(0,0,0)
num_lives = 3

GIRL_OFFSETS = [ [97, 348], [83, 351], [81, 356], [96, 365], [99, 361], [105, 365], [99, 375], [96, 366] ]
GIRL_PIXEL_SCALE = 185
DAN_OFFSETS = [ [178,470], [140, 475], [80,465], [110,464], [151,453], [120,459], [74, 459], [108, 465] ]
DAN_PIXEL_SCALE = 230
EUGENE_OFFSETS = [ [240,480], ]
EUGENE_PIXEL_SCALE = 240
TOILET_OFFSETS = [ [25, 63], [25, 63], [25, 63], [25, 63], [25, 63], [25, 63], [25, 63], [25, 63],  ]
TOILET_PIXEL_SCALE = 32
GOOSE_OFFSETS = [ [144,242], [144,242], [144,242], [144,242], [144,242], [144,242], [144,242], [144,242], ]
GOOSE_PIXEL_SCALE = 118

def is_wall(c):
    if c == ' ':
        return False
    index = ord(c) - 65
    return wall_flags[index] != ' '

def floor_flag(c):
    if c == ' ':
        return 0
    index = ord(c) - 65
    if floor_flags[index] == ' ':
        return 0
    return int(floor_flags[index])

def on_flag(i,j):
    c = level[j][i]
    if c == ' ':
        return False
    if c == 'V':
        # clear key
        global score
        score += 100
        level[j][i] = ' '
    index = ord(c) - 65
    if on_flags[index] == ' ':
        return 0
    return int(on_flags[index])

def affect_floor(j,i):
    c = level[j][i]
    if c >= 'F' and c < 'M':
        level[j][i] = chr(ord(c)+1)
    elif c == 'M':
        level[j][i] = ' '

man = None
monsters = []

def load_level():
    global level
    global man
    global monsters
    global air
    global images
    global conveyor
    global level_title
    global background_color
    air = 2000
    level = []
    for line in levels[level_number][3]:
        line_list = []
        for i in range(0,32):
            line_list.append(line[i])
        level.append(line_list)
    man_x = levels[level_number][0][3]
    man_y = levels[level_number][0][4]
    leftward = levels[level_number][0][5]
    man = Man(man_x, man_y, leftward)
    monsters = []
    for m in levels[level_number][1]:
        if m[0] == 1:
            monsters.append(Eugene( m[1], m[2], m[3], m[4], m[5]))
        else:
            monsters.append(Monster(m[0], m[1], m[2], m[3], m[4], m[5]))
    images = []
    image_folder_name = levels[level_number][0][1]
    level_title = levels[level_number][0][0]
    background_color = pygame.Color(levels[level_number][0][2][0], levels[level_number][0][2][1], levels[level_number][0][2][2])
    for image_name in levels[level_number][2]:
        # images[0] for 'A', images[1] for 'B' etc.
        if image_name == '':
            images.append(None)
        else:
            try:
                images.append(pygame.image.load(image_folder_name + '/' + image_name + '.png'))
            except Exception:
                print(traceback.format_exc())
                print('image_name = ' + image_name)
                
    # create floorfall images
    for i in range(0,7):
        images[6+i] = pygame.Surface((pixel_scale, pixel_scale), pygame.SRCALPHA)
        images[6+i].blit(images[5],(0,4*(i+1)))        
    
    conveyor = []
    for i in range(0,4):
        conveyor.append(pygame.image.load(image_folder_name + '/conveyor' + str(i+1) + '.png'))
        
def animated_zoom():
    global pixel_scale
    save_pixel_scale = pixel_scale
    half_width = man.image.get_width() * 0.5
    half_height = man.image.get_height() * 0.5
    
    multiplier = 1.27
    frames = 10
    
    final_scale = math.pow(multiplier, frames)
    final_man_pos = [512, 700]
    save_man_pos = [man.pos[0], man.pos[1]]
    
    for i in range(0,frames):
        pixel_scale *= multiplier
        man.images = []
        man.leftward_images = []
        man.load_images()
        draw_background()
        
        man_shift = [(final_man_pos[0] - save_man_pos[0]) * (i+1)/frames,
                     (final_man_pos[1] - save_man_pos[1]) * (i+1)/frames]
        
        man.pos[0] = save_man_pos[0] + man_shift[0]
        man.pos[1] = save_man_pos[1] + man_shift[1]
        
        man.draw()
        
        for monster in monsters:
            monster.images = []
            monster.leftward_images = []
            monster.load_images()
            
            save_monster_pos = [monster.pos[0], monster.pos[1]]
            monster.pos[0] -= save_man_pos[0]
            monster.pos[0] *= pixel_scale / save_pixel_scale
            monster.pos[0] += man.pos[0]
            monster.pos[1] -= save_man_pos[1]
            monster.pos[1] *= pixel_scale / save_pixel_scale
            monster.pos[1] += man.pos[1]

            monster.draw()

            monster.pos[0] = save_monster_pos[0]
            monster.pos[1] = save_monster_pos[1]
         
        #draw_level()
        draw_level([man.pos[0] - save_man_pos[0] * pixel_scale / save_pixel_scale, man.pos[1] - save_man_pos[1] * pixel_scale / save_pixel_scale])            
        
        clock.tick(12.5)
        pygame.display.flip()
    pixel_scale = save_pixel_scale
    import time
    time.sleep(0.5)
        
def on_lose_life():
    global num_lives
    num_lives -= 1
    if num_lives == 0:
        on_game_over()
    else:
        load_level()
    global left_pressed
    global right_pressed
    global up_pressed
    global space_pressed
    left_pressed = False
    right_pressed = False
    up_pressed = False
    space_pressed = False
        
def on_game_over():
    back_col = pygame.Color(0,0,0)
    foot = pygame.image.load('foot.png')
    flipped_img = pygame.transform.flip(foot, True, True)
    man_for_squashing = Man()
    man_for_squashing.image_index = 2

    for i in range(0,33):
        screen.fill(back_col)
        man_for_squashing.pos = [512, 600]
        man_for_squashing.draw()
        screen.blit(foot, [400, i * 20 -768])
        screen.blit(flipped_img, [360, 570])

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()
        
        clock.tick(12.5)
        pygame.display.flip()
        
    import time
    time.sleep(3)
    
    global num_lives
    global level_number
    num_lives = 3
    level_number = 0
    load_level()
        
def on_game_win():
    win_img = pygame.image.load('win.png')
    screen.blit(win_img, (0,0))
    pygame.display.flip()
    import time
    time.sleep(10)
        
def on_end_level():
    # animated air going down
    air_down_step = 10
    global air
    global score
    while air > 0:
        if air > air_down_step:
            air -= air_down_step
            score += air_down_step
        else:
            score += air
            air = 0
        draw_background()
        man.draw()
        for monster in monsters:
            monster.draw()
        draw_level()
        draw_air()
        draw_score()
        draw_lives()
        pygame.display.flip()
    
    global level_number
    level_number += 1
    if level_number >= len(levels):
        level_number = 0
        on_game_win()
    
    load_level()

class Being(pygame.sprite.Sprite):
    def __init__(self, x, y, leftward):
        pygame.sprite.Sprite.__init__(self)
        self.leftward = leftward
        self.images = []
        self.leftward_images = []
        self.pos = [x, y]
        self.move_step = pixel_scale * 0.25
        self.leftward = False
        self.move_dir = 0
        self.image_index = 0
        self.load_images()
        
    def draw(self):
        if self.leftward:
            i = 9 - self.image_index
            if i > 7:
                i -= 8
            self.image = self.leftward_images[i]
            self.image_shift = [int(self.pos[0] - self.left_offsets[i][0]), int(self.pos[1] - self.left_offsets[i][1])]
        else:
            self.image = self.images[self.image_index]
            self.image_shift = [int(self.pos[0] - self.offsets[self.image_index][0]), int(self.pos[1] - self.offsets[self.image_index][1])]
        screen.blit(self.image, self.image_shift)
        self.rect = self.image.get_rect()
        self.rect.x += self.image_shift[0]
        self.rect.y += self.image_shift[1]
        # draw a yellow rectangle for debugging
        #pygame.draw.rect(screen, pygame.Color(255,255,0), self.rect, width = 1)

    def load_images2(self, root_path, offsets, character_pixel_scale, leftward, num_images = 8):
        if leftward:
            self.left_offsets = []
            for offset in offsets:
                self.left_offsets.append([offset[0],offset[1]])
            self.offsets = []
        else:
            self.offsets = []
            for offset in offsets:
                self.offsets.append([offset[0],offset[1]])
            self.left_offsets = []
        image_pixel_scale = character_pixel_scale
        image_scale = pixel_scale / image_pixel_scale
        for i in range(0,num_images):
            image_name = root_path + '.png'
            if num_images > 1:
                image_name = root_path + '{}.png'.format(i)
            try:
                img = pygame.image.load(image_name)
            except Exception:
                print(traceback.format_exc())
                print('image_name = ' + image_name)
            img = pygame.transform.scale(img, (int(img.get_width()*image_scale), int(img.get_height()*image_scale)))
            if leftward:
                self.left_offsets[i][0] *= image_scale
                self.left_offsets[i][1] *= image_scale
            else:
                self.offsets[i][0] *= image_scale
                self.offsets[i][1] *= image_scale
            flipped_img = pygame.transform.flip(img, True, False)
            if leftward:
                self.leftward_images.append(img)
                self.images.append(flipped_img)
                self.offsets.append([img.get_width() -self.left_offsets[i][0], self.left_offsets[i][1]])
            else:
                self.images.append(img)
                self.leftward_images.append(flipped_img)
                self.left_offsets.append([img.get_width() -self.offsets[i][0], self.offsets[i][1]])

    def get_on_posns(self):
        j = int(self.pos[1] / pixel_scale) - 1
        i = int(self.pos[0]/pixel_scale - 0.51)
        return [[i,j],[i+1,j],[i,j-1],[i+1,j-1]]
        
    def update_mask(self):
        self.mask = pygame.mask.from_surface(self.image)
        
    def being_collision(self, being):
        if pygame.sprite.collide_rect(self, being):
            self.update_mask()
            being.update_mask()
            return self.mask.overlap(being.mask, (being.image_shift[0] - self.image_shift[0], being.image_shift[1] - self.image_shift[1]))
        return False

class Monster(Being):
    def __init__(self, version, leftward, x, y, minx, max_x):
        self.version = version
        Being.__init__(self, x, y, leftward)
        self.min_x = minx
        self.max_x = max_x
        
    def load_images(self):
        if self.version == 0:
            self.load_images2('Girl Monster/', GIRL_OFFSETS, GIRL_PIXEL_SCALE, True)
        elif self.version == 2:
            self.load_images2('toilet/', TOILET_OFFSETS, TOILET_PIXEL_SCALE, False)
        elif self.version == 3:
            self.load_images2('Goose/', GOOSE_OFFSETS, GOOSE_PIXEL_SCALE, True)
            
    def move(self):
        if self.leftward:
            self.pos[0] -= self.move_step
            self.image_index -= 1
            if self.pos[0] <= self.min_x:
                self.leftward = False
        else:
            self.pos[0] += self.move_step
            self.image_index += 1
            if self.pos[0] >= self.max_x:
                self.leftward = True
        if self.image_index > 7:
            self.image_index = 0
        elif self.image_index < 0:
            self.image_index = 7
            
class Eugene(Being):
    def __init__(self, upward, x, y, miny, max_y):
        Being.__init__(self, x, y, False)
        self.upward = upward
        self.min_y = miny
        self.max_y = max_y
        self.move_step = pixel_scale * 0.125

    def load_images(self):
        self.load_images2('eugene', EUGENE_OFFSETS, EUGENE_PIXEL_SCALE, False, 1)

    def move(self):
        global keys_left
        if keys_left == 0:
            self.upward = False
        if self.upward:
            self.pos[1] -= self.move_step
            if self.pos[1] <= self.min_y:
                self.upward = False
        else:
            self.pos[1] += self.move_step
            if self.pos[1] >= self.max_y:
                self.pos[1] = self.max_y
                self.upward = True

class Man(Being):
    def __init__(self, x = 0, y = 0, leftward = False):
        Being.__init__(self, x, y, leftward)
        self.in_jump = False
        self.move_dir_on_jump = 0
        self.jump_index = 0
        self.fall_count = 0

    def load_images(self):
        self.load_images2('walking man/t', DAN_OFFSETS, DAN_PIXEL_SCALE, False)

    def add_move_dir(self):
        if not self.wall_in_front():
            # apply velocity to position
            self.pos[0] += self.move_dir * self.move_step
            self.image_index += self.move_dir
            if self.image_index > 7:
                self.image_index = 0
            elif self.image_index < 0:
                self.image_index = 7
    
    def move(self):
        on = self.on_flag()
        if on == 1:
            animated_zoom()
            on_lose_life()
            return True
        elif on == 2 and keys_left == 0:
            on_end_level()
            return True
        if self.in_jump:
            if self.jump_index >= len(jump_dir):
                self.in_jump = False
                
        if self.in_jump:
            if jump_dir[self.jump_index] >= 0:
                if self.on_floor() != 0:
                    self.in_jump = False
        else:
            f = self.on_floor()
            if f == 0:
                self.pos[1] += 16
                self.fall_count += 1
            else:
                if self.fall_count > 8:
                    animated_zoom()
                    on_lose_life()
                    return True
                self.fall_count = 0                
                if left_pressed:
                    self.move_dir = -1
                    self.leftward = True
                elif right_pressed:
                    self.move_dir = 1
                    self.leftward = False
                else:
                    self.move_dir = 0
                if f == 2:
                    self.move_dir -= 1
                    if self.move_dir < -1:
                        self.move_dir = -1
                elif f == 3:
                    self.move_dir += 1
                    if self.move_dir > 1:
                        self.move_dir = 1
                if up_pressed or space_pressed:
                    self.in_jump = True
                    self.jump_index = 0
                else:
                    self.add_move_dir()

        if self.in_jump:
            self.add_move_dir()
            if self.wall_above():
                self.in_jump = False
            else:
                self.pos[1] += jump_dir[self.jump_index]
                self.jump_index += 1            
                
        return False # not life lost
        
    def on_floor(self):
        if self.pos[1] % pixel_scale != 0:
            return 0
        
        foot_block_j = int(self.pos[1] / pixel_scale)
        foot_block_left = int(self.pos[0]/pixel_scale - 0.51)
        
        floor_found = 0
        
        b = level[foot_block_j][foot_block_left]
        f = floor_flag(b)
        if f != 0:
            affect_floor(foot_block_j,foot_block_left)
            floor_found = f

        b = level[foot_block_j][foot_block_left + 1]
        f = floor_flag(b)
        if f != 0:
            affect_floor(foot_block_j,foot_block_left + 1)
            if floor_found == 0:
                floor_found = f
        
        return floor_found
    
    def wall_in_front(self):
        wall_step = False
        if self.leftward:
            if self.image_index == 1 or self.image_index == 5:
                wall_step = True
        else:
            if self.image_index == 0 or self.image_index == 4:
                wall_step = True
        
        if wall_step:
            knee_block_j = int(self.pos[1] / pixel_scale) - 1
            block_right = int(self.pos[0]/pixel_scale + (-1.5 if self.leftward else 0.5))
            
            b1 = level[knee_block_j][block_right]
            b2 = level[knee_block_j - 1][block_right]
            if is_wall(b1) or is_wall(b2):
                return True
        return False
    
    def wall_above(self):
        if self.pos[1] % pixel_scale != 0:
            return False
        foot_block_j = int(self.pos[1] / pixel_scale) - 3
        foot_block_left = int(self.pos[0]/pixel_scale - 0.51)

        b1 = level[foot_block_j][foot_block_left]
        if is_wall(b1):
            return True

        b2 = level[foot_block_j][foot_block_left + 1]
        if is_wall(b2):
            return True
        
        return False

    def draw_floor_cursor(self):
        if self.pos[1] % pixel_scale != 0:
            return
        foot_block_j = int(self.pos[1] / pixel_scale)
        foot_block_left = int(self.pos[0]/pixel_scale - 0.51)
        screen.blit(cursor, (foot_block_left * 32, foot_block_j * 32))
        screen.blit(cursor, ((foot_block_left + 1) * 32, foot_block_j * 32))        

    def draw_head_cursor(self):
        if self.pos[1] % pixel_scale != 0:
            return
        foot_block_j = int(self.pos[1] / pixel_scale) - 3
        foot_block_left = int(self.pos[0]/pixel_scale - 0.51)
        screen.blit(cursor, (foot_block_left * 32, foot_block_j * 32))
        screen.blit(cursor, ((foot_block_left + 1) * 32, foot_block_j * 32))        
    
    def draw_front_cursor(self):
        if self.image_index == 0 or self.image_index == 4:
            knee_block_j = int(self.pos[1] / pixel_scale) - 1
            block_right = int(self.pos[0]/pixel_scale + (-1.5 if self.leftward else 0.5))
            screen.blit(cursor, (block_right * 32, knee_block_j * 32))
            screen.blit(cursor, (block_right * 32, (knee_block_j - 1) * 32))

    def on_flag(self):
        posns = self.get_on_posns()
        j = int(self.pos[1] / pixel_scale) - 1
        i = int(self.pos[0]/pixel_scale - 0.51)
        tests = [[i,j],[i+1,j],[i,j-1],[i+1,j-1]]
        for test in tests:
            on = on_flag(test[0], test[1])
            if on == 1:
                # death, check with mask
                man.update_mask()
                img_char = level[test[1]][test[0]]
                img = images[ord(img_char)-65]
                mask = pygame.mask.from_surface(img)
                shiftx = test[0]*pixel_scale
                shifty = test[1]*pixel_scale
                if man.mask.overlap(mask, (shiftx - man.image_shift[0], shifty - man.image_shift[1])):
                    return 1
            elif on != 0:
                return on
        return 0
            
def draw_background():
    global background_color
    screen.fill(background_color)
    
def draw_level(offset = [0,0]):
    local_keys_left = 0
    global keys_left
    global pixel_scale
    y = 0
    for line in level:
        for x in range(0,32):
            pos = (x*pixel_scale + offset[0], y + offset[1])
            if line[x] != ' ':
                if line[x] == 'D':
                    img = conveyor[animation_index & 3]
                elif line[x] == 'W':
                    img = conveyor[3-(animation_index & 3)]
                else:
                    img_char = line[x]
                    if (animation_index & 3) > 1 and keys_left == 0 and img_char == 'N':
                        img_char = 'R'
                    img = images[ord(img_char)-65]
                if img != None:
                    if pixel_scale != 32:
                        img = pygame.transform.scale(img, (int(img.get_width() * pixel_scale/32), int(img.get_height() * pixel_scale/32)))
                    screen.blit(img, pos)
            if line[x] == 'V':
                local_keys_left += 1
        y += pixel_scale
        
    keys_left = local_keys_left

    # level title
    global level_title
    screen.blit(myfont.render(level_title, False, pygame.Color(255,255,255)),(400,y))

def draw_air():
    pygame.draw.rect(screen, pygame.Color(255,0,0), pygame.Rect(0, 544, 319, 32))
    pygame.draw.rect(screen, pygame.Color(0,255,0), pygame.Rect(319, 544, 705, 32))
    screen.blit(myfont.render("Air", False, pygame.Color(255,255,255)),(50,540))
    pygame.draw.rect(screen, pygame.Color(255,255,255), pygame.Rect(128, 552, air * 0.448, 16))


load_level()

def draw_score():
    screen.blit(myfont.render("High Score " + "{:06d}".format(high_score), False, pygame.Color(255,255,255)),(0,580))
    screen.blit(myfont.render("Score " + "{:06d}".format(score), False, pygame.Color(255,255,255)),(512,580))
    screen.blit(myfont.render("Keys " + "{:d}".format(keys_left), False, pygame.Color(255,255,255)),(512,612))
    
man_for_lives = Man()

def draw_lives():
    for i in range(0, num_lives - 1):
        man_for_lives.pos = [i * 64 + 64, 702]
        man_for_lives.draw()
    man_for_lives.image_index += 1
    if man_for_lives.image_index == 8:
        man_for_lives.image_index = 0
        
def draw_everything():
    draw_background()
    man.draw()
    for monster in monsters:
        monster.draw()
    draw_level()
    draw_air()
    draw_score()
    draw_lives()
    
BUTTON_WIDTH = 400
BUTTON_TEXT_COLOR = pygame.Color(255,255,255)
BUTTON_HEIGHT = 40
BUTTON_SPACE = 10
BUTTTON_MARGIN = 15
BUTTON_KEY_DELAY = 8
button_img = pygame.image.load('button.png')
button_img_sel = pygame.image.load('buttonsel.png')

class Buttons:
    def __init__(self):
        self.next_index = 0
        self.buttons = []
        self.selected = None
        
    def add(self, text):
        self.buttons.append(Button(self.next_index, text))
        self.next_index += 1
        self.selected = self.buttons[0]    
        
    def draw(self):
        w, h = self.get_size()
        x = ( SCREEN_WIDTH - w ) * 0.5
        y = ( SCREEN_HEIGHT - h ) * 0.5
        
        for button in self.buttons:
            sel = (button == self.selected)
            button.draw(x, y, sel)
            
    def get_size(self):
        w = 0
        h = 0
        for button in self.buttons:
            if h != 0:
                h += BUTTON_SPACE
            h += BUTTON_HEIGHT
            bw = button.get_width()
            if bw > w:
                w = bw
        return w,h
    
    def get_button_from_pos(self, pos):
        for button in self.buttons:
            if button.rect.collidepoint(pos):
                return button

class Button:
    def __init__(self, index, text):
        self.index = index
        self.text = text
        
    def get_width(self):
        s = myfont.size(self.text)
        return s[0] + 2 * BUTTTON_MARGIN
        
    def draw(self, x, y, sel):
        button_y = self.index * ( BUTTON_HEIGHT + BUTTON_SPACE ) + y
        if sel:
            img = button_img_sel
        else:
            img = button_img
        screen.blit(img, [x, button_y])
        self.rect = pygame.Rect(x, button_y, BUTTON_WIDTH, BUTTON_HEIGHT)
        s = myfont.size(self.text)
        tx = self.rect.x + (BUTTON_WIDTH - s[0]) * 0.5
        ty = self.rect.y + (BUTTON_HEIGHT - s[1]) * 0.5
        screen.blit(myfont.render(self.text, False, BUTTON_TEXT_COLOR),(tx, ty))
        
def on_pause():
    
    buttons = Buttons()
    buttons.add('Resume Game')
    for level in levels:
        title = level[0][0]
        buttons.add(title)
    buttons.add('Quit Game')
        
    up = False
    down = False
    key_delay = 0
    
    while True:
            
        draw_everything()
        # gray over screen
        s = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT), pygame.SRCALPHA)
        s.fill((128,128,128,128))
        screen.blit(s, (0,0))
        buttons.draw()
        
        clock.tick(12.5)
        
        pygame.display.flip()
        
        if key_delay > 0:
            key_delay -= 1

        while True:
            button_chosen = None
            
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    exit()
                elif event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_ESCAPE:
                        return    
                    elif event.key == pygame.K_UP:
                        up = True
                        key_delay = BUTTON_KEY_DELAY
                    elif event.key == pygame.K_DOWN:
                        down = True
                        key_delay = BUTTON_KEY_DELAY
                    elif event.key == pygame.K_RETURN:
                        button_chosen = buttons.selected
                    
                elif event.type == pygame.KEYUP:
                    if event.key == pygame.K_UP:
                        up = False
                    elif event.key == pygame.K_DOWN:
                        down = False

                elif event.type == pygame.MOUSEBUTTONDOWN:
                    button_chosen = buttons.get_button_from_pos(event.pos)
                    
            if button_chosen != None:
                if button_chosen.index == 0:
                    return
                if button_chosen.index == len(buttons.buttons)-1:
                    exit()
                else:
                    global level_number
                    level_number = button_chosen.index - 1
                    load_level()
                    return

            if up:
                if key_delay == 0 or key_delay == BUTTON_KEY_DELAY:
                    index = buttons.selected.index -1
                    if index < 0:
                        index += len(buttons.buttons)
                    buttons.selected = buttons.buttons[index]
                break
            if down:
                if key_delay == 0 or key_delay == BUTTON_KEY_DELAY:
                    index = buttons.selected.index + 1
                    if index >= len(buttons.buttons):
                        index = 0
                    buttons.selected = buttons.buttons[index]
                break


while num_lives > 0:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                on_pause()
            if event.key == pygame.K_RIGHT:
                right_pressed = True
            if event.key == pygame.K_LEFT:
                left_pressed = True
            if event.key == pygame.K_UP:
                up_pressed = True
            if event.key == pygame.K_SPACE:
                space_pressed = True
            if event.key == pygame.K_k:
                on_end_level()                
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_RIGHT:
                right_pressed = False
            if event.key == pygame.K_LEFT:
                left_pressed = False
            if event.key == pygame.K_UP:
                up_pressed = False
            if event.key == pygame.K_SPACE:
                space_pressed = False

    draw_everything()
    life_lost = man.move()
    
    if life_lost:
        continue

    for monster in monsters:
        monster.move()
    
    life_lost = False
    
    for monster in monsters:
        if man.being_collision(monster):
            pygame.display.flip()
            animated_zoom()
            on_lose_life()
            life_lost = True
            break
        
    if life_lost:
        continue

    pygame.display.flip()
    
    animation_index += 1
    if animation_index == 8:
        animation_index = 0 
        
    air -= 1
    
    if air <= 0:
        on_lose_life()

    clock.tick(12.5)
    pygame.display.set_caption(f"fps: {clock.get_fps()}")
    
