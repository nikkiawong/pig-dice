$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();

  var userNumber = parseInt($("input#inputNumber").val());

  var numbers = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var beepBoop = [];

loop1:
  for(var i = 1; i < userNumber + 2; i++){
    var examineNumber = numbers[i];
    beepBoop.push(examineNumber);
  } //for loop 1

  console.log(examineNumber);
  console.log(beepBoop);




    beepBoop = beepBoop.join(", ");
    $(".answer").text(beepBoop);

  }); // (#formOne).submit close
}); // (document).ready close
