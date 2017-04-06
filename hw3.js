//Elizaveta Sokolova 
var matrix = []; 
var displayMatrix = [];

var continuePlaying = true;

var px = 0;
var py = 0;

var butUp = document.createElement("Button");
var butDown = document.createElement("Button");
var butRight = document.createElement("Button");
var butLeft = document.createElement("Button");

var player = {
    name: "Genius",
    points: 20,
    x: 0,
    y: 0,
    prizes: []
};

function gameInfo(){
    var status = "You have: "+ player.points + " hit points and " + player.prizes.length + " prize(s). Your location is (" + player.x + ","+ player.y + ")";
	document.getElementById("head").innerHTML = status;
	
}

var question1 ={
    name: "Math question",
    run: function() {
         var answerInput = prompt("What is 2+2*2-2/2+2+2*2 equal to?");
         var answerCorrect = "11";
         
           if(answerInput == answerCorrect) {
              player.points += 3;
              confirm("The answer is correct! You got 3 points");
           }
           else { 
              player.points -= 3;
              confirm("The answer is incorrect! You lost 3 points");
           } 
         this.name = "used";   
    } 
};
var question2 ={
    name: "Astronomy question",
    run: function() {
         var answerInput = prompt("What has a bigger mass: Earth or Mars?");
         var answerCorrect = "Earth";
         
           if(answerInput == answerCorrect) {
              player.points += 3;
              confirm("The answer is correct! You got 3 points");
           }
           else { 
              player.points -= 3;
              confirm("The answer is incorrect! You lost 3 points");    
           } 
           this.name = "used";   
    }
};
var question3 = {
    name: "Chemistry question",
    run: function() {
         var answerInput = prompt("What is a chemical element with chemical symbol H and atomic number 1?");
         var answerCorrect = "Hydrogen";
         
           if(answerInput == answerCorrect) {
              player.points += 3;
              confirm("The answer is correct! You got 3 points");
           }
           else { 
              player.points -= 3;
              confirm("The answer is incorrect! You lost 3 points");    
           } 
         this.name = "used";   
    }   
};
var monster1 = {
    name: "Cyclops",
    prizeName: "Diamond",
	pointsM: 10,
    run: function() {
		confirm("You faced Cyclops. If you are lucky you will find Diamond. If you are not, you will lose 5 points");
		player.prizes.push("Diamond");
		confirm("Congratulations! You found Diamond needed to enter the heaven");
		this.name = "used";
	}
    
};
var monster2 = {
    name: "Goblin",
    prizeName: "Platinum",
	pointsM: 15,
    run: function() {
		confirm("You faced Goblin. If you are lucky you will find Platinum. If you are not, you will lose 5 points");
		player.points -= 5;
		confirm("You are not lucky! You lost 5 points");
		this.name = "used";
	}
};
var monster3 = {
    name: "Cludusios",
    prizeName: "Golden Key",
	pointsM: 13,
    run: function() {
		confirm("You faced Cludusios. If you are lucky you will find Golden Key. If you are not, you will lose 5 points");
		player.points -= 5;
		confirm("You are not lucky! You lost 5 points");
		this.name = "used";
	}
};
var monster4 ={
    name: "Austrarius",
    prizeName: "Silver",
	pointsM: 11,
    run: function() {
		confirm("You faced Austrarius. If you are lucky you will find Silver. If you are not, you will lose 5 points");
		player.prizes.push("Silver");
		confirm("Congratulations! You found Silver needed to enter the heaven");
		this.name = "used";
	}
};
var monster5 ={
    name: "Centaur",
    prizeName: "Titanium",
	pointsM: 9,
    run: function() {
		confirm("You faced Centaur. If you are lucky you will find Titanium. If you are not, you will lose 5 points");
		player.prizes.push("Titanium");
		confirm("Congratulations! You found Titanium needed to enter the heaven");
		this.name = "used";
	}
};

var prize = {
	name: "Gold",
	run: function(){
		confirm("Genius, you have found GOLD that you need to enter the heaven.");
		player.prizes.push("Gold");
		this.name = "used";
	}
};
var end = {
	name: "Heaven",
	run: function(){
		if(player.prizes.length >= 2){
			confirm("CONGRATULATIONS! YOU HAVE WON! YOU ARE GENIUS!");
			continuePlaying = false;
		}
		else{
			confirm("Sorry, you cannot enter the Heaven without 2 GOLDS! Good luck looking for it!");
		}
	}
};
var wall = {
	name: "Wall",
	run:
	function() {
		confirm("There is a wall blocking your path, you must go around.");
		var s = "" + player.x + "" + player.y + "";
	    document.getElementById(s).innerHTML = "W";
		player.x = px;
		player.y = py;
		
	    locationSaved();
	}
}
function functionToEnd() {
    var foundX = false;
    var foundEnd = false;
    
    while (!foundEnd) {
        var x = Math.floor(Math.random() * 8);
        var y = Math.floor(Math.random() * 8);
        if (matrix[x][y].name == "used") {
            matrix[x][y] = end;
        }
        foundEnd = true;
    }
    
    while(!foundX) {
        var x = Math.floor(Math.random() * 8);
        var y = Math.floor(Math.random() * 8);
        if(matrix[x][y].name == "used") {
            player.x = x;
            player.y = y;
        }
        foundX = true;
    }
	locationSaved();
	
}

