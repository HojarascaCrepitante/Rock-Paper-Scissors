function computerPlay(arr) {
  let playComp = arr[Math.floor(Math.random() * arr.length)];

  console.log(playComp);
}
computerPlay(["Rock" , "Paper" , "Scissors"]);

function playerSelection(choice) {
  let lowerCaseSelection = choice.toLowerCase(); 
  let capitalizedSelection = lowerCaseSelection.charAt(0).toUpperCase()+lowerCaseSelection.slice(1);
  let play = `You picked ${capitalizedSelection}`;
 
 console.log(play)
}
 playerSelection(prompt("Rock/Paper/Scissors",))


