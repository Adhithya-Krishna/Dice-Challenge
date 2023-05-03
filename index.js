var randNumber1=Math.floor(Math.random()*6)+1;
var randNumber2=Math.floor(Math.random()*6)+1;
 
var image1="images/dice"+randNumber1+".png"
var image2="images/dice"+randNumber2+".png"

if(randNumber1>randNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins🚩";
}
else if(randNumber2>randNumber1)
{
    document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw !📍";
}

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
