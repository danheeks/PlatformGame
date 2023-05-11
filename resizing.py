import math
import wx

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

blocks =      'ABCDEFGHIJKLMNOPQRSTUVW'
pixel_scale = 32 # pixels per metre

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

app = wx.App()

def resize_image(image_path):
    src_image_path = image_path + '.png'
    dst_image_path = image_path + '_32.png'
    img = wx.Image(src_image_path)
    img.Scale(32, 32)
    img.SaveFile(dst_image_path)

def resize_level(level_number):
    for line in levels[level_number][3]:
        line_list = []
        for i in range(0,32):
            line_list.append(line[i])
    image_folder_name = levels[level_number][0][1]
    level_title = levels[level_number][0][0]
    for image_name in levels[level_number][2]:
        # images[0] for 'A', images[1] for 'B' etc.
        if image_name != '':
            resize_image(image_folder_name + '/' + image_name)
    for i in range(0,4):
        resize_image(image_folder_name + '/conveyor' + str(i+1))

#for i in range(0,6):
#    resize_level(i)

def rescale_image(image_path, old_pixel_scale):
    scale = 32.0/old_pixel_scale
    src_image_path = image_path + '.png'
    dst_image_path = image_path + '_32.png'
    img = wx.Image(src_image_path)
    img = img.Scale(float(img.Width)*scale, float(img.Height)*scale)
    img.SaveFile(dst_image_path)
    
def resize_being(root_path, old_pixel_scale, offsets, num_images = 8):
    print('resizing ' + root_path)
    print('new offsets = [',)
    for offset in offsets:
        x = float(offset[0]) * 32.0/old_pixel_scale
        y = float(offset[1]) * 32.0/old_pixel_scale
        print('[' + str(int(x)) + ', ' + str(int(y)) + '],',)
    print(']')
    for i in range(0, 8):
        rescale_image(root_path + str(i), old_pixel_scale)
        
resize_being('C:/Dev/PlatformGame/trunk/walking man/t', 230, DAN_OFFSETS)