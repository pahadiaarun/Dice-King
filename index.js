
var name1 = prompt("Enter Player 1 Name")
var name2 = prompt("Enter Player 2 Name")

if(name1.length){
    var player1 = document.querySelectorAll("p")[0];
    player1.innerHTML = name1;
}

if(name2.length){
    var player2 = document.querySelectorAll("p")[1];
    player2.innerHTML = name2;
}

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomimage1 = "images/dice" + randomNumber1 + ".png";
var randomimage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(randomNumber1>randomNumber2){
    if(name1.length){
        document.querySelector("h1").innerHTML = "🚩 " + name1 + " is Winner";
    }
    else{
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    }
}
else if(randomNumber1<randomNumber2){
    if(name2.length){
        document.querySelector("h1").innerHTML = name2 + " is Winner 🚩" ;
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}