function inMatrix(x,y){
	if( x >= 0 && x <= 7 && y >= 0 && y <= 7){
		return true;
	}
	return false;
}

var used = {
	name: "used",
	run: function() {
	}
}

function locationSaved() {
	var s = "" + player.x + "" + player.y + "";
	document.getElementById(s).innerHTML = "O";
}

function deleteLocation() {
	var s = "" + player.x + ""+player.y + "";
	document.getElementById(s).innerHTML = "";
}

function stillAlive() {
	if(player.health <= 0) {
		confirm("You lost all your points! Sorry, you die now.");
		window.close();
	}
}

function fucntionButtons() {
	
	var up = document.createTextNode("Up");
	var down = document.createTextNode("Down");
	var right = document.createTextNode("Right");
	var left = document.createTextNode("Left");

	butUp.appendChild(up);
	butDown.appendChild(down);
	butRight.appendChild(right);
	butLeft.appendChild(left);
	
	document.body.appendChild(butUp);
	document.body.appendChild(butRight);
	document.body.appendChild(butLeft);
	document.body.appendChild(butDown);

	butUp.id = "butUp";
	butDown.id = "butDown";
	butRight.id = "butRight";
	butLeft.id = "butLeft";

	//listeners for buttons
	document.getElementById("butUp").addEventListener("click", function() {
		goingUp();
	});
	document.getElementById("butDown").addEventListener("click", function(){
		goingDown();
	});
	document.getElementById("butRight").addEventListener("click", function(){
		goingRight();
	});
	document.getElementById("butLeft").addEventListener("click", function(){
		goingLeft();
	});
} 
function init() {
	InitMatrix();
	setMatrix();
	fucntionButtons();
	gameInfo();
}
function InitMatrix() {
	 
	 for(var i = 0; i < 8; i++) {
	    matrix[i] = [];
	    displayMatrix[i] = [];
	}
}

function setMatrix() {

	for(var x = 0; x < 8; x++) {
		for(var y = 0; y < 8; y++) {
		    matrix[x][y] = used;
		    displayMatrix[x][y] = false;
		}
	}
   functionToEnd();
   matrix[0][4] = wall;
   matrix[1][2] = wall;
   matrix[7][2] = wall;
   matrix[1][1] = question1;
   matrix[5][5] = question2;
   matrix[3][1] = monster1;
   matrix[2][6] = monster2;
   matrix[1][3] = monster3;
   matrix[7][5] = monster4;
   matrix[1][6] = monster5;
   matrix[4][5] = prize;
   matrix[5][4] = prize;
}

function goingRight(){
	if(inMatrix(player.x + 1, player.y)) 
	{
		deleteLocation();
		setYandX();
		player.x += 1;
		locationSaved();
		gameInfo();
		face();
		gameInfo();
		stillAlive();
	}
}
function goingLeft(){
	if(inMatrix(player.x - 1, player.y)) {
		deleteLocation();
		setYandX();
		player.x -= 1;
		locationSaved();
		gameInfo();
		face();
		gameInfo();
		stillAlive();
	}
}

function goingUp(){
	if(inMatrix(player.x, player.y - 1)) {
		deleteLocation();
		setYandX();
		player.y -= 1;
		locationSaved();
		gameInfo();
		face();
		gameInfo();
		stillAlive();
	}	
}

function goingDown(){
	if(inMatrix(player.x, player.y + 1)){
		deleteLocation();
		setYandX();
		player.y += 1;
		locationSaved();
		gameInfo();
		face();
		gameInfo();
		stillAlive();
	}
}


function face(){
	var n = matrix[player.x][player.y];
	if(n.name != "used") {
	    if(confirm("You are about to face "+ n.name)) {
		n.run();
	    }
	    else {
		  var s = ""+player.x+""+player.y+"";
	      document.getElementById(s).innerHTML = "A";
		  player.x = px;
		  player.y = py;
	      locationSaved();
	   }
	}
}
function setYandX(){
	px = player.x;
	py = player.y;
}

init();