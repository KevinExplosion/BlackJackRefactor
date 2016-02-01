describe('Player', function() {
  it('defines the name and score for each player', function() {
    var testPlayer = new Player("Test Pilot", 0);
    expect(testPlayer.name).to.equal("Test Pilot");
    expect(testPlayer.score).to.equal(0);
  });
  it("concatenates player's randomly generated numbers for a total score", function() {
    var testPlayer = new Player("Test Pilot", 22);
    expect(testPlayer.totalScore()).to.be.a('number');
  });
});
