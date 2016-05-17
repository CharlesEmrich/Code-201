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
      var El = getRandomInt(deliveryMin[i], deliveryMax[i]);
      // console.log('Adding ' + El + 'to deliveries');
      this.deliveries.push(El);
    } else {
      var El = getRandomInt(deliveryMin[i], this.pizzas[i]);
      // console.log('Adding ' + El + 'to deliveries');
      this.deliveries.push(El);
    }
  }
  this.drivers = [];
  for (var i = 0; i < this.pizzas.length; i++) {
    this.drivers.push(Math.ceil(this.deliveries[i] / 3));
    this.generateTable = function () {
      var startItem = document.getElementById('salesTable' + loc); //Find the right table
      for (var j = 2; i < 7; j++) { //prep to iterate over 6 rows.
        var currentRow = startItem.$(':nthChild(j)'); //the working row is the j'th child of the table
        currentRow.$(':nthChild(2)').textContent(this.pizzas[i - 2]); //Put pizza count in
        currentRow.$(':nthChild(3)').textContent(this.deliveries[i - 2]);
        currentRow.$(':nthChild(4)').textContent(this.drivers[i - 2]);
      }
    };
  }
};

//Constructing Stores
var Hillsboro = new Store(Hillsboro);
Hillsboro.generateTable();
var Pearl = new Store(Pearl);
Pearl.generateTable();
var Downtown = new Store(downtown);
Downtown.generateTable();
var Buckman = new Store(Buckman);
Buckman.generateTable();
var Airport = new Store(Airport);
Airport.generateTable();
var Clackamas = new Store(Clackamas);
Clackamas.generateTable();

//Calculate Odysseys
function sumPizzas(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

var Odysseys = 7 * (sumPizzas(Hillsboro.pizzas) +
sumPizzas(Pearl.pizzas) +
sumPizzas(Downtown.pizzas) +
sumPizzas(Buckman.pizzas) +
sumPizzas(Airport.pizzas) +
sumPizzas(Clackamas.pizzas));

document.getElementById('Odysseys').textContent(Odysseys);

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
