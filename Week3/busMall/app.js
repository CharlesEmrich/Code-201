// Cached DOM queries
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgThree = document.getElementById('imgThree');
var imgOneCount = document.getElementById('imgOneCount');
var imgTwoCount = document.getElementById('imgTwoCount');
var imgThreeCount = document.getElementById('imgThreeCount');
var buttonBar = document.getElementById('buttonBar');
var plot = document.getElementById('plot');

//Universal Variables
var totalClicks = 0;

//Frequently Used Functions
var gebi = function(el) {
  return document.getElementById(el);
};

function getRand() {
  var a =  Math.floor(images.length * Math.random());
  return a;
};

function imgRefresh(a,b) {
  a.setAttribute('src', imgObjs[b].src);
};

//Button Management
function revealButtons() { //Currently doesn't seem to work?
  buttonBar.setAttribute('background-color','black');
}

function hideButtons() {
  buttonBar.setAttribute('display', 'none');
}

//Constructing Image Objects
var Image = function(src,name) {
  this.src = 'img/' + src + '.jpg';
  this.productName = name;
  this.timesShown = 0;
  this.timesClicked = 0;
};

var images = [
  ['3e3275637baf7a67bedd62a85170ab9a','Santa Hat'],
  ['4RfSFb4','Sleep Party Hat'],
  ['images','Tiny Blue Hat'],
  ['snake14','Fancy Feather Hat'],
  ['The-World’s-Top-10-Best-Images-of-Snakes-in-Hats-5','Dapper Top Hat'],
  ['tumblr_mjtr2xnT2R1s8hre2o1_1280','Straw Hat'],
  ['tumblr_mngcq23Ar11rcvh74o1_1280','Daisy (worn as a Hat)'],
  ['tumblr_mxkxa8paOl1qewacoo3_500','Orange-Banded Top Hat'],
  ['tumblr_n7u63rmYK01qfg8z4o2_540','Pink Bow'],
  ['tumblr_nai1qfUcrO1sn75h6o1_1280','Alert Party Hat']
];

var imgObjs = [];

for (var i = 0; i < images.length; i++) {
  var a = new Image(images[i][0],images[i][1]);
  imgObjs.push(a);
  // console.log('ping');
};
console.log(imgObjs);

//Beginning State
var r = getRand(); //setting indices for each image
var rr = getRand();
var rrr = getRand();
// if r === rr
imgRefresh(imgOne, r); //populating the indexed images
imgRefresh(imgTwo, rr);
imgRefresh(imgThree, rrr);
imgOneName.textContent = imgObjs[r].productName; //Displaying productName
imgTwoName.textContent = imgObjs[rr].productName;
imgThreeName.textContent = imgObjs[rrr].productName;

//User Interaction
//Surely this can be dried?
imgOne.addEventListener('click', function () {
  imgObjs[r].timesClicked ++;
  totalClicks ++;
  // if length thingsSHown = length possible outcomes, reset thingsshown
  r = getRand();
  //if it was already there, reroll R
  //push r to thingsWeveShown
  imgRefresh(imgOne, r);
  imgObjs[r].timesShown ++;
  imgOneCount.textContent = imgObjs[r].timesClicked;
  imgOneName.textContent = imgObjs[r].productName;
  if (totalClicks === 16) {
    console.log('PING');
    revealButtons();
  } else if (totalClicks > 16 && totalClicks % 8 === 0) {
    revealButtons();
    console.log('PING');
  }
}, false);
imgTwo.addEventListener('click', function () {
  imgObjs[rr].timesClicked ++;
  totalClicks ++;
  rr = getRand();
  imgRefresh(imgTwo, rr);
  imgObjs[rr].timesShown ++;
  imgTwoCount.textContent = imgObjs[rr].timesClicked;
  imgTwoName.textContent = imgObjs[rr].productName;
}, false);
imgThree.addEventListener('click', function () {
  imgObjs[rrr].timesClicked ++;
  totalClicks ++;
  rrr = getRand();
  imgRefresh(imgThree, rrr);
  imgObjs[rrr].timesShown ++;
  imgThreeCount.textContent = imgObjs[rrr].timesClicked;
  imgThreeName.textContent = imgObjs[rrr].productName;
}, false);

//button event handlers


//use modulo to check on 8 votes button condition
