let playerCount = 0;
let compCount = 0;


const container = document.querySelector('#container');
const button = document.createElement('button');
button.classList.add('rock');
button.textContent = 'Rock';
container.appendChild(button);

const button2 = document.createElement('button');
button.classList.add('paper');
button.textContent = 'Paper';
container.appendChild(button2);

const button3 = document.createElement('button');
button.classList.add('Scissors');
button.textContent = 'Scissors';
container.appendChild(button3);


 
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






 
  

