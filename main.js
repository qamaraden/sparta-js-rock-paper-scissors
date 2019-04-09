
 var choice = prompt("Do you choose rock, paper or scissors?");
 var computerChoice = Math.random();
 if (computerChoice <= 0.33) {
   computerChoice = "rock";}
   else if (computerChoice <= 0.66) {
  computerChoice = "paper";
  }else{
    computerChoice = "scissors";
  }
  var userWin = 0;
  var computerWin = 0;

  var compare1 = function(choice,computerChoice){
    if(choice === computerChoice){
      return alert("The result is a tie!");
    }
    if(choice === "rock"){
      if(computerChoice === "scissors"){
        return alert("rock wins");
      }
      else{
        return alert("paper wins");
      }
    }
    if(choice === "paper"){
      if(computerChoice === "rock"){
        return alert("rock wins");
      }
      else{
        return alert("scissors wins")
      }
    }
  };
compare1(choice, computerChoice);

var choice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
  computerChoice = "rock";}
  else if (computerChoice <= 0.66) {
 computerChoice = "paper";
 }else{
   computerChoice = "scissors";
 }
 var compare2 = function(choice,computerChoice){
   if(choice === computerChoice){
     return alert("The result is a tie!");
   }
   if(choice === "rock"){
     if(computerChoice === "scissors"){
       return alert("rock wins");
     }
     else{
       return alert("paper wins");
     }
   }
   if(choice === "paper"){
     if(computerChoice === "rock"){
       return alert("rock wins");
     }
     else{
       return alert("scissors wins")
     }
   }
 };
compare2(choice, computerChoice);

var choice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
  computerChoice = "rock";}
  else if (computerChoice <= 0.66) {
 computerChoice = "paper";
 }else{
   computerChoice = "scissors";
 }
 var compare3 = function(choice,computerChoice){
   if(choice === computerChoice){
     return alert("The result is a tie!");
   }
   if(choice === "rock"){
     if(computerChoice === "scissors"){
       return alert("rock wins");
     }
     else{
       return alert("paper wins");
     }
   }
   if(choice === "paper"){
     if(computerChoice === "rock"){
       return alert("rock wins");
     }
     else{
       return alert("scissors wins")
     }
   }
 };
compare3(choice, computerChoice);

var choice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
  computerChoice = "rock";}
  else if (computerChoice <= 0.66) {
 computerChoice = "paper";
 }else{
   computerChoice = "scissors";
 }
 var compare4 = function(choice,computerChoice){
   if(choice === computerChoice){
     return alert("The result is a tie!");
   }
   if(choice === "rock"){
     if(computerChoice === "scissors"){
       return alert("rock wins");
     }
     else{
       return alert("paper wins");
     }
   }
   if(choice === "paper"){
     if(computerChoice === "rock"){
       return alert("rock wins");
     }
     else{
       return alert("scissors wins")
     }
   }
 };
compare4(choice, computerChoice);

var choice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
  computerChoice = "rock";}
  else if (computerChoice <= 0.66) {
 computerChoice = "paper";
 }else{
   computerChoice = "scissors";
 }
 var compare5 = function(choice,computerChoice){
   if(choice === computerChoice){
     return alert("The result is a tie!");
   }
   if(choice === "rock"){
     if(computerChoice === "scissors"){
       return alert("rock wins");
     }
     else{
       return alert("paper wins");
     }
   }
   if(choice === "paper"){
     if(computerChoice === "rock"){
       return alert("rock wins");
     }
     else{
       return alert("scissors wins")
     }
   }
 };
compare5(choice, computerChoice);

const playGame = () => {
  let choice = computerChoice("scissors");
  const computerChoice = getComputerchoice();
  alert('you threw: '+ choice)
  alert('the computer threw; '+ computerChoice);
  alert(determineWinner(choice,computerChoice));
}


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
