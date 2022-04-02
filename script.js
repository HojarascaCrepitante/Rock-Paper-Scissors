const header = document.querySelector('.header');
let round = document.querySelector('#round');
  round.textContent = 'Round';
  round.classList.add('score');
  let representationOfRound = document.createElement('p');
  representationOfRound.textContent = '0';
  round.appendChild(representationOfRound);
  header.appendChild(round);
const resultsPlayer = document.querySelector('#resultsPlayer');
  resultsPlayer.textContent = 'Player' ;
  resultsPlayer.classList.add('score');
  let playerPoints = document.createElement('p');
    playerPoints.textContent = '0';
    playerPoints.setAttribute('id', 'player');
    resultsPlayer.appendChild(playerPoints);
    header.insertBefore(resultsPlayer,round);
const resultsComputer = document.querySelector('#resultsComputer');
  resultsComputer.textContent = 'Computer';
  resultsComputer.classList.add('score');
  let computerPoints = document.createElement('p');
    computerPoints.textContent ='0';
    computerPoints.setAttribute('id', 'computer');
    resultsComputer.appendChild(computerPoints);
    header.appendChild(resultsComputer);

const everyButton = document.querySelector('#everyButton');
  const rockButton = document.createElement('button');
    rockButton.setAttribute('id', 'Rock');
    rockButton.textContent = 'Rock';
    rockButton.addEventListener('click', play);
    rockButton.addEventListener('click', clearPreviousSelection)
    rockButton.addEventListener('click', appendSelections)
    everyButton.appendChild(rockButton);

    const paperButton = document.createElement('button');
    paperButton.setAttribute('id','Paper');
    paperButton.textContent = 'Paper';
    paperButton.addEventListener('click', play);
    paperButton.addEventListener('click', clearPreviousSelection)
    paperButton.addEventListener('click', appendSelections);
    everyButton.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.setAttribute('id', 'Scissors');
    scissorsButton.textContent = 'Scissors';
    scissorsButton.addEventListener('click', play);
    scissorsButton.addEventListener('click', clearPreviousSelection)
    scissorsButton.addEventListener('click', appendSelections);
    everyButton.appendChild(scissorsButton);

  const playerAndComputerSelections = document.querySelector('.playerAndComputerSelections');

    
 
  function play(e){

    let checkIfComputerSelectionExists = document.getElementById('computerSelection');
      if (checkIfComputerSelectionExists){
        playerAndComputerSelections.removeChild(computerSelection);
      }
    
    let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"])

               
    if (e.target.id == 'Rock'){
      console.log(e.target.textContent);
      
      if(comPlay == 'Paper'){
        computerPoints.textContent++
        alert('Computer Wins')
      }
      else if (comPlay == 'Scissors'){
        
        playerPoints.textContent++
        alert('Player Wins')
      }
      else if (comPlay == 'Rock'){
        alert('Tie')
      }
    }
    else if (e.target.id == 'Paper'){
      console.log(e.target.textContent);
      
        if (comPlay == 'Rock'){
         playerPoints.textContent++
         alert('Player Wins')
        }
        else if (comPlay == 'Scissors'){
         computerPoints.textContent++
         alert('Computer Wins')
        }
        else if (comPlay == 'Paper'){
          alert('Tie')
        }
    }
    else if (e.target.id == 'Scissors') {
      console.log(e.target.textContent);
      
        if (comPlay == 'Paper'){
          playerPoints.textContent++
          alert('Player Wins')          
        }
        else if (comPlay == 'Rock'){
          computerPoints.textContent++
          alert('Computer Wins')
        }
        else if( comPlay == 'Scissors'){
          alert('Tie')
        }
    }
      representationOfRound.textContent++
        
    checkWinner()
    }
    
    function computerPlay(arr) {
      let playComp = arr[Math.floor(Math.random() * arr.length)];
      let playCompMessage = `Computer picked ${playComp}`;
      console.log(playCompMessage);
      let computerSelection = document.createElement('p')
      computerSelection.setAttribute('id', 'computerSelection')
      computerSelection.textContent = `${playCompMessage}`
      playerAndComputerSelections.appendChild(computerSelection)
      return(playComp);
      }
      
      
    function checkWinner(){
      if (representationOfRound.textContent == 5 && playerPoints.textContent > computerPoints.textContent){
        alert('Player wins the game')
        location.reload()
      }
      else if(representationOfRound.textContent == 5 && playerPoints.textContent < computerPoints.textContent){
        alert('Computer wins the game')
        location.reload()
      }
      else if(representationOfRound.textContent == 5 && playerPoints.textContent == computerPoints.textContent){
        alert('Tie')
        location.reload()
      }
     }

     
     function appendSelections(e){
        let playerSelection = document.createElement('p')
        playerSelection.setAttribute('id','playerSelection')
        playerSelection.textContent = `You Picked ${e.target.id}`
        playerAndComputerSelections.appendChild(playerSelection);
        return playerSelection
      } 
      function clearPreviousSelection(){
         let checkIfPlayerSelectionExists = document.getElementById('playerSelection');
          if (checkIfPlayerSelectionExists){
          playerAndComputerSelections.removeChild(playerSelection);
          }
      }


  




 
  

