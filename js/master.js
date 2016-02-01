function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.totalScore = function() {
  var playerScore = 0
  while (playerScore < 21){
    this.score = playerScore += Math.round(Math.random() * (11 - 2) + 2);
  }
  return this.score;
}
