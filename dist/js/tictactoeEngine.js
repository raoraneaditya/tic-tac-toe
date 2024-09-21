const tttTracker = [];


for(let i = 0; i<9; i++){
    let id = "item-" + (i+1);
    
    document.getElementById(id).addEventListener("click", function(){
        document.getElementById(id).style.background = "#00ff00";
    });
}

