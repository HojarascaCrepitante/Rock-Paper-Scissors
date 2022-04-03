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
    
    let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"]);
    let roundWinner = document.createElement('div');
    roundWinner.setAttribute('id','roundWinner');
    document.body.insertBefore(roundWinner, playerAndComputerSelections);
               
    if (e.target.id == 'Rock'){
    
      
      if(comPlay == 'Paper'){
        computerPoints.textContent++
        roundWinner.textContent = 'Computer Wins'
      }
      else if (comPlay == 'Scissors'){
        
        playerPoints.textContent++
        roundWinner.textContent = 'Player Wins'
      }
      else if (comPlay == 'Rock'){
        roundWinner.textContent = 'Tie'
      }
    }
    else if (e.target.id == 'Paper'){
        if (comPlay == 'Rock'){
         playerPoints.textContent++
         roundWinner.textContent = 'Player Wins'
        }
        else if (comPlay == 'Scissors'){
         computerPoints.textContent++
         roundWinner.textContent = 'Computer Wins'
        }
        else if (comPlay == 'Paper'){
          roundWinner.textContent = 'Tie'
        }
    }
    else if (e.target.id == 'Scissors') {
        if (comPlay == 'Paper'){
          playerPoints.textContent++
          roundWinner.textContent = 'Player Wins'          
        }
        else if (comPlay == 'Rock'){
          computerPoints.textContent++
          roundWinner.textContent = 'Computer Wins'
        }
        else if( comPlay == 'Scissors'){
          roundWinner.textContent = 'Tie'
        }
    }
      representationOfRound.textContent++
        
    checkWinner()
    }
    
    function computerPlay(arr) {
      let playComp = arr[Math.floor(Math.random() * arr.length)];
      let playCompMessage = `Computer picked ${playComp}`;
      let computerSelection = document.createElement('p')
      computerSelection.setAttribute('id', 'computerSelection')
      computerSelection.textContent = `${playCompMessage}`
      playerAndComputerSelections.appendChild(computerSelection)
      return(playComp);
      }
      
      
    function checkWinner(){
      if (representationOfRound.textContent == 5 && playerPoints.textContent > computerPoints.textContent){
        window.alert('Player wins the game');
        let restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', newGame)
        restartButton.setAttribute('id','restartButton');
        playerAndComputerSelections.insertBefore(restartButton,playerSelection)
        rockButton.removeEventListener('click',play);
        paperButton.removeEventListener('click',play);
        scissorsButton.removeEventListener('click',play);
      }
      else if(representationOfRound.textContent == 5 && playerPoints.textContent < computerPoints.textContent){
        window.alert('Computer wins the game');
        let restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', newGame);
        restartButton.setAttribute('id','restartButton');
        playerAndComputerSelections.insertBefore(restartButton,playerSelection)
        rockButton.removeEventListener('click',play);
        paperButton.removeEventListener('click',play);
        scissorsButton.removeEventListener('click',play);
      }
      else if(representationOfRound.textContent == 5 && playerPoints.textContent == computerPoints.textContent){
        window.alert('Tie');
        let restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', newGame);
        restartButton.setAttribute('id','restartButton');
        playerAndComputerSelections.insertBefore(restartButton,playerSelection);
        rockButton.removeEventListener('click',play);
        paperButton.removeEventListener('click',play);
        scissorsButton.removeEventListener('click',play);
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
      function newGame(){
        location.reload()
      }

      


  




 
  

