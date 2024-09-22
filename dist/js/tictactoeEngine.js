const tttTracker = [];
const track = 9;
let xPlayer = 1;
let oPlayer = 0;





// console.log(varItem);

// varItem[i].id

for(let i = 0; i<9; i++){
    let varItem = document.getElementsByClassName(".item");
    // let eachItem = document.getElementById("item-" + (i));
    varItem.addEventListener("click", function(){
        if (xPlayer == 1){
            eachItem.style.background = "#00ff00";
            tttTracker.push({i: "x"});
            xPlayer = 0;
            oPlayer = 1;
        
        } else if(oPlayer == 1)
        {
        
            eachItem.style.background = "#ff0000";
            tttTracker.push({i: "o"});
            oPlayer = 0;
            xPlayer = 1;

        }
    }); 
}
// if(tttTracker.length == 8){
    // console.log(tttTracker);
// }

