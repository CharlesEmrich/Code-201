// As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to my guessing game into arrays (or even one huge multi-dimensional array), and modifying the game logic such that a for loop will control the flow from question to question. This will take some planning... here's a hint on how to approach it:
// for (var i = 0; i < Quiz.length; i++) {
//  var answer = prompt(questions[i]);
//  if (answer === correctAns[i]) {
//    alert(response[i][0] + userName + response[i][1]);
//  } else...

//Global Variable Declarations

var Quiz = [
  ['Was I born in Chicago?', ['yes', 'y', true]],
  ['Am I a dog owner?', ['no','n', false]],
  ['What\'s my eventual goal?', 'empire'],
  ['How old am I?', 29],
  ['I mentioned two ways of being good with words. What\'s one?', ['pun','puns','speech','speeches']],
  ['What are two of my favorite "lorem ipsum" words?', ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'phasellus', 'ac']],
];

for (var i = 0; i < Quiz.length; i++) {
  var userResponse = prompt(Quiz[i][0]);
  //Probably a long case split here that provides different methods for evaluating the correct answer depending on which question we asked. Since Q's 3-6 all require different kinds of tests to determine whether an answer is the correct sort.
  switch (i)
    case 0:
    case 1:
    //Can I do that?
    case 3:
}
