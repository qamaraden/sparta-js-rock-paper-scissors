
var choicesArray = ['Rock', 'Paper', 'Scissors'];
var yourScore = 0;
var compScore = 0;

//changes to .uppercase

var rockPaperScissors = function() {
  for (var i = 0; i < 5; i++) {
    var chooseType = prompt('Rock, Paper, or Scissors?');
    var computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    if (
      chooseType === 'Rock' ||
      (chooseType === 'rock' && computerChoice === choicesArray[0])
    ) {
      alert("It's a tie!");
    } else if (
      chooseType === 'Rock' ||
      (chooseType === 'rock' && computerChoice === choicesArray[1])
    ) {
      alert('You lose this round!');
      compScore++;
      //computer scores
    } else if (
      chooseType === 'Rock' ||
      (chooseType === 'rock' && computerChoice === choicesArray[2])
    ) {
      alert('You won this one!');
      yourScore++;
      //you score
    }
    if (
      chooseType === 'Paper' ||
      (chooseType === 'paper' && computerChoice === choicesArray[0])
    ) {
      alert('You won this one!');
      yourScore++;
    } else if (
      chooseType === 'Paper' ||
      (chooseType === 'paper' && computerChoice === choicesArray[1])
    ) {
      alert("It's a tie!");
    } else if (
      chooseType === 'Paper' ||
      (chooseType === 'paper' && computerChoice === choicesArray[2])
    ) {
      alert('You lose this round!');
      compScore++;
    }
    if (
      chooseType === 'Scissors' ||
      (chooseType === 'scissors' && computerChoice === choicesArray[0])
    ) {
      alert('You lose this round!');
      compScore++;
    } else if (chooseType === 'Scissors' && computerChoice === choicesArray[1]) {
      alert('You won this one!');
      yourScore++;
    } else if (
      chooseType === 'Scissors' ||
      (chooseType === 'scissors' && computerChoice === choicesArray[2])
    ) {
      alert("It's a tie!");
    }
    console.log(computerChoice);
  }
};

endOfGame = function() {
  alert('You: ' + yourScore + '\n' + 'Computer: ' + compScore);
  if (yourScore === compScore) {
    alert("It's a tie!");
  } else if (yourScore > compScore) {
    alert('You win!');
  } else if (yourScore < compScore) {
    alert('You lose!');
  }
};




var start = prompt('Would you like to play Rock Paper Scissors? type yes or no');
while (start === 'yes') {
  alert('Best 3 out of 5!');
  rockPaperScissors();
  endOfGame();
  //here I reset the score to 0 without breaking the code resetScore();
  start = prompt('Would you like to play Rock Paper Scissors? type yes or no');

}

start;




