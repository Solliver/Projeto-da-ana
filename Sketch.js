letdeixar o cor;cor;
letdeixar posicionaHorizontal;  // xposicaoHorizontal; // x
letdeixar a posição Vertical;  // yposicaoVertical; // y

 functionConfiguração da   função() {Configuração() {
 createCanvas (400,  400) createCanvas(400,  400);
 fundo (cor (100,0,0));  fundo(cor(100,0,0));
 cor = cor (aleatório (0,255),  aleatório (0,255),  aleatório (0,255));  cor(aleatório(0,255) ,   aleatório(0,255) ,   aleatório(0,255));
     posicaoHorizontal =   200;  200;
 posicaoVertical = 200;  200;
}


FuncionalSorte de  função() {sorteio() {
  
 preenchimento(cor) preenchimento(cor);
   círculo(posicaoHorizontal,posicaoVertical,50);  círculo(posicaoHorizontal,posicaoVertical,50);
 
  
  
 Se (mouseX = posicionamento Horizontal){ Se (mouseX < posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal -   1;  1;
   } }
  
 Se (mouseX = posicionamento Horizontal){ Se (mouseX > posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal +  1;  1;
   } }
  
 Se (mouseY = posicaoVertical){ Se (mouseY < posicaoVertical){
 posicaoVertical-; 
   } }
    
 Se (mouseY = posicaoVertical){ Se (mouseY = posicaoVertical){
 posicaoVertical++; 
   } }
  
 Se (mouseIsPressionado){ Se (mouseIsPressionado){
 cor = cor (aleatório (0,255),  aleatório (0,255),  aleatório (0,100));  cor(aleatório(0,255) ,   aleatório(0,255) ,   aleatório(0,255) ,   aleatório(0,100));
   } }
    
}
