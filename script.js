let playerCount = 0;
let compCount = 0;

function fullRound(){
 function playerSelection(choice){
  let lowerCaseSelection = choice.toLowerCase(); 
  let capitalizedSelection = lowerCaseSelection.charAt(0).toUpperCase()+lowerCaseSelection.slice(1);
  let play = `You picked ${capitalizedSelection}`;
 
 console.log(play)
 return(capitalizedSelection)
}

let playerPlay = playerSelection(prompt("Rock/Paper/Scissors"));

 
  function computerPlay(arr) {
  let playComp = arr[Math.floor(Math.random() * arr.length)];
  let playCompMessage = `Computer picked ${playComp}`;
  
  console.log(playCompMessage);
  return(playComp);
}
let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"])
 
 
function game(a,b){

  
  if (a === "Rock"){
  
  if(b ==="Rock"){
    console.log("Tie");
    return(playerCount,compCount)
    
  }
   else if(b === "Paper") {
     console.log("Computer Wins");
     console.log(playerCount , compCount + 1);
     return( compCount + 1)
   }

   else if(b === "Scissors"){
     console.log("Player Wins");
     console.log(playerCount + 1 , compCount);
     return(playerCount + 1)
   }
  
}

else if(a === "Paper"){
    
    if(b === "Paper"){
      console.log("Tie");
      return(playerCount,compCount)
    }

    else if(b === "Rock"){
      console.log("Player Wins");
      console.log(playerCount + 1 , compCount);
      return(playerCount + 1)
    }

    else if(b === "Scissors"){
      console.log("Computer Wins");
      console.log(playerCount , compCount+1);  
      return(compCount + 1)
    }

}
 
else if(a === "Scissors"){
    
    if(b === "Scissors"){
      console.log("Tie");
      return(playerCount,compCount)
    }

    else if(b === "Paper"){
      console.log("Player Wins");
      console.log(playerCount + 1 , compCount);
      return(playerCount + 1)
    }

    else if(b === "Rock"){
      console.log("Computer Wins");
      console.log(playerCount , compCount + 1);
      return(compCount + 1)
    }                                  
    
    
  }
  return(playerCount, compCount)
  
}game(playerPlay,comPlay)
for(i= 0;i = 5; i++){
  fullRound()

  if(compCount >= 3){
    console.log("Victory goes to the computer")
  }
  else if(  playerCount >= 3){
    console.log("Epic win Player")
  }
}




}fullRound()

for(i= 0;i = 5; i++){
  fullRound()

  if(compCount >= 3){
    console.log("Victory goes to the computer")
  }
  else if(  playerCount >= 3){
    console.log("Epic win Player")
  }
}


 
  

