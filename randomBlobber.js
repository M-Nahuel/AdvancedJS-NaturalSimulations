/*Using the Random Walk simulation this blob goes randomly across the screen and I also modified it to go at random speed*/

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    noStroke();
    fill(0, 0, 255);
    ellipse(this.x, this.y, 10, 20);
};

// Randomly move right, left, down, or up
Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x+=floor(random(10));
    } else if (choice === 1) {
        //move left
        this.x-=floor(random(10));
    } else if (choice === 2) {
        //move down
        this.y+=floor(random(10));
    } else {
        //move up
        this.y-=floor(random(10));
    } 
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
