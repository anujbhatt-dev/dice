function randomDice() {var r=Math.floor((Math.random()*6)+1); return r;}
var ran1=randomDice();
var img = "dice"+ran1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",img);
var ran2=randomDice();
var img2 = "dice"+ran2+".png";
var img3 = document.querySelectorAll("img")[1];
img3.setAttribute("src",img2);

if(ran1===ran2){document.querySelector("h1").innerHTML="💥its a draw💥";}
else if(ran1>ran2){document.querySelector("h1").innerHTML="🦾 player 1 won";}
else{document.querySelector("h1").innerHTML="player 2 won 🦾";}
