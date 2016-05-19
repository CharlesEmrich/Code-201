//Global functions
function gebi(a) {
  return document.getElementById(a);
}

//cached DOM queries
var button = gebi('Submit');
var tblParent = gebi('userTable');

button.addEventListener('click', makeStore);

//Making a new Store and its table
function makeStore() {
  var loc = gebi('shopName').value;
  console.log('loc is ' + loc);
  var pizzaValues = document.getElementsByClassName('usrPizzaValue');
  //console.log(pizzaValues[0].value , typeof pizzaValues[0].value);
  var deliveryValues = document.getElementsByClassName('usrDeliveryValue');
  var userShiftPizzas = [];
  for (var i = 0; i < pizzaValues.length; i += 2) {
    userShiftPizzas.push([Number(pizzaValues[i].value),Number(pizzaValues[i + 1].value)]);
  }
  var userShiftDeliveries = [];
  for (var i = 0; i < deliveryValues.length; i += 2) {
    userShiftDeliveries.push([Number(deliveryValues[i].value),Number(deliveryValues[i + 1].value)]);
  }

  console.log('userShiftPizzas= ' + userShiftPizzas);
  console.log('userShiftDeliveries= ' + userShiftDeliveries);

//user data Validation
  if (!loc) {
    alert('Please enter a location.');
  }
  for (var i = 0; i < 12; i++) {
    if (pizzaValues[i].value.split('.').length !== 1 || deliveryValues[i].value.split('.').length !== 1) {
      alert('Please only enter integers.');
    };
  }
  //   if (pizzaValues[i].split('.').length) {
  //
  // }
  // for (var i = 0; i < pizzaValues.length; i++) {
  //   if (Number.isInteger(Number(deliveryValues[i])) === false) {
  //     alert('Please enter integer values for all numbers.');
  //     break;
  //   }
  // }
  // for (var i = 0; i < deliveryValues.length; i++) {
  //   if (Number.isInteger(Number(pizzaValues[i])) === false) {
  //     alert('Please enter integer values for all numbers.');
  //     break;
  //   }
  // }
  var userStore = new Store(loc,userShiftPizzas,userShiftDeliveries);
  console.log(userStore.location);
  tblParent.setAttribute('id', 'salesTable' + loc);
  gebi('salesTable' + loc).textContent = loc;
  userStore.generateTable();
}
