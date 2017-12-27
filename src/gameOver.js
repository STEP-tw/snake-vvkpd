const stopGame = function(){
  clearInterval(animator);
  document.getElementById("hidden_tail").style="visibility:visible";
  playAgain.focus();
}

const gameOverChecking = function(){
  if (snake.isSnakeEatingItself()) {
    stopGame();
  }
}
