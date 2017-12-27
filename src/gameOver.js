const stopGame = function(){
  clearInterval(animator);
  document.getElementById("hidden_tail").style="visibility:visible";
  document.getElementById("playAgain").focus();
}

const isGameOver = function(numberOfCols,numberOfRows){
  return snake.isSnakeEatingItself() || snake.isSnakeTouchedTheWall(numberOfCols,numberOfRows);
}

const gameOverChecking = function(numberOfCols,numberOfRows){
  if (isGameOver(numberOfCols,numberOfRows))
    stopGame();
}
