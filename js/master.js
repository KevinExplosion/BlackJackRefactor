function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.totalScore = function() {
  while (this.score < 21){
    this.score = this.score += Math.round(Math.random() * (11 - 2) + 2);
  }
  return this.score;
}
