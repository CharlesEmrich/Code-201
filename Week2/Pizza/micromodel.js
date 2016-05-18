//Global Logic
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Store (loc,pizzasByShift,deliveriesByShift) {
  this.location = loc;
  console.log('this.location is ' + this.location);
  this.pizzas = [];
  console.log(this.pizzas);
  for (var i = 0; i < 18; i++) {
    if (i < 3) {
      this.pizzas.push(getRandomInt(pizzasByShift[0][0],pizzasByShift[0][1]));
    } else if (i < 6) {
      this.pizzas.push(getRandomInt(pizzasByShift[1][0],pizzasByShift[1][1]));
    } else if (i < 9) {
      this.pizzas.push(getRandomInt(pizzasByShift[2][0],pizzasByShift[2][1]));
    } else if (i < 12) {
      this.pizzas.push(getRandomInt(pizzasByShift[3][0],pizzasByShift[3][1]));
    } else if (i < 15) {
      this.pizzas.push(getRandomInt(pizzasByShift[4][0],pizzasByShift[4][1]));
    } else if (i < 18) {
      this.pizzas.push(getRandomInt(pizzasByShift[5][0],pizzasByShift[5][1]));
    }
  }
  console.log('this.pizzas is ' + this.pizzas);
  this.deliveries = [];
  console.log('this.deliveries is ' + this.deliveries);
  for (var i = 0; i < this.pizzas.length; i++) { //Is this better accomplished by using  a sufficiently complex array.map?
    if (i < 3) {
      if (this.pizzas[i] > deliveriesByShift[0][1]) {
        this.deliveries.push(getRandomInt(deliveriesByShift[0][0],this.pizzas[i]));
      } else {
        this.deliveries.push(getRandomInt(deliveriesByShift[0][0],deliveriesByShift[0][1]));
      };
    } else if (i < 6) {
      if (this.pizzas[i] > deliveriesByShift[1][1]) {
        this.deliveries.push(getRandomInt(deliveriesByShift[1][0],this.pizzas[i]));
      } else {
        this.deliveries.push(getRandomInt(deliveriesByShift[1][0],deliveriesByShift[1][1]));
      };
    } else if (i < 9) {
      if (this.pizzas[i] > deliveriesByShift[2][1]) {
        this.deliveries.push(getRandomInt(deliveriesByShift[2][0],this.pizzas[i]));
      } else {
        this.deliveries.push(getRandomInt(deliveriesByShift[2][0],deliveriesByShift[2][1]));
      };
    } else if (i < 12) {
      if (this.pizzas[i] > deliveriesByShift[3][1]) {
        this.deliveries.push(getRandomInt(deliveriesByShift[3][0],this.pizzas[i]));
      } else {
        this.deliveries.push(getRandomInt(deliveriesByShift[3][0],deliveriesByShift[3][1]));
      };
    } else if (i < 15) {
      if (this.pizzas[i] > deliveriesByShift[4][1]) {
        this.deliveries.push(getRandomInt(deliveriesByShift[4][0],this.pizzas[i]));
      } else {
        this.deliveries.push(getRandomInt(deliveriesByShift[4][0],deliveriesByShift[4][1]));
      };
    } else if (i < 18) {
      if (this.pizzas[i] > deliveriesByShift[5][1]) {
        this.deliveries.push(getRandomInt(deliveriesByShift[5][0],this.pizzas[i]));
      } else {
        this.deliveries.push(getRandomInt(deliveriesByShift[5][0],deliveriesByShift[5][1]));
      };
    }
  }
  console.log('this.deliveries is ' + this.deliveries);
}

var Hillsboro = new Store(
  'Hillsboro',
  [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
  [[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]]
);
