//tic tac toe.

let thePlayers = ['X'];
let won = false;

function player(board) {
    
    if (board.innerText != 'play here' || won) {
         return;
    }

    board.innerText = thePlayers;
    board.innerText ==='X' ? thePlayers = 'O' : thePlayers = 'X';

    p = document.querySelector('p');

    board.innerText === 'X' ? p.textContent = 'Player is X' : p.textContent = 'Player is O';

     boardSquares();
};

function boardSquares() {
     
     one = document.getElementById(1).innerText;
     two = document.getElementById(2).innerText;
     three = document.getElementById(3).innerText;
     four = document.getElementById(4).innerText;
     five = document.getElementById(5).innerText;
     six = document.getElementById(6).innerText;
     seven = document.getElementById(7).innerText;
     eight = document.getElementById(8).innerText;
     nine = document.getElementById(9).innerText;

     // winning rows
     winningLine(one, two, three);
     winningLine(four, five, six);
     winningLine(seven, eight, nine);

     //winning colums
     winningLine(one, four, seven);
     winningLine(two, five, eight);
     winningLine(three, six, nine);

     //winning cross
     winningLine(one, five, nine);
     winningLine(three, five, seven);

}

function winningLine(firstMatch, secondMatch, thirdMatch) {

     
     let str = 'play here';

     if(firstMatch != str && firstMatch === secondMatch && secondMatch === thirdMatch) {
          alert('WINNER!!! :) The game will restart in 3 seconds.');
         won = true;
          
          if (firstMatch === one && secondMatch === two && thirdMatch === three) {
               document.getElementById(1).style.backgroundColor = 'yellow';
               document.getElementById(2).style.backgroundColor = 'yellow';
               document.getElementById(3).style.backgroundColor = 'yellow';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else if (firstMatch === four && secondMatch === five && thirdMatch === six) {
               document.getElementById(4).style.backgroundColor = 'yellow';
               document.getElementById(5).style.backgroundColor = 'yellow';
               document.getElementById(6).style.backgroundColor = 'yellow'; 
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else if (firstMatch === seven && secondMatch === eight && thirdMatch === nine) {
               document.getElementById(7).style.backgroundColor = 'yellow';
               document.getElementById(8).style.backgroundColor = 'yellow';
               document.getElementById(9).style.backgroundColor = 'yellow';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else if (firstMatch === one && secondMatch === four && thirdMatch === seven) {
               document.getElementById(1).style.backgroundColor = 'red';
               document.getElementById(4).style.backgroundColor = 'red';
               document.getElementById(7).style.backgroundColor = 'red';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else if (firstMatch === two && secondMatch === five && thirdMatch === eight) {
               document.getElementById(2).style.backgroundColor = 'red';
               document.getElementById(5).style.backgroundColor = 'red';
               document.getElementById(8).style.backgroundColor = 'red';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!'; 
          } else if (firstMatch === three && secondMatch === six && thirdMatch === nine) {
               document.getElementById(3).style.backgroundColor = 'red';
               document.getElementById(6).style.backgroundColor = 'red';
               document.getElementById(9).style.backgroundColor = 'red';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else if (firstMatch === one && secondMatch === five && thirdMatch === nine) {
               document.getElementById(1).style.backgroundColor = 'blue';
               document.getElementById(5).style.backgroundColor = 'blue';
               document.getElementById(9).style.backgroundColor = 'blue';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else if (firstMatch === three && secondMatch === five && thirdMatch === seven) {
               document.getElementById(3).style.backgroundColor = 'blue';
               document.getElementById(5).style.backgroundColor = 'blue';
               document.getElementById(7).style.backgroundColor = 'blue';
               p = document.querySelector('p');
               p.textContent = 'WINNER!!!';
          } else {
               firstMatch === str && secondMatch === str && thirdMatch === str;
               return;
          }

          if (won == true) {
               setTimeout(() => window.location.reload(), 3000);
               }
     }
     
 
};
