//Global Variables
var stores = [Hillsboro, Pearl, Downtown, Buckman, Airport, Clackamas];

function generateTable(Store) {
  var startItem = document.getElementById('salesTable' + Store); //Find the right table
  for (var i = 2; i < 7; i++) { //prep to iterate over 6 rows.
    var currentRow = startItem.nthChild(i); //the working row is the i'th child of the table
    currentRow.nthChild(2).textContent(Store.pizzas[i-2]) //Put pizza count in 
    // for (var i = 2; i < 4; i++) {
    //   currentRow.nthChild(i).textContent(Store.pizzas[i - 2]);
    }
  }

};
