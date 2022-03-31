const results = document.querySelector('#results')
const playerPoints = document.createElement('p')
  playerPoints.textContent = '0';
  playerPoints.setAttribute('id', 'player')
  results.appendChild(playerPoints)
const computerPoints = document.createElement('p')
    computerPoints.textContent = '0';
    computerPoints.setAttribute('id', 'computer')
    results.appendChild(computerPoints)

const container = document.querySelector('#container');
  const rockButton = document.createElement('button');
    rockButton.setAttribute('id', 'Rock');
    rockButton.textContent = 'Rock';
    rockButton.addEventListener('click', play)
    container.appendChild(rockButton);

const paperButton = document.createElement('button');
  paperButton.setAttribute('id','Paper')
  paperButton.textContent = 'Paper';
  paperButton.addEventListener('click', play)
  container.appendChild(paperButton);

const scissorsButton = document.createElement('button');
  scissorsButton.setAttribute('id', 'Scissors')
  scissorsButton.textContent = 'Scissors';
  scissorsButton.addEventListener('click', play)
  container.appendChild(scissorsButton);

  let playerChoice = '';
  
  function play(e){
    
    if (e.target.id == 'Rock'){
      console.log(e.target.textContent);
      playerChoice = e.target.textContent;
      if(comPlay == 'Paper'){
        console.log(playerPoints.textContent++)
      }

    }
    else if (e.target.id == 'Paper'){
      console.log(e.target.textContent);
      playerChoice = e.target.textContent;
    }
    else if (e.target.id == 'Scissors') {
      console.log(e.target.textContent);
      playerChoice = e.target.textContent;
    }
      
      console.log(playerChoice)
      return(playerChoice)
  }
 
 
function computerPlay(arr) {
  let playComp = arr[Math.floor(Math.random() * arr.length)];
  let playCompMessage = `Computer picked ${playComp}`;
  
  console.log(playCompMessage);
  return(playComp);
}

let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"])
 







 
  

