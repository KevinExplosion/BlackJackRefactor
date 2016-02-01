function Player(name, score, chips) {
  this.name = name;
  this.score = score;
  this.chips = chips;
}

// Player.prototype.curCard = function() {



// }

function randomCardSet(){
  var randomSet = Math.round(Math.random() * (4 - 1) + 1);

  if(randomSet === 1){
    return "Hearts";
  } else if(randomSet === 2){
    return "Spades";
  } else if(randomSet === 3){
    return "Diamonds";
  } else {
    return "Clubs";
  }
}

function randomCard() {
  var randomNum = Math.round(Math.random() * (11 - 2) + 2);
  if(randomNum === 2){
    return 2 + randomCardSet();
  } else if(randomNum === 3){
    return 3 + randomCardSet();
  } else if(randomNum === 4) {
    return 4 + randomCardSet();
  } else if(randomNum === 5) {
    return 5 + randomCardSet();
  } else if(randomNum === 6) {
    return 6 + randomCardSet();
  } else if(randomNum === 7) {
    return 7 + randomCardSet();
  } else if(randomNum === 8) {
    return 8 + randomCardSet();
  } else if(randomNum === 9) {
    return 9 + randomCardSet();
  } else if(randomNum === 10) {
    return 10 + randomCardSet();
  } else{
    return 11 + randomCardSet();
  }
}



/*=====================JQUERY====================*/


$(document).ready(function(){
  $("#start").click(function(){
    $(".introduction").hide();
    $(".game").show("slide");
    var playerOne = $("#player1name").val();
    var newPlayer = new Player(playerOne, 0, 500);



    $("#playerNameSpan").text(newPlayer.name);
    $("#remainingChipsSpan").text(newPlayer.chips);
    $("#randomCardBtn").click(function(){
      $("#randomCard").text(randomCard());
    });
  });
});
