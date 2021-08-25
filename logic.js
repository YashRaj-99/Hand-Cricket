var toss=document.getElementById('toss');
var tosswin=document.getElementById('tossWin');
var tosslose=document.getElementById('tossLose');
var twclose=document.getElementById('twClose');
var tlclose=document.getElementById('tlClose');
var tosslosemsg=document.getElementById('msg')
var startbtn=document.getElementById('start');
var userChoose=document.getElementsByName('choose');
var userChoice,tossRes,overs,batting;
// var fixover=document.getElementById('fixOver');
twclose.addEventListener("click",()=>{
    tosswin.style.visibility="hidden";
})
tlclose.addEventListener("click",()=>{
    tosslose.style.visibility="hidden";
    console.log("Closed");
})
toss.addEventListener('click',()=>
{
    overs=document.getElementById('overSel').value;
    localStorage.setItem('Overs',overs);
    tossRes= Math.floor(2*Math.random());
    console.log(overs+"..."+tossRes);
    if(tossRes==1)
    {
        tosswin.style.visibility="visible";
        toss.disabled=true;
        startbtn.disabled=false;
        startbtn.style.visibility="visible";
        
    }
    else
    {
        var compChoice=Math.floor(2*Math.random());
        compChoice= (compChoice==1)? "Bat":"Bowl";
        tosslosemsg.innerHTML="<br>Computer Won the Toss! <br> It chose to " + compChoice;
        tosslose.style.visibility="visible";
        startbtn.disabled=false;
        startbtn.style.visibility="visible";
        if(compChoice=="Bat")
        batting="Computer";
        else
        batting="User";
        localStorage.setItem("batting",batting);
        
    }
    
}
)
startbtn.addEventListener('click',()=>{location.replace("game.html");} );
function getUserChoice()
{
    for(i=0;i<userChoose.length;i++)
    if(userChoose[i].checked)
    userChoice=userChoose[i].value;
    console.log(userChoice);
    if(userChoice=="Bat")
    batting="User";
    else
    batting="Computer";
    localStorage.setItem("batting",batting);
    
}
localStorage.setItem("UserScore",0);
localStorage.setItem("CompScore",0);
localStorage.setItem("target",-1);

