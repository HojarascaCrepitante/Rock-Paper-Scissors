const header = document.querySelector('.header');
let round = document.querySelector('#round')
  round.textContent = 'Round'
  round.classList.add('score');
  let representationOfRound = document.createElement('p')
  representationOfRound.textContent = '0'
  round.appendChild(representationOfRound)
  header.appendChild(round)
const resultsPlayer = document.querySelector('#resultsPlayer')
  resultsPlayer.textContent = 'Player' 
  resultsPlayer.classList.add('score');
  let playerPoints = document.createElement('p')
    playerPoints.textContent = '0';
    playerPoints.setAttribute('id', 'player');
    resultsPlayer.appendChild(playerPoints)
    header.insertBefore(resultsPlayer,round)
const resultsComputer = document.querySelector('#resultsComputer')
  resultsComputer.textContent = 'Computer';
  resultsComputer.classList.add('score');
  let computerPoints = document.createElement('p')
    computerPoints.textContent ='0';
    computerPoints.setAttribute('id', 'computer')
    resultsComputer.appendChild(computerPoints)
    header.appendChild(resultsComputer)

const everyButton = document.querySelector('#everyButton');
  const rockButton = document.createElement('button');
    rockButton.setAttribute('id', 'Rock');
    rockButton.textContent = 'Rock';
    rockButton.addEventListener('click', play)
    everyButton.appendChild(rockButton);

    const paperButton = document.createElement('button');
    paperButton.setAttribute('id','Paper')
    paperButton.textContent = 'Paper';
    paperButton.addEventListener('click', play)
    everyButton.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.setAttribute('id', 'Scissors')
    scissorsButton.textContent = 'Scissors';
    scissorsButton.addEventListener('click', play)
    everyButton.appendChild(scissorsButton);

  let playerChoice = '';
 
  function play(e){
    function computerPlay(arr) {
      let playComp = arr[Math.floor(Math.random() * arr.length)];
      let playCompMessage = `Computer picked ${playComp}`;
      console.log(playCompMessage);
      return(playComp);
      }
      let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"])

               
    if (e.target.id == 'Rock'){
      console.log(e.target.textContent);
      playerChoice = e.target.textContent;
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
      playerChoice = e.target.textContent;
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
      playerChoice = e.target.textContent;
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
      console.log(playerChoice)
      representationOfRound.textContent++
  
      if (Number(playerPoints.textContent) == 5){
        alert('Player wins the game')
        return
      }
      else if (Number(computerPoints.textContent) == 5){
        alert('Computer wins the game')
        return
      }
      let currentRound = Number(representationOfRound.textContent);
      return currentRound
    }
    let winner = false;

    if (playerPoints.textContent == '5'){
      alert('Player wins the game')
      winner = true
    }
    else if(computerPoints.textContent == '5'){
      alert('Computer wins the game')
      winner = true
    }
    
    /* while (winner = true){
      location.reload(true)
    }
    */


  




 
  

