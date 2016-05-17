//Global Variables
var deliveryMax = [4,4,4,8,12,11];
var deliveryMin = [0,0,1,3,5,6];
var timeBounds = [800,1100,1400,1700,2300,2600];

//Global Logic
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Store Constructor
function Store (loc,pizzasByShift,deliveriesByShift) {
  this.location = loc;
  this.pizzas = [];
  for (var i = 0; i < pizzasByShift.length; i++) {
    pizzasByShift[i]
  }
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
  }
  this.generateTable = function () {
    var startItem = document.getElementById('salesTable' + loc); //Find the right table
    for (var j = 2; i < 7; j++) { //prep to iterate over 6 rows.
      var currentRow = startItem.$(':nthChild(j)'); //the working row is the j'th child of the table
      currentRow.$(':nthChild(2)').textContent(this.pizzas[i - 2]); //Put pizza count in
      currentRow.$(':nthChild(3)').textContent(this.deliveries[i - 2]);
      currentRow.$(':nthChild(4)').textContent(this.drivers[i - 2]);
    };
  };
};

//Constructing Stores
var Hillsboro = new Store(
  Hillsboro,
  [[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
  [[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]]
);
Hillsboro.generateTable();
var Pearl = new Store(
  Pearl,
  [[1,7],[5,9],[2,13],[18,32],[5,12],[8,20]],
  [[1,3],[2,8],[1,6],[3,9],[1,3],[6,16]]
);
Pearl.generateTable();
var Downtown = new Store(
  Downtown,
  [[0,4],[0,7],[2,15],[10,26],[8,22],[0,8]],
  [[0,4],[0,4],[1,4],[4,6],[7,15],[0,2]]
);
Downtown.generateTable();
var Buckman = new Store(
  Buckman,
  [[0,4],[0,7],[5,15],[25,39],[22,36],[16,31]],
  [[0,4],[0,4],[0,4],[13,18],[5,22],[5,21]]
);
Buckman.generateTable();
var Airport = new Store(
  Airport,
  [[2,7],[3,9],[1,5],[5,13],[22,42],[15,21]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  );
Airport.generateTable();
var Clackamas = new Store(
  Clackamas,
  [[0,4],[0,7],[2,15],[6,19],[4,8],[2,5]],
  [[0,4],[0,4],[1,4],[5,9],[2,5],[2,4]]
);
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
