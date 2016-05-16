//Global Variable Declarations

var Quiz = [
  ['Was I born in Chicago?', ['yes', 'y', true]],
  ['Am I a dog owner?', ['no','n', false]],
  ['What\'s my eventual goal?', 'empire'],
  ['How old am I?', 29],
  ['I mentioned two ways of being good with words. What\'s one?', ['pun','puns','speech','speeches']],
  ['What are two of my favorite "lorem ipsum" words?', ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'phasellus', 'ac']],
];

var answeredCorrectly = false;
var Tries = 0;
var sixthAnswers = 0;
var Score = 0;
var questionOneEl = document.getElementById('question-one');
var questionOneResponseEL = document.getElementById('question-one-response');
var questionTwoEl = document.getElementById('question-two');
var questionTwoResponseEL = document.getElementById('question-two-response');
var questionThreeEl = document.getElementById('question-three');
var questionThreeResponseEL = document.getElementById('question-three-response');
var questionFourEl = document.getElementById('question-four');
var questionFourResponseEL = document.getElementById('question-four-response');
var questionFiveEl = document.getElementById('question-five');
var questionFiveResponseEL = document.getElementById('question-five-response');
var questionSixEl = document.getElementById('question-six');
var questionSixResponseEL = document.getElementById('question-six-response');
var finalScoreEl = document.getElementById('finalScore');

//Function declarations
function scoreIncrement(answer) {
  if (answer === true){
    Score++;
    console.log('Score is now ' + Score);
  }
}

function splitString(string) {
  var splitResponse = string.split(' ');
  console.log('User response spilt into: ' + splitResponse);
  return splitResponse;
};

//Central Logic
var userName = prompt('What\'s your name, then?');

for (var i = 0; i < Quiz.length; i++) {
  var userResponse = prompt(Quiz[i][0]);
  answeredCorrectly = false; //Unnecessary?
  console.log('userResponse = ' + userResponse);

  switch (i) {
  case 0:
  case 1:
    var answeredCorrectly = (function() {
      if ((userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no' || userResponse.toLowerCase() === 'false') && i == 1) {
        answeredCorrectly = true;
        questionTwoResponseEL.textContent = 'Correct!' + userName + '! You got it!';
        console.log('Question ' + i + ' answered correctly'); } else if ((userResponse.toLowerCase() === 'y' || userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'true') && i == 0) {
          answeredCorrectly = true;
          questionOneResponseEL.textContent = 'Correct!' + userName + '! You got it!';
          console.log('Question ' + i + ' answered correctly');
        } else if (i === 0) {
          questionOneResponseEL.textContent = 'Incorrect! Sorry!';
        } else if (i === 1) {
          questionTwoResponseEL.textContent = 'Incorrect! Sorry!';
        }
    }());
    break;

  case 2:
    var splitResponse = splitString(userResponse);
    for (var j = 0; j < splitResponse.length; j++) {
          //console.log('a: ' + splitResponse[j].toLowerCase())
          //console.log('b: ' + Quiz[2][1])
      if (splitResponse[j].toLowerCase() == Quiz[2][1]) {
        answeredCorrectly = true;
        questionThreeResponseEL.textContent = 'Correct!' + userName + '! You got it!';
        console.log('Question ' + i + ' answered correctly');
      } else {
        questionThree1ResponseEL.textContent = 'Incorrect! Sorry!';      }
    }
    break;

  case 3:
    while (answeredCorrectly === false && Tries < 4) {
      if (isNaN(userResponse)) {
            /*alert('Oh shucks, that\'s not a valid form of answer. Could you use numerals?');*/
        Tries++;
      } else if (userResponse != Quiz[3][1]) {
        Tries ++;
        console.log('Tries is currently ' + Tries);
            /*alert('Uh, maybe try that one again?');*/
        if (userResponse > Quiz[3][1]) {
              /*alert('That seems a little high!');*/
        } else if (userResponse < Quiz[3][1]){
              /*alert('That seems a litle low!');*/
        }
      } else if (userResponse == Quiz[3][1]) {
        answeredCorrectly = true;
        questionFourResponseEL.textContent = 'Correct!' + userName + '! You got it!';
        console.log('Question ' + i + ' answered correctly');
      }
      break;
    }

  case 4:
    for (var k = 0; k < Quiz[4][1].length; k++) {
      if (Quiz[4][1][k] == userResponse) {
        answeredCorrectly = true;
        questionFiveResponseEL.textContent = 'Correct!' + userName + '! You got it!'
        console.log('Question ' + i + ' answered correctly');
      } else {
        questionFiveResponseEL.textContent = 'Incorrect! Sorry!';
      }
    }
    break;

  case 5:
    var splitResponse = splitString(userResponse);
    for (var l = 0; l < splitResponse.length; l++) {
      if (Quiz[5][1].indexOf(splitResponse[l]) != -1) {
        sixthAnswers++;
        console.log('sixthAnswers is currently ' + sixthAnswers);
      }
    }
    if (sixthAnswers === 2) {
      answeredCorrectly = true;
      questionSixResponseEL.textContent = 'Correct!' + userName + '! You got it!'
      console.log('Question ' + i + ' answered correctly');
    } else if (sixthAnswers === 1) {
      questionSixResponseEL.textContent = 'Half correct!';
    } else {
      questionSixResponseEL.textContent = 'Incorrect! Sorry!';
    }
    break;
  }

  scoreIncrement(answeredCorrectly);
}

//Final Score
finalScoreEl.textContent = 'Your overall score was' + Score + ' out of 6!';
