// Global Variables
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');

// Functions
function getRand() {
  var a =  Math.floor(5 * Math.random() + 1);
  console.log (a);
  return a;
}

function imgRefresh(a) {
  a.setAttribute('src','img/opt' + getRand() + '.jpg');
}

//User Interaction

//Beginning State
imgRefresh(imgOne);
imgRefresh(imgTwo);
