// Adapted from Dan Shiffman, natureofcode.com

// Visualize the distribution of numbers generated by 
// the random function in ProcessingJS

// Set initial variables and colors
var randomCounts = [];
for (var i = 0; i < 20; i++) {
    randomCounts[i] = 0;
}
var rectWidth = floor(width/randomCounts.length);
noStroke();

// Animate the distribution of random numbers over time
draw = function() {
  background(2, 255, 255);
 
  var index = floor(random(randomCounts.length));
  randomCounts[index]++;
  
  for (var i = 0; i < randomCounts.length; i++) {
    fill(173, 173, 173);
    rect(i*rectWidth,
        height-randomCounts[i],
        rectWidth-1,
        randomCounts[i]);
    fill(0, 0, 0);
    text(i, i*rectWidth+3, height-10);
  }
};
