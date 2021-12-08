function computerPlay(arr) {
  let playComp = arr[Math.floor(Math.random() * arr.length)];

  return(playComp)
}
let comPlay = computerPlay(["Rock" , "Paper" , "Scissors"]);
console.log(comPlay);

function playerSelection(choice) {
  let lowerCaseSelection = choice.toLowerCase(); 
  let capitalizedSelection = lowerCaseSelection.charAt(0).toUpperCase()+lowerCaseSelection.slice(1);
  let play = `You picked ${capitalizedSelection}`;
 
 return(play)
}
 let playerPlay = playerSelection(prompt("Rock/Paper/Scissors",));
 console.log(playerPlay)
