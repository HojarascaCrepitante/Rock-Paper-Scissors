
const container = document.querySelector('#container');
const button = document.createElement('button');
button.setAttribute('id', 'Rock');
button.textContent = 'Rock';
button.addEventListener('click', play)
container.appendChild(button);

const button2 = document.createElement('button');
button2.setAttribute('id','Paper')
button2.textContent = 'Paper';
button2.addEventListener('click', play)
container.appendChild(button2);

const button3 = document.createElement('button');
button3.setAttribute('id', 'Scissors')
button3.textContent = 'Scissors';
button3.addEventListener('click', play)
container.appendChild(button3);

  function play(e){
    if (e.target.id == 'Rock'){
      console.log(e.target.textContent)
    }
    else if (e.target.id == 'Paper'){
      console.log(e.target.textContent)
    }
    else (e.target.id == 'Scissors')
      console.log(e.target.textContent)
    
  }

  function computerPlay(arr) {
  let playComp = arr[Math.floor(Math.random() * arr.length)];
  let playCompMessage = `Computer picked ${playComp}`;
  
  console.log(playCompMessage);
  return(playComp);
}
let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"])
 
 
function game(a,b,c,d){

  
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

else if(c === "Paper"){
    
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
 
else if(d === "Scissors"){
    
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
  
}game(choice1,comPlay,choice2,choice3)






 
  

