//Game Logic Starts Here
var score=0,oversCount=0,ballsCount=0;
var scoredisp=document.getElementById("score");
var ov=document.getElementById('ov');
var ball=document.getElementById("ball");
var run=document.getElementsByClassName('run');
var userimg=document.getElementById('user');
var computerimg=document.getElementById('computer');
var res=document.getElementById("res");
var battingStatus=document.getElementById('batting');
var firstHalf=document.getElementById('firstHalfmsg');
var userwin=document.getElementById('userWinner');
var compwin=document.getElementById('compWinner');
var fhclose=document.getElementById('fhcls');
var usrwinclose=document.getElementById('usrwincls');
var compwinclose=document.getElementById('compwincls');
var fhmsg=document.getElementById('fhmsg');
var usrwinmsg=document.getElementById('usrwinmsg');
var compwinmsg=document.getElementById('compwinmsg');
var user,computer,target=Number(localStorage.getItem('target')),userScore=Number(localStorage.getItem('UserScore')),ComputerScore=Number(localStorage.getItem('CompScore'));
//Batting Status
battingStatus.innerHTML=localStorage.getItem('batting')+" Batting";
document.getElementById('player1Score').innerHTML=(localStorage.getItem('target')=="-1")? "&nbsp;-":localStorage.getItem('target');
console.log("User Score: "+userScore+"\nComputer Score is : "+ComputerScore+"\nTarget is: "+ target);
var imgs=['images/one.jpg','images/two.jpg','images/three.jpg','images/four.jpg','images/five.jpg','images/six.jpg'];
for(let i=0;i<run.length;i++)
{
    run[i].addEventListener('click',()=>{
     user=run[i].innerHTML;
     user=user[6];
     console.log(user);
     user=Number(user);
     computer=Math.floor(6*Math.random());
     userimg.src= imgs[user-1];
     computerimg.src=imgs[computer];
     if(user==(computer+1))
     {
        res.innerHTML="OUT";
        if(target==-1)
        end();
        else
        gameOver();

    }
     else
     {
         if(localStorage.getItem('batting')=="User")
         {score+=Number(user);
            res.innerHTML=user;
         }
         else
         {score+=computer+1;
          res.innerHTML=computer+1;
        }
        // if(localStorage.getItem('batting')=="User")
        // userScore+=score;
        // else
        // ComputerScore+=score;
        scoredisp.innerHTML="Score: "+score;
        ballsCount++;
        if(ballsCount==6)
        {
            ballsCount=0;
            oversCount++;
            ov.innerHTML="Overs: "+oversCount;
            if(oversCount==Number(localStorage.getItem('Overs')))
            {
                target==-1? end():gameOver();
            }
        }
        // console.log(localStorage.getItem('Overs')+2);
        ball.innerHTML="Balls: "+ballsCount;
        if(target!=-1&&score>target)
        gameOver();
     }
    })
}
function end()
{
    if(localStorage.getItem('batting')=="User")
    {
        userScore=score;
        localStorage.setItem('target',userScore);
        localStorage.setItem('batting',"Computer");  
        localStorage.setItem('UserScore',userScore);
    }
    else
    {
        ComputerScore=score;
        localStorage.setItem('target',ComputerScore);
        localStorage.getItem('batting',"User");
        localStorage.setItem('CompScore',ComputerScore);
    }
    score=0;
    ballsCount=0;
    oversCount=0;
    fhmsg.innerHTML="1st Half Finished \nWait for 5 seconds to Start the Second Half";
    firstHalf.style.visibility="visible";
    setTimeout(function(){location.reload();},5000);
    
}
fhclose.addEventListener('click',()=>{
    firstHalf.style.visibility="hidden";
})
usrwinclose.addEventListener('click',()=>{
    userwin.style.visibility="hidden";
})
compwinclose.addEventListener("click",()=>{
    compwinclose.style.visibility="hidden";
})
function gameOver()
{
    localStorage.setItem('UserScore',userScore);
    localStorage.setItem('CompScore',ComputerScore);
    if(score>target)
   { if(localStorage.getItem("batting")=="User")
      { usrwinmsg.innerHTML="User is the Winner!!!<br>Score of User: "+score+"<br>Target by Computer was: "+target+"<br>Wait for 5 seconds to Start New Game";
       userwin.style.visibility="visible";}
       else
       {
           compwinmsg.innerHTML="Computer is the Winner!!!<br>Score of Computer: "+score+"<br>Target by User was: "+target+"<br>Wait for 5 seconds to Start New Game";
           compwin.style.visibility="visible";
       }
  
    }
    else 
    {
        if(localStorage.getItem("batting")=="Computer")
      { usrwinmsg.innerHTML="User is the Winner!!!<br>Score of User: "+score+"<br>Target by Computer was: "+target+"<br>Wait for 5 seconds to Start New Game";
       userwin.style.visibility="visible";}
       else
       {
           compwinmsg.innerHTML="Computer is the Winner!!!<br>Score of Computer: "+score+"<br>Target by User was: "+target+"<br>Wait for 5 seconds to Start New Game";
           compwin.style.visibility="visible";
       }
    }
    setTimeout( function(){location.replace("index.html");},5000);
    

}