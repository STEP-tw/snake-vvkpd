const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  isSnakeEatingItself: function() {
    let headPart = this.getHead();
    return this.body.some(function(positionOfBody){
      return headPart.isSameCoordAs(positionOfBody);
    });
  },
  isSnakeTouchedTheWall: function(numberOfCols,numberOfRows){
    let headPart = this.getHead();
    return headPart.isHitTheGrid(numberOfCols,numberOfRows);
  }
}
