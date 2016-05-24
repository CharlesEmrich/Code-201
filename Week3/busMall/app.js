// Cached DOM queries
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgThree = document.getElementById('imgThree');
var imgOneCount = document.getElementById('imgOneCount');
var imgTwoCount = document.getElementById('imgTwoCount');
var imgThreeCount = document.getElementById('imgThreeCount');
var buttonBar = document.getElementById('buttonBar');
var plot = document.getElementById('plot');
var newRound = document.getElementById('newRound');
var showResults = document.getElementById('showResults');
var moreVotes = document.getElementById('moreVotes');

//Universal Variables
var totalClicks = 0;
var indices = [];
var eightMore = false;

//Frequently Used Functions
var gebi = function(el) {
  return document.getElementById(el);
};

function getRand() {
  var a =  Math.floor(images.length * Math.random());
  return a;
};

function imgRefresh() {
  imgOne.setAttribute('src', imgObjs[indices[0]].src);
  imgTwo.setAttribute('src', imgObjs[indices[1]].src);
  imgThree.setAttribute('src', imgObjs[indices[2]].src);
  imgOneName.textContent = imgObjs[indices[0]].productName;
  imgTwoName.textContent = imgObjs[indices[1]].productName;
  imgThreeName.textContent = imgObjs[indices[2]].productName;
  imgOneCount.textContent = imgObjs[indices[0]].timesClicked;
  imgTwoCount.textContent = imgObjs[indices[1]].timesClicked;
  imgThreeCount.textContent = imgObjs[indices[2]].timesClicked;
};

function reIndex() {
  do {
    indices = [];
    indices.push(getRand());
    indices.push(getRand());
    indices.push(getRand());
  } while (indices[0] === indices[1] || indices[1] === indices[2] || indices[2] === indices[0]); //force all pictures to be different.
}

//Button Management
function revealButtons() { //Currently doesn't seem to work?
  buttonBar.setAttribute('style','visibility: visible');
}

function hideButtons() {
  buttonBar.setAttribute('style','visibility: hidden');
}
function resetState() {
  //Reset global Variables
  totalClicks = 0;
  indices = [];
  eightMore = false;
  imgObjs = [];
  //Rebuild Object Array
  for (var i = 0; i < images.length; i++) {
    var a = new Image(images[i][0],images[i][1]);
    imgObjs.push(a);
  }
  //Repopulate page
  reIndex();
  imgRefresh();
  //hide buttonBar
  hideButtons();
}

//Graph Plotting //Used Chart.js documentation
function graphPlot() { //variabe domain?
  plot.setAttribute('style','visibility: visible');
  var clickArray = [];
  for (var i = 0; i < imgObjs.length; i++) {
    var datum = (imgObjs[i].timesClicked);
    clickArray.push(datum);
  }
  var percentages = [];
  for (var i = 0; i < imgObjs.length; i++) {
    var datum = 100 * (imgObjs[i].timesClicked / imgObjs[i].timesShown);
    percentages.push(datum);
  }
  var snakeHats = [];
  for (var i = 0; i < imgObjs.length; i++) {
    snakeHats.push(imgObjs[i].productName);
  }
  var resultChart = new Chart(plot, {
    type: 'bar',
    data: {
      labels: snakeHats,
      datasets: [{
        label: '% of times clicked when shown',
        data: percentages,
      },
    {
      label: 'timesClicked',
      data: clickArray,
    }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true }
        }]
      }
    }
  });
}

//Image Clicking function
function buttonClick(a,b) {
  imgObjs[indices[a]].timesClicked ++;
  console.log(imgObjs[indices[a]].productName + 'clicked.');
  totalClicks ++;
  // if length thingsSHown = length possible outcomes, reset thingsshown
  reIndex();
  //if it was already there, reroll R
  //push r to thingsWeveShown
  imgRefresh();
  imgObjs[indices[0]].timesShown ++;
  imgObjs[indices[1]].timesShown ++;
  imgObjs[indices[2]].timesShown ++;
  // [b + 'Count'].textContent = imgObjs[indices[a]].timesClicked;
  // [b + 'Name'].textContent = imgObjs[indices[a]].productName;
  if (totalClicks === 16) {
    console.log('PING');
    revealButtons();
  } else if (totalClicks > 16 && totalClicks % 8 === 0) {
    if (!eightMore) {
      revealButtons();
    } else {
      revealButtons();
      showResults.setAttribute('style','visibility: hidden');
      moreVotes.setAttribute('style','visibility: hidden');
      newRound.setAttribute('style','visibility: visible');
      graphPlot();
    }
    console.log('PING');
  }
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
  ['4RfSFb4','Sleepy Party Hat'],
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
reIndex();
imgRefresh();

//User Interaction
imgOne.addEventListener('click', function () {
  buttonClick(0,'imgOne');
}, false);
imgTwo.addEventListener('click', function () {
  buttonClick(1,'imgTwo');
}, false);
imgThree.addEventListener('click', function () {
  buttonClick(2,'imgThree');
}, false);

//button event handlers
moreVotes.addEventListener('click', function() {
  hideButtons();
  eightMore = true;
}, false);
showResults.addEventListener('click', function() {
  graphPlot();
}, false);

//use modulo to check on 8 votes button condition
