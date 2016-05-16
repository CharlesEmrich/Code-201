var qFirst  = document.getElementById('qFirst');
var qSecond = document.getElementById('qSecond');
var qThird  = document.getElementById('qThird');
var qFourth = document.getElementById('qFourth');
var qFifth  = document.getElementById('qFifth');
var qSixth  = document.getElementById('qSixth');

var firstString = prompt('What is your name?');
console.log('type of firstString' + typeof firstString);
qFirst.textContent = firstString + '? Is that really your name?'

var secondString = prompt('What is your age? In years, please.');
console.log('type of secondString' + typeof secondString);
console.log('parseInt secondString=' + parseInt(secondString) )
if(Number(secondString)) {
  var trueAge = Number(secondString) + 4;
  qSecond.textContent = secondString + '? You look like more of a ' + trueAge + ' to me. No offense.';
} else {
  secondString = prompt("Give me a number. Use numerals. It`s not that hard.");
  var trueAge = Number(secondString) + 4;
  qSecond.textContent = secondString + '? You look like more of a ' + trueAge + ' to me. No offense.';
}

var thirdString = prompt('What is... your favorite color?');
console.log('type of thirdString ' + thirdString);
alert("I actually don't care.");
alert("Just so we're clear.");
qThird.textContent = "Hey, everyone! " + firstString + "'s favorite color is " + thirdString + "!";

var fourthString = prompt("You know, I've never eaten ice cream. What do you like?");
console.log('type of fourthString' + typeof fourthString);
qFourth.textContent = fourthString + ". It takes all kinds, I guess.";

var fifthString = confirm("Are you enjoying this?");
if(fifthString) {
  qFifth.textContent = 'How weird.';
} else {
  qFifth.textContent = 'Well, that makes two of us.';
}

qSixth.textContent = 'Are we done here?';
var sixthString = prompt("Are we done here?");
qSixth.textContent = '"' + sixthString + ', ' + sixthString + ', ' + sixthString + '!" That`s what you sound like.';
console.log('type of sixthString' + typeof sixthString);

var seventhString = false;
while(seventhString==false) {
seventhString = confirm('Are we done here?');
if(seventhString) {
  alert("Finally.");
  alert('I thought you`d never stop.');
} else {
  alert('OK, then.');
}
}
