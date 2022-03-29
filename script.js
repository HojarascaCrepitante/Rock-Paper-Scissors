const results = document.querySelector('#results')
const count1 = document.createElement('div');
count1.classList.add('player');
count1.textContent = '0'
results.appendChild(count1);

const count2 = document.createElement('div')
count2.classList.add('computer');
count2.textContent = '0'
results.appendChild(count2);

let playerPlay = '';

const container = document.querySelector('#container');
const button = document.createElement('button');
button.classList.add('rock');
button.textContent = 'Rock';
container.appendChild(button);
button.addEventListener('click', () => {
  playerPlay = 'Rock'
})

const button2 = document.createElement('button');
button2.classList.add('paper');
button2.textContent = 'Paper';
container.appendChild(button2);
button2.addEventListener('click', () => {
  playerPlay = 'Paper'

})

const button3 = document.createElement('button');
button3.classList.add('Scissors');
button3.textContent = 'Scissors';
container.appendChild(button3);
button3.addEventListener('click', () => {
  playerPlay = 'Scissors'

})


 
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
    return(count1,count2)
    
  }
   else if(b === "Paper") {
     console.log("Computer Wins");
     console.log(count1, count2 + 1);
     return( count2 + 1)
   }

   else if(b === "Scissors"){
     console.log("Player Wins");
     console.log(count1 + 1 , count2);
     return(count1 + 1)
   }
  
}

else if(a === "Paper"){
    
    if(b === "Paper"){
      console.log("Tie");
      return(count1,count2)
    }

    else if(b === "Rock"){
      console.log("Player Wins");
      console.log(count1 + 1 , count2);
      return(count1 + 1)
    }

    else if(b === "Scissors"){
      console.log("Computer Wins");
      console.log(count1 , count2+1);  
      return(count2 + 1)
    }

}
 
else if(a === "Scissors"){
    
    if(b === "Scissors"){
      console.log("Tie");
      return(count1,count2)
    }

    else if(b === "Paper"){
      console.log("Player Wins");
      console.log(count1 + 1 , count2);
      return(count1 + 1)
    }

    else if(b === "Rock"){
      console.log("Computer Wins");
      console.log(count1 , count2 + 1);
      return(count2 + 1)
    }                                  
    
    
  }
  return(count1, count2)
  
}game(playerPlay,comPlay)






 
  

