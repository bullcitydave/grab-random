$.fn.grabRandom = function(array) {
  this.html(array[Math.floor(array.length*Math.random())]);
};
