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

function suitGenerator(){
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
  randomSet = Math.round(Math.random() * (4 - 1) + 1);
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

var handOne = randomCard();
var handTwo = randomCard();
var cardHit = randomCard();
var totalHand = handOne + handTwo;

function aceGrab(){
  if (handOne === 11 && totalHand > 21) {
    handOne = 1;
  } else if (handTwo === 11 && totalHand > 21){
    handTwo = 1;
  }
}

function winLose() {
  if (totalHand > 21){
    alert("You lose");
  } else if (totalHand == 21){
    alert("You win");
  }
}

dealerHit = randomCard();
dealerTotal = dealerHit;


function dealerWinLose(){
  if(dealerTotal > totalHand && dealerTotal <= 21)  {
    alert("You lost");
  } else if (dealerTotal === 21){
    alert("You lost");
  } else if (dealerTotal > 21) {
    alert("You won");
  } else {
    alert("You tied");
  }
}

function resetVars(){
  handOne = randomCard();
  handTwo = randomCard();
  totalHand = handOne + handTwo;
  dealerHit = randomCard();
  cardHit = randomCard();
}

/*=====================JQUERY====================*/

$(document).ready(function(){
  $("#start").click(function(){
    var playerAge = $("#player1age").val();
    var playerOne = $("#player1name").val();
    if (playerAge.length === 0 || playerOne.length === 0){
      alert("Please enter all of your player information");
    }
    else if (playerAge < 21){
      alert("Sorry, you can't play");
      $("#start").attr("disabled", true);
    } else {
      $(".introduction").hide();
      $(".game").show();
      var newPlayer = new Player(playerOne, 0, 500);
      var dealer = new Player(dealer, 0, 5000);
      var ace = aceGrab();
      $("#playerNameSpan").text(newPlayer.name);
      $("#remainingChipsSpan").text(newPlayer.chips);
      $("#dealerHand").text(dealerTotal + suitGenerator());
      $("#curHand").text(handOne + suitGenerator() + " " + handTwo + suitGenerator());
      $("#totalHand").text(totalHand);
      if (totalHand === 21){
        alert("You win!");
      }
    }
  });

  $("#randomCardBtn").click(function(){

    if (totalHand < 21 && cardHit === 11){
      if ((cardHit + totalHand) > 21){
        cardHit = 1;
        $("#curHand").append(" " + cardHit + suitGenerator());
        totalHand = totalHand + cardHit;
        cardHit = randomCard();
      } else {
        cardHit = 11;
        $("#curHand").append(" " + cardHit + suitGenerator());
        totalHand = totalHand + cardHit;
        cardHit = randomCard();
      }
    } else if (totalHand < 21 && cardHit !== 1){
      totalHand = totalHand + cardHit;
      $("#curHand").append(" " + cardHit + suitGenerator());
      cardHit = randomCard();
    }

    $("#totalHand").text(totalHand);

    if (totalHand > 21){
      alert("You lose");
      $('#randomCardBtn, #holdBtn').hide();
      $('#startOver').show();
    } else if (totalHand == 21){
      alert("You win");
      $('#randomCardBtn, #holdBtn').hide();
      $('#startOver').show();
    }

  });

  $("#holdBtn").click(function(){
    dealerTotal = dealerHit;
    $('#randomCardBtn, #holdBtn').hide();
    $('#startOver').show();
    $("#showDealer").show();

    while (dealerTotal < totalHand){
      $("#dealerHand").append(" " + dealerHit + suitGenerator());
      dealerTotal = dealerTotal + dealerHit;
      dealerHit = randomCard();
    }

    $("#dealerFinal").text(dealerTotal);

    if(dealerTotal > totalHand && dealerTotal <= 21)  {
      alert("You lost");

    } else if (dealerTotal === 21){
      alert("You lost");
    } else if (dealerTotal > 21) {
      alert("You won");
    } else {
      alert("You tied");
    }
  });
  $("#startOver").click(function(){
    var reset = resetVars();
    $("#showDealer").hide();
    $("#startOver").hide();
    $("#randomCardBtn, #holdBtn").show();
    $("#totalHand, #curHand, #dealerHand, #dealerFinal").empty();
    $("#dealerHand").text(dealerHit + suitGenerator());
    $("#curHand").text(handOne + suitGenerator() + " " + handTwo + suitGenerator());
    $("#totalHand").text(totalHand);

  });
});
