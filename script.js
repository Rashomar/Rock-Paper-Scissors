(function(){
    document.querySelector("#btn").addEventListener("click", function(event){
    var comCh=document.getElementById("computerChoice");
    var userChoice = document.getElementById('yourChoice').value.toUpperCase();
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "ROCK";
    } else if(computerChoice <= 0.67) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    } 
    var res = document.getElementById("result");
    computerChoice.toUpperCase();
    userChoice.toUpperCase();
    console.log("Computer: " + computerChoice);
    console.log("User: " + userChoice);
    var compare = function(choice1,choice2){
        
        if(choice1===choice2){
            res.innerHTML="The result is a tie!";
            comCh.value = computerChoice.toLowerCase();
        }
        
        else if(choice1 === "ROCK"){
            if(choice2 === "SCISSORS"){
                res.innerHTML="Rock wins!";
            }
            else{
                res.innerHTML="Paper wins!";
            }
            comCh.value = computerChoice.toLowerCase();
        }
        
        else if(choice1 === "PAPER"){
            if(choice2 === "ROCK"){
                res.innerHTML="Paper wins!";
            }
            else{
                res.innerHTML="Scissors Wins!";
            }
            comCh.value = computerChoice.toLowerCase();
        }
        
        else if(choice1 === "SCISSORS"){
            if(choice2 === "ROCK"){
                res.innerHTML="Rock wins!";
            }
            else{
                res.innerHTML="Scissors Wins!";
            }
            comCh.value = computerChoice.toLowerCase();
        }
        
        else{
            res.innerHTML="Write a proper name!";
            comCh.value = "";
        }
       
    };

    compare(userChoice,computerChoice); 
    event.preventDefault();
    }, false);
})();