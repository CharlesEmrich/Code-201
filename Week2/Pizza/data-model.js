//Global Variables
var deliveryMax = [4,4,4,8,12,11];
var deliveryMin = [0,0,1,3,5,6];

//Global Logic
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Store Constructor
function Store (loc) {
  this.location = loc;
  this.pizzas = [
    getRandomInt(0,4),
    getRandomInt(0,7),
    getRandomInt(2,15),
    getRandomInt(15,35),
    getRandomInt(12,31),
    getRandomInt(5,20),
  ];
  this.deliveries = [];
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i] > deliveryMax[i]) {
      this.deliveries.push(getRandomInt(deliveryMin[i], deliveryMax[i]));
    } else {
      this.delivery.push(getRandomInt(deliveryMin[i], this.pizzas[i]));
    }
  }
  this.drivers = [];
  for (var i = 0; i < this.pizzas.length; i++) {
    this.drivers.push(Math.ceil(this.deliveries[i] / 3));
  }
};

//Constructing Stores
var Hillsboro = new Store(Hillsboro);
var Pearl = new Store(Pearl);
var Downtown = new Store(downtown);
var Buckman = new Store(Buckman);
var Airport = new Store(Airport);
var Clackamas = new Store(Clackamas);

// //Location object literal examples

// var Hillsboro = {
//   location: 'Hillsboro',
//   pizzas: pizzasMade,
//   deliveries: deliveriesMade,
// };

// var Pearl = {
//   location: 'Pearl',
//   pizzas: pizzasMade,
//   deliveries: deliveriesMade,
// };

// var Downtown = {
//   location: 'Downtown',
//   pizzas: pizzasMade,
//   deliveries: deliveriesMade,
// };

// var Buckman = {
//   location: 'Buckman',
//   pizzas: pizzasMade,
//   deliveries: deliveriesMade,
// };

// var Airport = {
//   location: 'Airport',
//   pizzas: pizzasMade,
//   deliveries: deliveriesMade,
// };
