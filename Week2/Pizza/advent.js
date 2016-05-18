function sumPizzas(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

// Calculate Odysseys

var Odysseys = 7 * (sumPizzas(Hillsboro.pizzas) +
sumPizzas(Pearl.pizzas) +
sumPizzas(Downtown.pizzas) +
sumPizzas(Buckman.pizzas) +
sumPizzas(Airport.pizzas) +
sumPizzas(Clackamas.pizzas));

var adventures = document.getElementById('Odysseys');
adventures.textContent = Odysseys;
