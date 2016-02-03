function Player(name, score, chips) {
  this.name = name;
  this.score = score;
  this.chips = chips;
}

function jqkCard(){
  var jqk = Math.round(Math.random()*(3-1)+ 1);
  if(jqk == 1){
    return "Jack";
  } else if(jqk == 2){
    return "Queen";
  } else {
    return "King";
  }
}

function randomCardSet(){
  var randomSet = Math.round(Math.random() * (4 - 1) + 1);

  if(randomSet === 1){
    return " of Hearts";
  } else if(randomSet === 2){
    return " of Spades";
  } else if(randomSet === 3){
    return " of Diamonds";
  } else {
    return " of Clubs";
  }
}

function randomCard() {
  var randomNum = Math.round(Math.random() * (11 - 2) + 2);
  if(randomNum === 2){
    return 2;
  } else if(randomNum === 3){
    return 3;
  } else if(randomNum === 4) {
    return 4;
  } else if(randomNum === 5) {
    return 5;
  } else if(randomNum === 6) {
    return 6;
  } else if(randomNum === 7) {
    return 7;
  } else if(randomNum === 8) {
    return 8;
  } else if(randomNum === 9) {
    return 9;
  } else if(randomNum === 10) {
    return 10;
  } else{
    return 11;
  }
}

// function startCard() {
  
// }

/*=====================JQUERY====================*/


$(document).ready(function(){ 
  var p1HandOne = randomCard();
  var p1HandTwo = randomCard();
  var totalHand = p1HandOne + p1HandTwo;
  var dealerHand = randomCard();
  var dealerTotal = dealerHand;
  $("#start").click(function(){
    $(".introduction").hide();
    $(".game").show();
    var playerOne = $("#player1name").val();
    var newPlayer = new Player(playerOne, 0, 500);
    var dealer = new Player(dealer, 0, 5000);
    $("#playerNameSpan").text(newPlayer.name);
    $("#remainingChipsSpan").text(newPlayer.chips);
   

    $("#dealerHand").text(dealerHand + randomCardSet());
    $("#curHand").text(p1HandOne + randomCardSet() + " " + p1HandTwo + randomCardSet());
    $("#totalHand").text(totalHand);

    
    $("#randomCardBtn").click(function(){

      var cardHit = randomCard();
      
      if (totalHand < 21  && cardHit === 11){
        if ((cardHit + totalHand) > 21){
          cardHit = 1;
          totalHand = totalHand + cardHit;
      $("#curHand").append(" " + cardHit + randomCardSet());      
      $("#totalHand").text(totalHand);
        }
      } else if (totalHand < 21){
      totalHand = totalHand + cardHit;
      $("#curHand").append(" " + cardHit + randomCardSet());      
      $("#totalHand").text(totalHand);
        
      } else {
        alert("you went above 21 you lose");
      }
      if (totalHand === 21){ 
        alert("You win the round");
        ($("#randomCardBtn, #holdBtn").hide());
        ($("#startOver").show());
      } else if(totalHand > 21){
        alert("You Lose...LOSER");
        ($("#randomCardBtn, #holdBtn").hide());
        ($("#startOver").show());
      } 
    });
    
    $("#holdBtn").click(function(){      
      $('#randomCardBtn, #holdBtn').hide();
      $('#startOver').show();
      $("#showDealer").show();
      while(dealerTotal < totalHand){
      var dealerHit = randomCard();        
        dealerTotal = dealerTotal + dealerHit;
        $("#dealerHand").append(" " + dealerHit + randomCardSet());
        $("#dealerFinal").text(dealerTotal);
      }
      if(dealerTotal > totalHand && dealerTotal <= 21)  {
        alert("You  lost");
      } else if (dealerTotal > 21) {
        alert("You won dude!");
      } else {
        alert("~YoU tIeD~");
      }
    });

  $("#startOver").click(function(){
  
      $("#startOver").hide();
      $("#randomCardBtn, #holdBtn").show();
      $("#totalHand, #curHand").empty();
    var p1HandOne = randomCard();
    var p1HandTwo = randomCard();
    var totalHand = p1HandOne + p1HandTwo;
    $("#curHand").text(p1HandOne + randomCardSet() + " " + p1HandTwo + randomCardSet());
     dealerHand = 0;
     dealerTotal = 0;
    });
  });
});