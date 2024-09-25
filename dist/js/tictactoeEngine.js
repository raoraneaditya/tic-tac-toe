
const tttTracker = [];

let turn = 'x';

let tempo = 0;

let gameOver = false;

let roundOver = false;

let playItems = document.querySelectorAll('.item');

let xPlayerScore = document.getElementById('xplayer-score');

let oPlayerScore = document.getElementById('oplayer-score');


let xSvg = `<div class="x-icon-container" id="x-icon2">
<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 490 490" xml:space="preserve">
<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
489.292,457.678 277.331,245.004 489.292,32.337 "/>
</svg>
</div>`;


let ySvg = `<div class="o-icon-container" id="o-icon2">
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
<defs>
    <style>
    .cls-1 {
        fill: none;
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
    }
    </style>
</defs>

<g>
    <g id="Layer_1">
    <path class="cls-1" d="M19,10c0,5-4,9-9,9S1,15,1,10,5,1,10,1s9,4,9,9Z"/>
    </g>
</g>
</svg>
</div>`;




// below are the positions required for the x and o to be in winnning positions
const winPos = {
    pos1: [0,1,2],
    pos2: [3,4,5],
    pos3: [6,7,8],
    pos4: [0,3,6],
    pos5: [1,4,7],
    pos6: [2,5,8],
    pos7: [0,4,8],
    pos8: [2,4,6]
};


playItems.forEach( (gridItem) => {
    gridItem.innerHTML = "";
    gridItem.addEventListener("click", () => {
      
      
      console.log(gridItem.innerHTML); 
        if(!gameOver && gridItem.innerHTML === ""){
            if(turn == 'x'){
                tttTracker[gridItem.dataset.value - 1] = "x";
                gridItem.innerHTML = xSvg;
                
                turn = 'o';   
            }else if(turn == 'o'){
                tttTracker[gridItem.dataset.value - 1] = "o";
                gridItem.innerHTML = ySvg;
                turn = 'x'
                
            }
        }
        
        winCheck(); //to check which player won or its draw and also calc points!
        
    });
    
});



function winCheck(){
    
    for (let key in winPos) {
        const tempPos = winPos[key]
        
        if( (tttTracker[tempPos[0]] === 'x' && tttTracker[tempPos[1]] === 'x' && tttTracker[tempPos[2]] ===  'x') ){
                // alert('x row');

                
                maTrix(); //console print below
                countScore(xPlayerScore);
               
                
                
                
                setTimeout(resetRound, 3000);
                
        }
        if( (tttTracker[tempPos[0]] === 'o' && tttTracker[tempPos[1]] === 'o' && tttTracker[tempPos[2]] ===  'o') ){
            // alert('o row');

           
           maTrix();//console print below
           countScore(oPlayerScore);
           setTimeout(resetRound, 3000);


            
        }
        if(tttTracker.join('').length === 9){
            setTimeout(resetRound, 3000);
            console.log("Draw");
        };
    }
    
}

function countScore(playerscore){

    tempo = 1;
    return playerscore.innerHTML = parseInt(playerscore.innerHTML) + tempo;
}

function resetRound(){
    tttTracker.length = 0;
    // gameOver = false;
    playItems.forEach(e => {
        e.innerHTML = "";
    } )
}

function maTrix(){
    for(let i = 0; i<9; i++){
        if(i === 2){
            console.log(tttTracker[0]+'|'+tttTracker[1]+'|'+tttTracker[2])
        }
        if(i === 5){
            console.log('_____')
            console.log(tttTracker[3]+'|'+tttTracker[4]+'|'+tttTracker[5])
        }
        if(i === 8){
            console.log('_____')
            console.log(tttTracker[6]+'|'+tttTracker[7]+'|'+tttTracker[8])
        } 
    }
}


