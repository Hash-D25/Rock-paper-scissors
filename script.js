let scores=JSON.parse(localStorage.getItem('scores'));
function score(){
    alert(`Scores:::wins:${scores.Wins} loses:${scores.Loses} ties:${scores.Ties}`);
}
if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
function reset(){
    scores.Wins=0;
    scores.Loses=0;
    scores.Ties=0;
    alert(`Scores reset:::wins:${scores.Wins} loses:${scores.Loses} ties:${scores.Ties}`);
}
function playgame(playerMove){
    let computerMove=pickComputerMove();
    let result='';
    if(playerMove==='rock'){
        if(computerMove==='rock'){
            result='Tie';
        }
        else if(computerMove==='paper'){
            result='You lose';
        }
        else if(computerMove==='scissors'){
            result==='You won';
        }
    }
    else if(playerMove==='paper'){
        if(computerMove==='rock'){
            result='You won';
        }
        else if(computerMove==='paper'){
            result='Tie';
        }
        else if(computerMove==='scissors'){
            result==='You lose';
        }
    }
    else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            result='You lose';
        }
        else if(computerMove==='paper'){
            result='You won';
        }
        else if(computerMove==='scissors'){
            result==='Tie';
        }
    }
    if(result==='You won'){scores.Wins+=1;}
    else if(result==='You lose'){scores.Loses+=1;}
    else if(result==='Tie'){scores.Ties+=1;}
    
    localStorage.setItem('scores',JSON.stringify(scores));
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        Wins: ${scores.Wins}, Losses: ${scores.Loses}, Ties: ${scores.Ties}`);
             
    
}
    





function pickComputerMove(){
    let computerMove='';
    const randomNumber=Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}