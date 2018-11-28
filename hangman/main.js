/**
 * Created by SIRAT on 19-08-2018.
 */

var charset=["messi","ronaldo","neymar","suarez","ibrahimovic","dembele","rooney","ramos","mbappe","griezmann","xavi"];
var randomStr;
var chances=6;
document.getElementById("lives").innerHTML= chances;
console.log(charset.length);
for(var i=0;i<charset.length;i++)
{
    randomStr=charset[Math.floor(Math.random()*charset.length)];
}
var randomArray=randomStr.split("");
var number=0;
var arrCheck=[];
var result;
console.log(randomStr);
function creation()
{
    var div= document.createElement("div");
    div.style.fontSize="2em";
    div.style.marginLeft="43%";
    document.body.appendChild(div);
    for(i=0;i<randomArray.length;i++)
    {
        var span = document.createElement("span");
        div.appendChild(span);
        span.innerHTML=" &#9632;";
        span.id=number;
        number++;
    }
    document.getElementById("placing").appendChild(div);
}
function strCheck()
{
    var count=0;
    var userGuess=document.getElementById("guess").value;
    for(i=0;i<randomArray.length;i++)
    {
        if(userGuess==randomArray[i])
        {
            document.getElementById(i).innerHTML=randomArray[i];
            count++;
            arrCheck[i]=randomArray[i];
        }
    }
    result= arrCheck.join("");
    if(result==randomStr)
    {
        document.getElementById("try").style.visibility='hidden';
        document.getElementById("result").innerHTML="YOU Won!!";
    }
    if(count<=0)
    {
        chances--;
        if(chances==5)
        {
            document.getElementById("hangman").src="img/2.png";
        }
        else if(chances==4)
        {
            document.getElementById("hangman").src="img/3.png";
        }
        else if(chances==3)
        {
            document.getElementById("hangman").src="img/4.png";
        }
        else if(chances==2)
        {
            document.getElementById("hangman").src="img/5.png";
        }
        else if(chances==1)
        {
            document.getElementById("hangman").src="img/6.png";
        }
        else if(chances==0)
        {
            document.getElementById("hangman").src="img/7.png";
        }
    }
    document.getElementById("lives").innerHTML=chances;
    if(chances==0)
    {
        document.getElementById("try").style.visibility='hidden';
        document.getElementById("result").innerHTML="YOU LOSE!!";
        for(i=0;i<randomArray.length;i++)
        {
            document.getElementById(i).innerHTML=randomArray[i];
        }
    }
}
