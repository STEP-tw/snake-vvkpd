let snake=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;

let animator=undefined;

const isNotTouchedGrid = function(head){
  return head.x >= 0 && head.x <= numberOfCols && head.y >= 0 && head.y <= numberOfRows;
}

const isSnakeEatingItself = function(snake,head){
  return snake.getBody().some(function(positionOfBody){
    return head.isSameCoordDifferDirectionAs(positionOfBody);
  });
}

const animateSnake=function() {
  let oldHead=snake.getHead();
  let oldTail=snake.move();
  let head=snake.getHead();
  if (isNotTouchedGrid(head)) {
    paintBody(oldHead);
    unpaintSnake(oldTail);
    paintHead(head);
    if (isSnakeEatingItself(snake,head)) {
      stopGame();
    }
    if(head.isSameCoordAs(food)) {
      snake.grow();
      createFood(numberOfRows,numberOfCols);
      drawFood(food);
    }
  } else {
    stopGame();
  }
}

const stopGame = function(){
  clearInterval(animator);
  document.getElementById("hidden_tail").style="visibility:visible";
  playAgain.focus();
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const startGame=function() {
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows,numberOfCols);
  drawFood(food);
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
