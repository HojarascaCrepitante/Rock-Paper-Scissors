function computerPlay(arr) {
  let playComp = arr[Math.floor(Math.random() * arr.length)];
  let playCompMessage = `Computer picked ${playComp}`;
  
  console.log(playCompMessage);
  return(playComp);
}
let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"]);


function playerSelection(choice) {
  let lowerCaseSelection = choice.toLowerCase(); 
  let capitalizedSelection = lowerCaseSelection.charAt(0).toUpperCase()+lowerCaseSelection.slice(1);
  let play = `You picked ${capitalizedSelection}`;
 
 console.log(play)
 return(capitalizedSelection)
 
}
 let playerPlay = playerSelection(prompt("Rock/Paper/Scissors",));
 
if (playerPlay === "Rock"){
  
  if(comPlay ==="Rock"){
    console.log("Tie")
  }
   else if(comPlay === "Paper") {
     console.log("Computer Wins")
   }

   else if(comPlay === "Scissors"){
     console.log("Player Wins")
   }
  
}

else if(playerPlay === "Paper"){
    
    if(comPlay === "Paper"){
      console.log("Tie")
    }

    else if(comPlay === "Rock"){
      console.log("Player Wins")
    }

    else if(comPlay === "Scissors"){
      console.log("Computer Wins")
    }

}
 
else if(playerPlay === "Scissors"){
    
    if(comPlay === "Scissors"){
      console.log("Tie")
    }

    else if(comPlay === "Paper"){
      console.log("Player wins")
    }

    else if(comPlay === "Rock"){
      console.log("Computer Wins")
    }
}