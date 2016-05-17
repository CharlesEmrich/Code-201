//Global Variables
var stores = [HillsboroS, Pearl, Downtown, Buckman, Airport, Clackamas];

function generateTable(Store) {
  var startItem = document.getElementById('salesTable' + Store); //Find the right table
  for (var i = 2; i < 7; i++) { //prep to iterate over 6 rows.
    var currentRow = startItem.nthChild(i); //the working row is the i'th child of the table
    currentRow.nthChild(2).textContent(Store.pizzas[i - 2]); //Put pizza count in
    currentRow.nthChild(3).textContent(Store.deliveries[i - 2]);
    currentRow.nthChild(4).textContent(Store.drivers[i - 2]);
  }
};

//Generate a table for each store
for (var i = 0; i < stores.length; i++) {
  generateTable(stores[i]);
}
