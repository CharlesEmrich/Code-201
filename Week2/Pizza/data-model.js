//Global Variables
var deliveryMax = [4,4,4,8,12,11];
var deliveryMin = [0,0,1,3,5,6];
var timeBounds = [800,1100,1400,1700,2300,2600];

//Global Logic
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function driverCheck(a) {
  Math.ceil(a / 3);
}

//Store Constructor
function Store (loc,pizzasByShift,deliveriesByShift) {
  this.location = loc;
  //Build array of Pizzas by hour
  this.pizzas = [];
  for (var i = 800; i <= 2600; i + 100) {
    if (i < 1100) {
      this.pizzas.push(getRandomInt(pizzasByShift[0][0]),pizzasByShift[0][1]);
    } else if (i < 1400) {
      this.pizzas.push(getRandomInt(pizzasByShift[1][0]),pizzasByShift[1][1]);
    } else if (i < 1700) {
      this.pizzas.push(getRandomInt(pizzasByShift[2][0]),pizzasByShift[2][1]);
    } else if (i < 2000) {
      this.pizzas.push(getRandomInt(pizzasByShift[3][0]),pizzasByShift[3][1]);
    } else if (i < 2300) {
      this.pizzas.push(getRandomInt(pizzasByShift[4][0]),pizzasByShift[4][1]);
    } else if (i <= 2600) {
      this.pizzas.push(getRandomInt(pizzasByShift[5][0]),pizzasByShift[5][1]);
    }
  }
  //Build Array of deliveries by hour
  this.deliveries = [];
  for (var i = 0; i < this.pizzas.length; i++) { //Is this better accomplished by using  a sufficiently complex array.map?
    for (var j = 800; j <= 2600; j + 100) {
      if (i < 1100) {
        if (this.pizzas[i] > deliveriesByShift[0][1]) {
          this.deliveries.push(getRandomInt(deliveriesByShift[0][0],this.pizzas[i]));
        } else {
          this.deliveries.push(getRandomInt(deliveriesByShift[0][0],deliveriesByShift[0][1]));
        };
      } else if (i < 1400) {
        if (this.pizzas[i] > deliveriesByShift[1][1]) {
          this.deliveries.push(getRandomInt(deliveriesByShift[1][0],this.pizzas[i]));
        } else {
          this.deliveries.push(getRandomInt(deliveriesByShift[1][0],deliveriesByShift[1][1]));
        };
      } else if (i < 1700) {
        if (this.pizzas[i] > deliveriesByShift[2][1]) {
          this.deliveries.push(getRandomInt(deliveriesByShift[2][0],this.pizzas[i]));
        } else {
          this.deliveries.push(getRandomInt(deliveriesByShift[2][0],deliveriesByShift[2][1]));
        };
      } else if (i < 2000) {
        if (this.pizzas[i] > deliveriesByShift[3][1]) {
          this.deliveries.push(getRandomInt(deliveriesByShift[3][0],this.pizzas[i]));
        } else {
          this.deliveries.push(getRandomInt(deliveriesByShift[3][0],deliveriesByShift[3][1]));
        };
      } else if (i < 2300) {
        if (this.pizzas[i] > deliveriesByShift[4][1]) {
          this.deliveries.push(getRandomInt(deliveriesByShift[4][0],this.pizzas[i]));
        } else {
          this.deliveries.push(getRandomInt(deliveriesByShift[4][0],deliveriesByShift[4][1]));
        };
      } else if (i <= 2600) {
        if (this.pizzas[i] > deliveriesByShift[5][1]) {
          this.deliveries.push(getRandomInt(deliveriesByShift[5][0],this.pizzas[i]));
        } else {
          this.deliveries.push(getRandomInt(deliveriesByShift[5][0],deliveriesByShift[5][1]));
        };
      }
    }
  }

  //Build an Array of drivers by hour
  this.drivers = deliveries.map(driverCheck);

  //Build byShift arrays of all three of the above
  this.pizzasShiftly = [];
  for (var i = 0; i < pizzas.length; i + 3) { //Can I use i + 3 here? Could I codify this operation as a function simply?
    this.pizzasShiftly.push(pizzas[i] + pizzas[i + 1] + pizzas[i + 2]);
  }

  this.deliveriesShiftly = [];
  for (var i = 0; i < deliveries.length; i + 3) {
    this.pizzasShiftly.push(deliveries[i] + deliveries[i + 1] + deliveries[i + 2]);
  }

  this.driversShiftly = [];
  for (var i = 0; i < drivers.length; i + 3) {
    this.pizzasShiftly.push(drivers[i] + drivers[i + 1] + drivers[i + 2]);
  }

  //Make a table out of by-Shift data
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
