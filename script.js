let scores=JSON.parse(localStorage.getItem('scores'));

function updatescoreline(){
    document.querySelector('.scoreline').innerText=`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;
}
function moves(){
    document.querySelector('.moves').innerText=`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;
}
function yourmove(){
    document.querySelector('.youresult').innerHTML=`${playerMove}`;
}
function computermove(){
    document.querySelector('.computerresult').innerHTML=`${computerMove}`;
}
updatescoreline();
function score(){
    updatescoreline();
    alert(`Scores:::wins:${scores.Wins} losses:${scores.Losses} ties:${scores.Ties}`);
}
if (!scores) {
    scores = {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };
  }
function reset(){
    scores.Wins=0;
    scores.Losses=0;
    scores.Ties=0;
    updatescoreline();
    alert(`Scores reset:::wins:${scores.Wins} losses:${scores.Losses} ties:${scores.Ties}`);
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
    else if(result==='You lose'){scores.Losses+=1;}
    else if(result==='Tie'){scores.Ties+=1;}
    
    localStorage.setItem('scores',JSON.stringify(scores));
    updatescoreline();
    document.querySelector('.result').innerHTML=result;
    document.querySelector('.yourmove').innerHTML=`${playerMove}`;
    document.querySelector('.computermove').innerHTML=`${computerMove}`;
    
    
    
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