//CODE TRY 1
//  var choice = prompt("Do you choose rock, paper or scissors?");
//  var computerChoice = Math.random();
//  if (computerChoice <= 0.33) {
//    computerChoice = "rock";}
//    else if (computerChoice <= 0.66) {
//   computerChoice = "paper";
//   }else{
//     computerChoice = "scissors";
//   }
//   var userWin = 0;
//   var computerWin = 0;
//
//   var compare1 = function(choice,computerChoice){
//     if(choice === computerChoice){
//       return alert("The result is a tie!");
//     }
//     if(choice === "rock"){
//       if(computerChoice === "scissors"){
//         return alert("rock wins");
//       }
//       else{
//         return alert("paper wins");
//       }
//     }
//     if(choice === "paper"){
//       if(computerChoice === "rock"){
//         return alert("rock wins");
//       }
//       else{
//         return alert("scissors wins")
//       }
//     }
//   };
// compare1(choice, computerChoice);
//
// var choice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//   computerChoice = "rock";}
//   else if (computerChoice <= 0.66) {
//  computerChoice = "paper";
//  }else{
//    computerChoice = "scissors";
//  }
//  var compare2 = function(choice,computerChoice){
//    if(choice === computerChoice){
//      return alert("The result is a tie!");
//    }
//    if(choice === "rock"){
//      if(computerChoice === "scissors"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("paper wins");
//      }
//    }
//    if(choice === "paper"){
//      if(computerChoice === "rock"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("scissors wins")
//      }
//    }
//  };
// compare2(choice, computerChoice);
//
// var choice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//   computerChoice = "rock";}
//   else if (computerChoice <= 0.66) {
//  computerChoice = "paper";
//  }else{
//    computerChoice = "scissors";
//  }
//  var compare3 = function(choice,computerChoice){
//    if(choice === computerChoice){
//      return alert("The result is a tie!");
//    }
//    if(choice === "rock"){
//      if(computerChoice === "scissors"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("paper wins");
//      }
//    }
//    if(choice === "paper"){
//      if(computerChoice === "rock"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("scissors wins")
//      }
//    }
//  };
// compare3(choice, computerChoice);
//
// var choice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//   computerChoice = "rock";}
//   else if (computerChoice <= 0.66) {
//  computerChoice = "paper";
//  }else{
//    computerChoice = "scissors";
//  }
//  var compare4 = function(choice,computerChoice){
//    if(choice === computerChoice){
//      return alert("The result is a tie!");
//    }
//    if(choice === "rock"){
//      if(computerChoice === "scissors"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("paper wins");
//      }
//    }
//    if(choice === "paper"){
//      if(computerChoice === "rock"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("scissors wins")
//      }
//    }
//  };
// compare4(choice, computerChoice);
//
// var choice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//   computerChoice = "rock";}
//   else if (computerChoice <= 0.66) {
//  computerChoice = "paper";
//  }else{
//    computerChoice = "scissors";
//  }
//  var compare5 = function(choice,computerChoice){
//    if(choice === computerChoice){
//      return alert("The result is a tie!");
//    }
//    if(choice === "rock"){
//      if(computerChoice === "scissors"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("paper wins");
//      }
//    }
//    if(choice === "paper"){
//      if(computerChoice === "rock"){
//        return alert("rock wins");
//      }
//      else{
//        return alert("scissors wins")
//      }
//    }
//  };
// compare5(choice, computerChoice);
//
// const playGame = () => {
//   let choice = computerChoice("scissors");
//   const computerChoice = getComputerchoice();
//   alert('you threw: '+ choice)
//   alert('the computer threw; '+ computerChoice);
//   alert(determineWinner(choice,computerChoice));
// }

