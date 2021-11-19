let x =document.querySelector(".x");
let o =document.querySelector(".o");
let boxes =document.querySelectorAll(".box")
let buttons =document.querySelectorAll("#buttons-container button");
let messageContainer =document.querySelector("#message");
let messageText =document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1=0;
let player2=0;

//adicionarndo o evento de click aos boxes
for(let i= 0; i < boxes.length; i++){

//quando alguem clicar na caixa
boxes[i].addEventListener("click", function(){
    
    let el;
    if(player1==player2){
        //x
        el=x;
    }else{
        //O
        el=o;
    };
    //verifica se ja tem X ou O.
   if(this.childNodes.length==0){
    let cloneEl =el.cloneNode(true);
    this.appendChild(cloneEl);
    
    //computar a jogada da vez
    if(player1==player2){
        player1++;
        if(secondPlayer=='ia-player'){
            computerPlay();
            player2++;
        }
    }else{
        player2++;
    }

    //checar quem venceu
    checkWinCondition();
   }

});
}

// evento para saber se é 2 players ou IA
for(let i=0; i<buttons.length; i++)
buttons[i].addEventListener("click",function(){
   secondPlayer=this.getAttribute("id");

   for(let j=0; j <buttons.length; j++){
       buttons[j].style.display='none';
   }
   setTimeout(function(){
       let container= document.querySelector("#container")
       container.classList.remove("hide");
   },500);
});

//verifica quem venceu
function checkWinCondition(){
    let b1= document.getElementById("block-1");
    let b2= document.getElementById("block-2");
    let b3= document.getElementById("block-3");
    let b4= document.getElementById("block-4");
    let b5= document.getElementById("block-5");
    let b6= document.getElementById("block-6");
    let b7= document.getElementById("block-7");
    let b8= document.getElementById("block-8");
    let b9= document.getElementById("block-9");
    //Horizontal
    if(b1.childNodes.length >0 && b2.childNodes.length >0 && b3.childNodes.length >0){

        let b1b=b1.childNodes[0].className;
        let b2b=b2.childNodes[0].className;
        let b3b=b3.childNodes[0].className;

    if(b1b=='x' && b2b=='x' && b3b=='x'){
        declareWinner('x')
    }else if(b1b=='o' && b2b=='o' && b3b=='o'){
        declareWinner('o')
    }
  }
  if(b4.childNodes.length >0 && b5.childNodes.length >0 && b6.childNodes.length >0){

    let b4b=b4.childNodes[0].className;
    let b5b=b5.childNodes[0].className;
    let b6b=b6.childNodes[0].className;

if(b4b=='x' && b5b=='x' && b6b=='x'){
    declareWinner('x')
}else if(b4b=='o' && b5b=='o' && b6b=='o'){
    declareWinner('o')
}
}
if(b7.childNodes.length >0 && b8.childNodes.length >0 && b9.childNodes.length >0){

    let b7b=b7.childNodes[0].className;
    let b8b=b8.childNodes[0].className;
    let b9b=b9.childNodes[0].className;

if(b7b=='x' && b8b=='x' && b9b=='x'){
    declareWinner('x')
}else if(b7b=='o' && b8b=='o' && b9b=='o'){
    declareWinner('o')
}
}
//Vertical
if(b1.childNodes.length >0 && b4.childNodes.length >0 && b7.childNodes.length >0){

    let b1b=b1.childNodes[0].className;
    let b4b=b4.childNodes[0].className;
    let b7b=b7.childNodes[0].className;

if(b1b=='x' && b4b=='x' && b7b=='x'){
    declareWinner('x')
}else if(b1b=='o' && b4b=='o' && b7b=='o'){
    declareWinner('o')
}
}
if(b2.childNodes.length >0 && b5.childNodes.length >0 && b8.childNodes.length >0){

    let b2b=b2.childNodes[0].className;
    let b5b=b5.childNodes[0].className;
    let b8b=b8.childNodes[0].className;

if(b2b=='x' && b5b=='x' && b8b=='x'){
    declareWinner('x')
}else if(b2b=='o' && b5b=='o' && b8b=='o'){
    declareWinner('o')
}
}
if(b2.childNodes.length >0 && b5.childNodes.length >0 && b8.childNodes.length >0){

    let b2b=b2.childNodes[0].className;
    let b5b=b5.childNodes[0].className;
    let b8b=b8.childNodes[0].className;

if(b2b=='x' && b5b=='x' && b8b=='x'){
    declareWinner('x')
}else if(b2b=='o' && b5b=='o' && b8b=='o'){
    declareWinner('o')
}
}
if(b3.childNodes.length >0 && b6.childNodes.length >0 && b9.childNodes.length >0){

    let b3b=b3.childNodes[0].className;
    let b6b=b6.childNodes[0].className;
    let b9b=b9.childNodes[0].className;

if(b3b=='x' && b6b=='x' && b9b=='x'){
    declareWinner('x')
}else if(b3b=='o' && b6b=='o' && b9b=='o'){
    declareWinner('o')
}
}
//Diagonal
if(b1.childNodes.length >0 && b5.childNodes.length >0 && b9.childNodes.length >0){

    let b1b=b1.childNodes[0].className;
    let b5b=b5.childNodes[0].className;
    let b9b=b9.childNodes[0].className;

if(b1b=='x' && b5b=='x' && b9b=='x'){
    declareWinner('x')
}else if(b1b=='o' && b5b=='o' && b9b=='o'){
    declareWinner('o')
}
}
if(b3.childNodes.length >0 && b5.childNodes.length >0 && b7.childNodes.length >0){

    let b3b=b3.childNodes[0].className;
    let b5b=b5.childNodes[0].className;
    let b7b=b7.childNodes[0].className;

if(b3b=='x' && b5b=='x' && b7b=='x'){
    declareWinner('x')
}else if(b3b=='o' && b5b=='o' && b7b=='o'){
    declareWinner('o')
}
}
//Deu velha
let counter=0;
for(let i=0; i<boxes.length; i++){
    if(boxes[i].childNodes[0]!=undefined){
       counter++;
    }
}
if(counter==9){
    declareWinner("Deu Velha!");
}
}
//limpando a jogada e declarando o vencedor e placar

function declareWinner(winner){
    let scoreboardx= document.querySelector("#scoreboard-1");
    let scoreboardo= document.querySelector("#scoreboard-2");
    let msg= '';
    
    if(winner == 'x'){
        scoreboardx.textContent= parseInt(scoreboardx.textContent) +1
        msg="Jogador 1 venceu!";
    }else if(winner == 'o'){
        scoreboardo.textContent= parseInt(scoreboardo.textContent) + 1
        msg="Jogador 2 venceu!";
    }else{
        msg= "Deu Velhinha!";
    }
    //exibe Msg

    messageText.innerHTML= msg
    messageContainer.classList.remove("hide");

    //esconder msg
    setTimeout(function(){
        messageContainer.classList.add("hide");
    },2000);
    //zerar jogada
    player1=0;
    player2=0;

    //remover X e O
    boxesToRemove= document.querySelectorAll(".box div")

    for(let i=0; i<boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])

    }
}

function computerPlay(){
    let cloneo= o.cloneNode(true);
    counter=0;
    filled=0;

    for(let i=0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);
        
        // só vai preencher se estiver vario o filho
        if(boxes[i].childNodes[0]== undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneo);
                counter++;
                break;
        }
        // checagem de quantas estão preenchidas
      }else {
        filled++;
    }
    }
    if(counter== 0 && filled <9){
        computerPlay();
    }
}

