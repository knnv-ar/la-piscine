
  //inspirado en GEORGE NEES
  //al hacer click caen los cuadrados "ordenados"
  //cambia de color el fondo
  
  //variables
  let angulo = 0.0
  let y1 = 20 
  let y2 = 50
  let y3 = 110
  let y4 = 158
  let y5 = 193
  let y6 = 223
  let y7 = 269
  let y8 = 321
  let y9 = 385
  let y10 = 442 
  let y11 = 474 
  let y12 = 500 
  let y13 = 20
  let y14 = 65
  let y15 = 93
  let y16 = 152 
  let y17 = 205
  let y18 = 232
  let y19 = 277
  let y20 = 296
  let y21 = 330
  let y22 = 360
  let y23 = 420
  let y24 = 460 
  let y25 = 20
  let y26 = 80
  let y27 = 135
  let y28 = 170
  let y29 = 218
  let y30 = 235
  let y31 = 260
  let y32 = 325
  let y33 = 372
  let y34 = 405
  let y35 = 434
  let y36 = 460
  let y37 = 20
  let y38 = 47
  let y39 = 65
  let y40 = 113
  let y41 = 140
  let y42 = 193  
  let y43 = 254   
  let y44 = 288
  let y45 = 334
  let y46 = 365
  let y47 = 415
  let y48 = 450 
  let y49 = 20
  let y50 = 70
  let y51 = 115
  let y52 = 150
  let y53 = 198
  let y54 = 218
  let y55 = 250
  let y56 = 310
  let y57 = 340
  let y58 = 396
  let y59 = 430
  let y60 = 488   
  let y61 = 20
  let y62 = 65
  let y63 = 120
  let y64 = 165
  let y65 = 195
  let y66 = 251
  let y67 = 278
  let y68 = 312
  let y69 = 360
  let y70 = 382
  let y71 = 440
  let y72 = 470   
  let y73 = 20
  let y74 = 55
  let y75 = 98
  let y76 = 120
  let y77 = 180
  let y78 = 212
  let y79 = 268
  let y80 = 302
  let y81 = 332
  let y82 = 390
  let y83 = 420   
  let y84 = 470 
  let y85 = 20
  let y86 = 75
  let y87 = 105
  let y88 = 140
  let y89 = 188
  let y90 = 236
  let y91 = 265
  let y92 = 325
  let y93 = 370
  let y94 = 400
  let y95 = 432
  let y96 = 450   
  let velocidad1 = 1
  let velocidad2 = 1.5
  let falling = false


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background (220)
}

  function draw() { 
    
  var valorSeno = sin(angulo);

  var gris = map(valorSeno, -0.5, 1, 0, 255)
  background(gris)
  
  angulo += 0.03
 
    
  fill(255)
  //primera fila 
  rect (20,y1,20,20)  
  rect (20,y2,50,50) 
  rect (20,y3,38,38) 
  rect (20,y4,25,25) 
  rect (20,y5,20,20) 
  rect (20,y6,35,35)    
  rect (20,y7,40,40) 
  rect (20,y8,50,50) 
  rect (20,y9,46,46) 
  rect (20,y10,25,25) 
  rect (20,y11,18,18) 
  rect (20,y12,10,10) 
  
  //segunda fila
  rect (80,y13,38,38) 
  rect (80,y14,20,20)   
  rect (80,y15,50,50) 
  rect (80,y16,46,46) 
  rect (80,y17,18,18) 
  rect (80,y18,35,35) 
  rect (80,y19,10,10) 
  rect (80,y20,25,25) 
  rect (80,y21,20,20) 
  rect (80,y22,50,50)  
  rect (80,y23,25,25) 
  rect (80,y24,40,40) 
  
  //tercera fila
  rect (140,y25,50,50)
  rect (140,y26,46,46)
  rect (140,y27,25,25)
  rect (140,y28,40,40) 
  rect (140,y29,10,10) 
  rect (140,y30,20,20) 
  rect (140,y31,50,50)
  rect (140,y32,38,38) 
  rect (140,y33,25,25)
  rect (140,y34,20,20) 
  rect (140,y35,18,18) 
  rect (140,y36,35,35) 
  
  //cuarta fila
  rect (200,y37,18,18)
  rect (200,y38,10,10) 
  rect (200,y39,38,38) 
  rect (200,y40,20,20) 
  rect (200,y41,46,46) 
  rect (200,y42,50,50) 
  rect (200,y43,25,25) 
  rect (200,y44,35,35) 
  rect (200,y45,20,20) 
  rect (200,y46,40,40) 
  rect (200,y47,25,25) 
  rect (200,y48,50,50) 
  
  //quinta fila
  rect (260,y49,40,40)
  rect (260,y50,35,35) 
  rect (260,y51,25,25)
  rect (260,y52,38,38) 
  rect (260,y53,10,10) 
  rect (260,y54,20,20) 
  rect (260,y55,50,50) 
  rect (260,y56,18,18)
  rect (260,y57,46,46) 
  rect (260,y58,25,25) 
  rect (260,y59,50,50) 
  rect (260,y60,20,20) 
  
  //sexta fila
  rect (320,y61,35,35)   
  rect (320,y62,46,46)
  rect (320,y63,38,38) 
  rect (320,y64,20,20) 
  rect (320,y65,50,50)
  rect (320,y66,18,18) 
  rect (320,y67,25,25) 
  rect (320,y68,40,40) 
  rect (320,y69,10,10) 
  rect (320,y70,50,50) 
  rect (320,y71,20,20) 
  rect (320,y72,25,25) 
  
  //septima fila
  rect (380,y73,25,25) 
  rect (380,y74,35,35) 
  rect (380,y75,10,10) 
  rect (380,y76,50,50) 
  rect (380,y77,20,20) 
  rect (380,y78,46,46) 
  rect (380,y79,25,25) 
  rect (380,y80,18,18)   
  rect (380,y81,50,50) 
  rect (380,y82,20,20) 
  rect (380,y83,40,40) 
  rect (380,y84,38,38) 
  
  //octava fila
  rect (440,y85,46,46)
  rect (440,y86,20,20)  
  rect (440,y87,25,25)
  rect (440,y88,38,38)
  rect (440,y89,40,40)
  rect (440,y90,18,18)
  rect (440,y91,50,50)   
  rect (440,y92,35,35)
  rect (440,y93,20,20)
  rect (440,y94,25,25)
  rect (440,y95,10,10)
  rect (440,y96,50,50)
    
  if (falling) {
    
  //primera fila  
  if (y1 + 377 < height) {
   y1 += velocidad2
  }  
  if (y2 + 357 < height) {
   y2 += velocidad2
  }  
  if (y3 + 307 < height) {
   y3 += velocidad2
  } 
  if (y4 + 269 < height) {
   y4 += velocidad2
  } 
  if (y5 + 244 < height) {
   y5 += velocidad2
  } 
  if (y6 + 224 < height) {
   y6 += velocidad2
  } 
  if (y7 + 189 < height) {
   y7 += velocidad1
  } 
 if (y8 + 149 < height) {
   y8 += velocidad1
  }
 if (y9 + 99 < height) {
   y9 += velocidad1
  } 
 if (y10 + 53 < height) {
   y10 += velocidad1
  }
 if (y11 + 28 < height) {
   y11 += velocidad1
  } 
 if (y12 + 10 < height) {
   y12 += velocidad1
 }
    
 //segunda fila  
  if (y13 + 377 < height) {
   y13 += velocidad2
  } 
    
  if (y14 + 339 < height) {
   y14 += velocidad2
  }     
  if (y15 + 319 < height) {
   y15 += velocidad2
  }     
  if (y16 + 269 < height) {
   y16 += velocidad2
  }     
  if (y17 + 223 < height) {
   y17 += velocidad2
  }    
  if (y18 + 205 < height) {
   y18 += velocidad2
  }     
  if (y19 + 170 < height) {
   y19 += velocidad1
  }    
  if (y20 + 160 < height) {
   y20 += velocidad1
  }      
  if (y21 + 135 < height) {
   y21 += velocidad1
  }  
  if (y22 + 115 < height) {
   y22 += velocidad1
  }
  if (y23 + 65 < height) {
   y23 += velocidad2
  } 
  if (y24 + 40 < height) {
   y24 += velocidad1
  }   
    
  //tercera fila
  if (y25 + 377 < height) {
   y25 += velocidad2
  }  
  if (y26 + 327 < height) {
   y26 += velocidad2
  }  
  if (y27 + 281 < height) {
   y27 += velocidad2
  }  
  if (y28 + 256 < height) {
   y28 += velocidad2
  }  
  if (y29 + 216 < height) {
   y29 += velocidad2
  }  
  if (y30 + 206 < height) {
   y30 += velocidad2
  }  
  if (y31 + 186 < height) {
   y31 += velocidad1
  }  
  if (y32 + 136 < height) {
   y32 += velocidad1
  }  
  if (y33 + 98 < height) {
   y33 += velocidad1
  }  
  if (y34 + 73 < height) {
   y34 += velocidad1
  }  
  if (y35 + 53 < height) {
   y35 += velocidad1
  }  
  if (y36 + 35 < height) {
   y36 += velocidad1
  }  
    
  //cuarta fila  
  if (y37 + 377 < height) {
   y37 += velocidad2
  } 
  if (y38 + 359 < height) {
   y38 += velocidad2
  } 
  if (y39 + 349 < height) {
   y39 += velocidad2
  } 
  if (y40 + 311 < height) {
   y40 += velocidad2
  } 
  if (y41 + 291 < height) {
   y41 += velocidad2
  } 
  if (y42 + 245 < height) {
   y42 += velocidad2
  } 
  if (y43 + 195 < height) {
   y43 += velocidad1
  }     
  if (y44 + 170 < height) {
   y44 += velocidad1
  }     
  if (y45 + 135 < height) {
   y45 += velocidad1
  }     
  if (y46 + 115 < height) {
   y46 += velocidad1
  } 
  if (y47 + 75 < height) {
   y47 += velocidad1
  } 
  if (y48 + 50 < height) {
   y48 += velocidad1
  }    
  
  //quinta fila  
  if (y49 + 377 < height) {
   y49 += velocidad2
  }
  if (y50 + 337 < height) {
   y50 += velocidad2
  }
  if (y51 + 302 < height) {
   y51 += velocidad2
  }
  if (y52 + 277 < height) {
   y52 += velocidad2
  }
  if (y53 + 239 < height) {
   y53 += velocidad2
  }
  if (y54 + 229 < height) {
   y54 += velocidad2
  }
  if (y55 + 209 < height) {
   y55 += velocidad1
  }
  if (y56 + 159 < height) {
   y56 += velocidad1
  }
  if (y57 + 141 < height) {
   y57 += velocidad1
  }
  if (y58 + 95 < height) {
   y58 += velocidad1
  }
  if (y59 + 70 < height) {
   y59 += velocidad1
  }
  if (y60 + 20 < height) {
   y60 += velocidad1
  }
  //sexta fila  
  if (y61 + 377 < height) {
   y61 += velocidad2
  }
  if (y62 + 342 < height) {
   y62 += velocidad2
  }
  if (y63 + 296 < height) {
   y63 += velocidad2
  }
  if (y64 + 258 < height) {
   y64 += velocidad2
  }
  if (y65 + 238 < height) {
   y65 += velocidad2
  }
  if (y66 + 188 < height) {
   y66 += velocidad2
  }
  if (y67 + 170 < height) {
   y67 += velocidad1
  }
  if (y68 + 145 < height) {
   y68 += velocidad1
  }
  if (y69 + 105 < height) {
   y69 += velocidad1
  }
  if (y70 + 95 < height) {
   y70 += velocidad1
  }
  if (y71 + 45 < height) {
   y71 += velocidad1
  }
  if (y72 + 25 < height) {
   y72 += velocidad1
  } 
    
 //septima fila
  if (y73 + 377 < height) {
   y73 += velocidad2
  }
  if (y74 + 352 < height) {
   y74 += velocidad2
  }
  if (y75 + 317 < height) {
   y75 += velocidad2
  }
  if (y76 + 307 < height) {
   y76 += velocidad2
  }
  if (y77 + 257 < height) {
   y77 += velocidad2
  }
  if (y78 + 237 < height) {
   y78 += velocidad2
  }
  if (y79 + 191 < height) {
   y79 += velocidad1
  }
  if (y80 + 166 < height) {
   y80 += velocidad1
  }
  if (y81 + 148 < height) {
   y81 += velocidad1
  }
  if (y82 + 98 < height) {
   y82 += velocidad1
  }
  if (y83 + 78 < height) {
   y83 += velocidad1
  }
  if (y84 + 38 < height) {
   y84 += velocidad1
  } 
    
  //octava fila 
  if (y85 + 377 < height) {
   y85 += velocidad2
  }
  if (y86 + 331 < height) {
   y86 += velocidad2
  }
  if (y87 + 311 < height) {
   y87 += velocidad2
  }
  if (y88 + 286 < height) {
   y88 += velocidad2
  }
  if (y89 + 248 < height) {
   y89 += velocidad2
  }
  if (y90 + 208 < height) {
   y90 += velocidad2
  }
  if (y91 + 190 < height) {
   y91 += velocidad1
  }
  if (y92 + 140 < height) {
   y92 += velocidad1
  }
  if (y93 + 105 < height) {
   y93 += velocidad1
  }
  if (y94 + 85 < height) {
   y94 += velocidad1
  }
  if (y95 + 60 < height) {
   y95 += velocidad1
  }
  if (y96 + 50 < height) {
   y96 += velocidad1
  }    
  }    
  }
  function mousePressed() {
  falling = true
}  