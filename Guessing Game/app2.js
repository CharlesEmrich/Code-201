// As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to my guessing game into arrays (or even one huge multi-dimensional array), and modifying the game logic such that a for loop will control the flow from question to question. This will take some planning... here's a hint on how to approach it:
// for (var i = 0; i < Quiz.length; i++) {
//  var answer = prompt(questions[i]);
//  if (answer === correctAns[i]) {
//    alert(response[i][0] + userName + response[i][1]);
//  } else...
//zoo

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
function splitString(string) {
  var splitResponse = userResponse.split(' ');
  console.log('User response spilt into: ' + splitResponse)
  return splitResponse;
};
var tries = 0;
var sixthAnswers = 0;

for (var i = 0; i < Quiz.length; i++) {
  var userResponse = prompt(Quiz[i][0]);
  //Probably a long case split here that provides different methods for evaluating the correct answer depending on which question we asked. Since Q's 3-6 all require different kinds of tests to determine whether an answer is the correct sort.
  answeredCorrectly = false; //Unnecessary?
  console.log('userResponse = ' + userResponse);

  switch (i)
    case 0:
    case 1:
      var answeredCorrectly = (function() {
        if ((userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no' || userResponse.toLowerCase() === 'false') && i == 1) {
          answeredCorrectly = true;
        } else if ((userResponse.toLowerCase() === 'y' || userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'true') && i == 0) {
          answeredCorrectly = true;
        } else {
          //wrong answer to page
        }
      }());
      break;

    case 2:
        splitString(userResponse);
        for (var i = 0; i < splitResponse.length; i++) {
          if (splitResponse[i].toLowerCase() == quiz[2][1]) {
            answeredCorrectly = true;
          } else {
        //wrong answer to page
      }
          break;
      };

    case 3:
        while (answeredCorrectly === false && tries < 4) {
          if (isNaN(userResponse)) {
            /*alert('Oh shucks, that\'s not a valid form of answer. Could you use numerals?');*/
            Tries++;
          } else if (userResponse != quiz[3][1]) {
            Tries ++;
            console.log('Tries is currently ' + Tries);
            /*alert('Uh, maybe try that one again?');*/
            if (userResponse > quiz[3][1]) {
              /*alert('That seems a little high!');*/
            } else if (userResponse < quiz[3][1]){
              /*alert('That seems a litle low!');*/
            }
          } else if (userResponse == quiz[3][1]) {
            /*alert('Great work! That one took math!');*/
          }
          break;
        }

    case 4:
      for (var i = 0; i < Quiz[4][1].length; i++) {
        if (Quiz[4][1][i] == userResponse) {
          answeredCorrectly = true;
        } else {
          //wrong to page
        }
      }
      break;

    case 5:
      splitString(userResponse);
      for (var i = 0; i < splitResponse.length; i++) {
        splitResponse[i];
        if (Quiz[5][1].indexOf(splitResponse[i])) {
          sixthAnswers++;
          console.log('sixthAnswers is currently ' + sixthAnswers)
        }
      }
      if (sixthAnswers === 2) {
        answeredCorrectly = true;
      } else if (sixthAnswers === 1) {
        //print 1 right to page
      } else {
        //print wrong to page
      }
    }

function scoreIncrement(answeredCorrectly) {

}