//CODE TRY 2

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//    computerChoice = "rock";
//   }else if (computerChoice <= 0.66) {
//   computerChoice = "paper";
//   }else{
//     computerChoice = "scissors";
//   }
//   var userWin = 0;
//   var computerWin = 0;
//
//   function compare1(userChoice, computerChoice){
//     if ( userWin<=3 && computerWin<=3 ) {
//       if (userChoice === computerChoice){
//         return alert("The result is a tie!");
//       }
//       else if (userChoice === "rock") {
//         if (computerChoice === "scissors") {
//           userWin +=1;
//           return alert("rock wins");
//         }
//       }
//       else if (userChoice === "paper"){
//         if (computerChoice === "rock") {
//           userWin +=1;
//           return alert("paper wins");
//         }
//       }
//       else if (userChoice === "scissors"){
//         if (computerChoice === "paper") {
//           userWin +=1;
//           return alert("rock wins");
//         }
//     }
//   }
//
// }
// compare1 (userChoice, computerChoice);
//
//   var userChoice = prompt("Do you choose rock, paper or scissors?");
//   var computerChoice = Math.random();
//   if (computerChoice <= 0.33) {
//      computerChoice = "rock";
//     }else if (computerChoice <= 0.66) {
//     computerChoice = "paper";
//     }else{
//       computerChoice = "scissors";
//     }
//     var userWin = 0;
//     var computerWin = 0;
//
//     function compare2(userChoice, computerChoice){
//       if ( userWin<=3 && computerWin<=3 ) {
//         if (userChoice === computerChoice){
//           return alert("The result is a tie!");
//         }
//         else if (userChoice === "rock") {
//           if (computerChoice === "scissors") {
//             userWin +=1;
//             return alert("rock wins");
//           }
//         }
//         else if (userChoice === "paper"){
//           if (computerChoice === "rock") {
//             userWin +=1;
//             return alert("paper wins");
//           }
//         }
//         else if (userChoice === "scissors"){
//           if (computerChoice === "paper") {
//             userWin +=1;
//             return alert("rock wins");
//           }
//       }
//     }
//
//   }
// compare2 (userChoice, computerChoice);
//
//     var userChoice = prompt("Do you choose rock, paper or scissors?");
//     var computerChoice = Math.random();
//     if (computerChoice <= 0.33) {
//        computerChoice = "rock";
//       }else if (computerChoice <= 0.66) {
//       computerChoice = "paper";
//       }else{
//         computerChoice = "scissors";
//       }
//       var userWin = 0;
//       var computerWin = 0;
//
//       function compare3(userChoice, computerChoice){
//         if ( userWin<=3 && computerWin<=3 ) {
//           if (userChoice === computerChoice){
//             return alert("The result is a tie!");
//           }
//           else if (userChoice === "rock") {
//             if (computerChoice === "scissors") {
//               userWin +=1;
//               return alert("rock wins");
//             }
//           }
//           else if (userChoice === "paper"){
//             if (computerChoice === "rock") {
//               userWin +=1;
//               return alert("paper wins");
//             }
//           }
//           else if (userChoice === "scissors"){
//             if (computerChoice === "paper") {
//               userWin +=1;
//               return alert("rock wins");
//             }
//         }
//       }
//
//     }
// compare3 (userChoice, computerChoice);
//
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//    computerChoice = "rock";
//   }else if (computerChoice <= 0.66) {
//   computerChoice = "paper";
//   }else{
//     computerChoice = "scissors";
//   }
//   var userWin = 0;
//   var computerWin = 0;
//
//   function compare4(userChoice, computerChoice){
//     if ( userWin<=3 && computerWin<=3 ) {
//       if (userChoice === computerChoice){
//         return alert("The result is a tie!");
//       }
//       else if (userChoice === "rock") {
//         if (computerChoice === "scissors") {
//           userWin +=1;
//           return alert("rock wins");
//         }
//       }
//       else if (userChoice === "paper"){
//         if (computerChoice === "rock") {
//           userWin +=1;
//           return alert("paper wins");
//         }
//       }
//       else if (userChoice === "scissors"){
//         if (computerChoice === "paper") {
//           userWin +=1;
//           return alert("rock wins");
//         }
//     }
//   }
//
// }
// compare4 (userChoice, computerChoice);
//
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <= 0.33) {
//    computerChoice = "rock";
//   }else if (computerChoice <= 0.66) {
//   computerChoice = "paper";
//   }else{
//     computerChoice = "scissors";
//   }
//   var userWin = 0;
//   var computerWin = 0;
//
//   function compare5(userChoice, computerChoice){
//     if ( userWin<=3 && computerWin<=3 ) {
//       if (userChoice === computerChoice){
//         return alert("The result is a tie!");
//       }
//       else if (userChoice === "rock") {
//         if (computerChoice === "scissors") {
//           userWin +=1;
//           return alert("rock wins");
//         }
//       }
//       else if (userChoice === "paper"){
//         if (computerChoice === "rock") {
//           userWin +=1;
//           return alert("paper wins");
//         }
//       }
//       else if (userChoice === "scissors"){
//         if (computerChoice === "paper") {
//           userWin +=1;
//           return alert("rock wins");
//         }
//     }
//   }
//
// }
// compare5 (userChoice, computerChoice);
//
// var finalUserWin = 0;
// var finalComputerWin = 0;
//
// function compareFinal(compare1, compare2, compare3, compare4, compare5){
//   if ( finalUserWin<=3 && finalComputerWin<=3){
//     return alert("You've tied!");
//   }
//   else if (compare1 == compare2){
//     userWin +=3;
//     return alert("you win")
//   }
//
//   }
