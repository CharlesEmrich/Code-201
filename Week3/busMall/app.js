//http://stackoverflow.com/questions/5157377/show-youtube-video-source-into-html5-video-tag
// videos = document.querySelectorAll("video");
// for (var i = 0, l = videos.length; i < l; i++) {
//   var video = videos[i];
//   var src = video.src || (function () {
//       var sources = video.querySelectorAll("source");
//     for (var j = 0, sl = sources.length; j < sl; j++) {
//       var source = sources[j];
//       var type = source.type;
//         var isMp4 = type.indexOf("mp4") != -1;
//       if (isMp4) return source.src;
//     }
//     return null;
//   })();
//   if (src) {
//     var isYoutube = src &&  src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
//     if (isYoutube) {
//       var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
//       id = (id.length > 1) ? id.splice(1) : id;
//       id = id.toString();
//       var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
//       video.src = mp4url + id;
//     }
//   }
// }

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
var forcefield = document.getElementById('forcefield');

//Universal Variables
var totalClicks = 0;
var indices = [];
var eightMore = false;
var dispState = 0;

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
  imgObjs[indices[0]].timesShown ++;
  imgObjs[indices[1]].timesShown ++;
  imgObjs[indices[2]].timesShown ++;
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
  showResults.setAttribute('style','visibility: visible');
  moreVotes.setAttribute('style','visibility: visible');
}

function hideButtons() {
  buttonBar.setAttribute('style','visibility: hidden');
  newRound.setAttribute('style','visibility: hidden');
  plot.setAttribute('style','visibility: hidden');
}

function saveVoteState() {
  localStorage.imgObjs = JSON.stringify(imgObjs);
  localStorage.totalClicks = totalClicks;
  localStorage.indices = JSON.stringify(indices);
}

function resetState() {
  //Reset localStorage
  localStorage.clear();
  //lower forcefield
  forcefield.setAttribute('style', 'z-index: -20');
  //Reset global Variables
  dispState = 0;
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
  showResults.setAttribute('style','visibility: hidden');
  moreVotes.setAttribute('style','visibility: hidden');
  newRound.setAttribute('style','visibility: hidden');
  plot.setAttribute('style','visibility: hidden');
}

//Graph Plotting //Used Chart.js documentation
function graphPlot() { //variabe domain?
  plot.setAttribute('style','visibility: visible');
  // var clickArray = [];
  // for (var i = 0; i < imgObjs.length; i++) {
  //   var datum = (imgObjs[i].timesClicked);
  //   clickArray.push(datum);
  // }
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
  totalClicks ++;
  reIndex();
  imgRefresh();
  if (totalClicks === 16) {
    revealButtons();
    dispState = 1;
  } else if (totalClicks > 16 && totalClicks % 8 === 0) {
    if (!eightMore) {
      revealButtons();
      newRound.setAttribute('style','visibility: visible');
      dispState = 1;
    } else {
      revealButtons();
      showResults.setAttribute('style','visibility: hidden');
      moreVotes.setAttribute('style','visibility: hidden');
      newRound.setAttribute('style','visibility: visible');
      forcefield.setAttribute('style', 'z-index: 100');
      graphPlot();
      dispState = 2;
    };
  }
  //save app state to localStorage
  saveVoteState();
  localStorage.dispState = dispState;
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
if (!localStorage.totalClicks) {
  reIndex();
  imgRefresh();
  saveVoteState();
} else {
  imgObjs = JSON.parse(localStorage.imgObjs);
  indices = JSON.parse(localStorage.indices);
  totalClicks = localStorage.totalClicks;
  switch (localStorage.dispState) {
  case 0:
    showResults.setAttribute('style','visibility: hidden');
    moreVotes.setAttribute('style','visibility: hidden');
    newRound.setAttribute('style','visibility: hidden');
    plot.setAttribute('style','visibility: hidden');
    break;
  case 1:
    showResults.setAttribute('style','visibility: visible');
    moreVotes.setAttribute('style','visibility: visible');
    newRound.setAttribute('style','visibility: visible');
    plot.setAttribute('style','visibility: hidden');
    break;
  case 2:
    showResults.setAttribute('style','visibility: hidden');
    moreVotes.setAttribute('style','visibility: hidden');
    newRound.setAttribute('style','visibility: visible');
    plot.setAttribute('style','visibility: visible');
    forcefield.setAttribute('style', 'z-index: 100');
    graphPlot();
    break;
  }
  imgRefresh();
};

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
  showResults.setAttribute('style','visibility: hidden');
  moreVotes.setAttribute('style','visibility: hidden');
  newRound.setAttribute('style','visibility: hidden');
  plot.setAttribute('style','visibility: hidden');
  eightMore = true;
  totalClicks = 17;
}, false);
showResults.addEventListener('click', function() {
  graphPlot();
}, false);
newRound.addEventListener('click', function() {
  resetState();
}, false);

//use modulo to check on 8 votes button condition
