//Global Variables
var deliveriesMade = [
  getRandomInt(0,4),
  getRandomInt(0.4),
  getRandomInt(1,4),
  getRandomInt(3,8),
  getRandomInt(5,12),
  getRandomInt(5,11),
];
var pizzasMade = [
  
];
//Global Logic
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Store (location) {
  this.location = location;
  this.pizzas = pizzasMade;
  this.deliveries = deliveriesMade;
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
