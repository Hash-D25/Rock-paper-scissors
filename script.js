let scores=JSON.parse(localStorage.getItem('scores'));

function moves(){
    document.querySelector('.moves').innerText=`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;
}
function yourmove(){
    document.querySelector('.youresult').innerHTML=`${playerMove}`;
}
function computermove(){
    document.querySelector('.computerresult').innerHTML=`${computerMove}`;
}

if (!scores) {
    scores = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    };
}
function updatescoreline(){
    document.querySelector('.scoreline').innerText=`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;
}
updatescoreline();

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
let isautoplaying=false;
let intervalid;
const autoplaybtn=document.querySelector('.Autoplay');
function stopautoplay(){
    if(autoplaybtn.innerText==='Autoplay'){
        autoplaybtn.innerText='Stop Autoplay';
        autoplaybtn.classList.add('Stopautoplay')
    }
    else{
        autoplaybtn.innerText='Autoplay';
        autoplaybtn.classList.remove('Stopautoplay');
    }
}
function Autoplay(){
    if(!isautoplaying){
        intervalid=setInterval(()=>{                     // arrow function same as function(){}
            const playermove=pickComputerMove();
            playgame(playermove);
            isautoplaying=true;
        },1000);
    }
    else{
        clearInterval(intervalid);
        isautoplaying=false;
    }
}
// adding keydown addEventListener

    document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
            playgame('rock');
        }
        else if(event.key==='p'){
            playgame('paper');
        }
        else if(event.key==='s'){
            playgame('scissors');
        }
    });
