describe('Player', function() {
  it('defines the name and score for each player', function() {
    var testPlayer = new Player("Test Pilot", 0, 500);
    expect(testPlayer.name).to.equal("Test Pilot");
    expect(testPlayer.score).to.equal(0);
    expect(testPlayer.chips).to.equal(500);
  });
  // it("concatenates player's randomly generated numbers for a total score", function() {
  //   var testPlayer = new Player("Test Pilot", 21, 500);
  //   expect(testPlayer.totalScore()).to.be.a('number');
  // });
  
  
  // it("takes away chips bet from bank", function() {
  //   var testPlayer = new Player("Test Pilot", 21, 300);
  //   expect(testPlayer.totalScore()).to.equal(200);
  // });
});
