//Global Logic
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Store (loc,pizzasByShift,deliveriesByShift) {
  this.location = loc;
  console.log('this.location is ' + this.location);
  this.pizzas = [];
  console.log(this.pizzas);
  for (var i = 8; i < 26; i++) {
    if (i < 11) {
      this.pizzas.push(getRandomInt(pizzasByShift[0][0],pizzasByShift[0][1]));
    } else if (i < 14) {
      this.pizzas.push(getRandomInt(pizzasByShift[1][0],pizzasByShift[1][1]));
    } else if (i < 17) {
      this.pizzas.push(getRandomInt(pizzasByShift[2][0],pizzasByShift[2][1]));
    } else if (i < 20) {
      this.pizzas.push(getRandomInt(pizzasByShift[3][0],pizzasByShift[3][1]));
    } else if (i < 23) {
      this.pizzas.push(getRandomInt(pizzasByShift[4][0],pizzasByShift[4][1]));
    } else if (i < 26) {
      this.pizzas.push(getRandomInt(pizzasByShift[5][0],pizzasByShift[5][1]));
    }
  }
  console.log('this.pizzas is ' + this.pizzas);
}

var Hillsboro = new Store(
  'Hillsboro',
  [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
  [[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]]
);
