let gameSeq=[];
let userSeq=[];

let highest=0;

let btns=["yellow","red","blue","green"];
let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){

    if(started==false)
    {
    
    started=true;
    }

    levelUp();
});


function  btnFlash(btn){

    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function levelUp()
{
    userSeq=[];
    level++;
   h2.innerText=`Level ${level}`;


//random button is selected
let randIndex=Math.floor(Math.random()*3);

let randColor=btns[randIndex];

let randBtn=document.querySelector(`.${randColor}`);
// console.log(randIndex);
// console.log(randColor);
// console.log(randBtn);

gameSeq.push(randColor);

console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(index)
{
    //console.log("curr level: ",level);

   

    
        if(userSeq[index]==gameSeq[index])
    {
        // console.log("same value");
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }

    else
    {
        let h3=document.createElement('h3');
        h2.innerHTML=`Game Over!Your score was <b>${level-1}</b><br>Press any key to start Again`; 
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },200);

        if(highest<level-1)
        {
            highest=level-1;

            console.log(highest);
            
             h3.innerHTML=`Congrats <b>${level-1}</b> is your highest score!`

             console.log(h3.innerText);
            
        }
        reset(h3);  
    }

}

function btnPress()
{
    let btn=this;
    console.log(this);

    
    btnFlash(this);
    userColor=btn.getAttribute("id");

    userSeq.push(userColor);

    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');

for(butns of allBtns)
{
    butns.addEventListener("click",btnPress);
}

function reset(h3)
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
  console.log("hey!");
    //h3.remove();

}