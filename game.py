import math
import pygame
import traceback

pygame.init()
screen = pygame.display.set_mode((1024, 768))
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
       ['Central Cavern', 'level1',[0,0,0]],
        [
         # list of monsters
            [0, False, 288, 288, 272, 528],
        ],
        [
         'brick','floor','thorn bush','','stalactite','floorfall','floorfall1','floorfall2',
         'floorfall3','floorfall4','floorfall5','floorfall6','floorfall7','end1','end2','end3',
         'end4','end1inv','end2inv','end3inv','end4inv','key',''
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
       ['The Cold Room', 'level2',[0,0,255]],
        [
         # list of monsters
            [0, True, 624, 160, 48, 624],
            [0, True, 976, 480, 400, 976],
        ],
        [
         'brick','floor','','','stalactite','floorfall','floorfall1','floorfall2',
         'floorfall3','floorfall4','floorfall5','floorfall6','floorfall7','end1','end2','end3',
         'end4','end1inv','end2inv','end3inv','end4inv','paddle',''
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
    ], # end of level 1
    
     ]

level = []
blocks =      'ABCDEFGHIJKLMNOPQRSTUVW'
wall_flags =  '1                      '
floor_flags = '11 2 11111111         3'
on_flags =    '  1 1        2222      '   # 1 = death,  2 = end
jump_dir = [-16, -16, -14, -10, -8,   -6, -4, -2, 0, 0, 2, 4, 6,  8, 10, 14, 16,]
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

#GIRL_OFFSETS = [ [97, 356], [83, 352], [81, 356], [96, 377], [99, 378], [105, 379], [99, 386], [96, 379] ]
GIRL_OFFSETS = [ [97, 348], [83, 351], [81, 356], [96, 365], [99, 361], [105, 365], [99, 375], [96, 366] ]
GIRL_PIXEL_SCALE = 175
DAN_OFFSETS = [ [178,470], [140, 475], [80,465], [110,464], [151,453], [120,459], [74, 459], [108, 465] ]
DAN_PIXEL_SCALE = 230

num_lives = 3

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
    man = Man()
    monsters = []
    for m in levels[level_number][1]:
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
    conveyor = []
    for i in range(0,4):
        conveyor.append(pygame.image.load(image_folder_name + '/conveyor' + str(i+1) + '.png'))
        
def on_lose_life():
    global num_lives
    num_lives -= 1
    if num_lives == 0:
        on_game_over()
    else:
        load_level()
        
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
        
        clock.tick(12.5)
        pygame.display.flip()
        
    import time
    time.sleep(3)
    
    global num_lives
    global level_number
    num_lives = 3
    level_number = 0
    load_level()
        

        
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
    load_level()

class Being(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.images = []
        self.leftward_images = []
        self.pos = [80,480]
        self.move_step = pixel_scale * 0.25
        self.leftward = False
        self.move_dir = 0
        self.image_index = 0
        
    def draw(self):
        if self.leftward:
            i = 8 - self.image_index
            if i == 8:
                i = 0
            self.image = self.leftward_images[i]
            self.image_shift = [self.pos[0] - self.left_offsets[i][0], self.pos[1] - self.left_offsets[i][1]]
        else:
            self.image = self.images[self.image_index]
            self.image_shift = [self.pos[0] - self.offsets[self.image_index][0], self.pos[1] - self.offsets[self.image_index][1]]
        screen.blit(self.image, self.image_shift)
        self.rect = self.image.get_rect()
        self.rect.x += self.image_shift[0]
        self.rect.y += self.image_shift[1]
        # draw a yellow rectangle for debugging
        pygame.draw.rect(screen, pygame.Color(255,255,0), self.rect, width = 1)
        self.update_mask()
        self.mask.to_surface(screen)#, dest=(self.image_shift[0], self.image_shift[1]))
        

    def load_images(self, root_path, offsets, character_pixel_scale, leftward):
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
        for i in range(0,8):
            img = pygame.image.load(root_path + '{}.png'.format(i))
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
            #return self.mask.overlap(
            result = pygame.sprite.collide_mask(self, being)
            if result != None:
                return True
        return False
#        posns = self.get_on_posns()
#        b_posns = being.get_on_posns()
#        for pos in posns:
#            for b_pos in b_posns:
#                if pos[0] == b_pos[0] and pos[1] == b_pos[1]:
#                    return True
#        return False
            

class Monster(Being):
    def __init__(self, version, leftward, x, y, minx, max_x):
        Being.__init__(self)
        self.pos = [x, y]
        self.leftward = leftward
        #self.load_images('walking man/t', DAN_OFFSETS, DAN_PIXEL_SCALE, False)
        if version == 0:
            self.load_images('Girl Monster/', GIRL_OFFSETS, GIRL_PIXEL_SCALE, True)
        self.min_x = minx
        self.max_x = max_x

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

class Man(Being):
    def __init__(self):
        Being.__init__(self)
        self.load_images('walking man/t', DAN_OFFSETS, DAN_PIXEL_SCALE, False)
        #self.load_images('Girl Monster/', GIRL_OFFSETS, GIRL_PIXEL_SCALE, True)
        self.in_jump = False
        self.move_dir_on_jump = 0
        self.jump_index = 0
        self.fall_count = 0

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
            on_lose_life()
        elif on == 2 and keys_left == 0:
            on_end_level()
            
        if self.in_jump:
            if self.jump_index >= 16:
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
                    self.on_fall_death()
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
        if self.image_index == 0 or self.image_index == 4:
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
            if on != 0:
                return on
        return 0
            
def draw_background():
    global background_color
    screen.fill(background_color)
    
def draw_level():
    local_keys_left = 0
    global keys_left
    y = 0
    for line in level:
        for x in range(0,32):
            pos = (x*32, y)
            if line[x] == 'D':
                screen.blit(conveyor[animation_index & 3], pos)
            elif line[x] == 'W':
                screen.blit(conveyor[3-(animation_index & 3)], pos)
            elif line[x] != ' ':
                flash = False
                if ((animation_index & 3) > 1) and (keys_left == 0) and (line[x] >= 'N') and (line[x] <= 'Q'):
                    flash = True
                img = images[ord(line[x])-65 + (4 if flash else 0)]
                screen.blit(img, pos)
            if line[x] == 'V':
                local_keys_left += 1
        y += 32
        
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
    screen.blit(myfont.render("High Score " + "{:06d}".format(high_score), False, pygame.Color(255,255,255)),(0,620))
    screen.blit(myfont.render("Score " + "{:06d}".format(score), False, pygame.Color(255,255,255)),(512,620))
    
man_for_lives = Man()

def draw_lives():
    for i in range(0, num_lives - 1):
        man_for_lives.pos = [i * 64 + 64, 764]
        man_for_lives.draw()
    man_for_lives.image_index += 1
    if man_for_lives.image_index == 8:
        man_for_lives.image_index = 0

while num_lives > 0:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                exit()
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

    draw_background()
    man.move()
    man.draw()
    for monster in monsters:
        monster.move()
        monster.draw()
    draw_level()
    draw_air()
    draw_score()
    draw_lives()
    
    for monster in monsters:
        if man.being_collision(monster):
            on_lose_life()
            break

    pygame.display.flip()
    
    animation_index += 1
    if animation_index == 8:
        animation_index = 0 
        
    air -= 1
    
    if air <= 0:
        on_lose_life()

    clock.tick(12.5)
    pygame.display.set_caption(f"fps: {clock.get_fps()}")
    
