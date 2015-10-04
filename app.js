//to be replaced by a JSON file called through ajax at a later date
var dataPool = {
  firstName: ["Alison", "Bob", "Susan", "Anthony", "Samantha", "Daniel", "Jack", "Leigh", "Brian", "Christopher", "Steven", "Albert"],
  lastName: ["Stevenson", "Johnson", "Cox", "Smith", "Cooke", "Carter", "Jackson", "Akers", "Stiles", "Anderson", "Addams", "Samuels"],
  job: ["teacher", "dentist", "web developmer", "artist", "internet troll", "writer", "mathmetician", "project manager"],
  emailDomain: ["gmail.com", "hotmail.com", "aol.com", "fakemail.org"]
};

//declared variables here to allow for proper global scope elsewhere
var tempObject = "";
var tempNum = "";
var fullName ="";

//defines RNG generator for this app
function getRNG(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

//uses previous function to generate a string made up of multiple numbers
function getMultiRNG(min, max, amt) {
  var finalResult = "";
  for (a = 0; a < amt; a++) {
    var tempHolder = getRNG(min, max);
    tempHolder.toString();
    finalResult += tempHolder;
  }
  return finalResult;
}

//to generate a randomized phone number, area code input is optional
function fakePhoneGen(area) {
  //checks to see if user has provided an area code, if not or if user has entered an invalid value it generates one
  if (!area || area < 100 || area > 999) {
     area = getRNG(100, 999);
  }
  area.toString();
  var finalNum = area + "-555-";
  finalNum += getMultiRNG(0, 10, 4);
  return finalNum;
}

//defines repeating logic used to build strings below
function stringBuilder(keyName, optionalValue) {
  var stringBuilderHolder;
  stringBuilderHolder = '        "'+ keyName + '": ';
  if (optionalValue) {
    stringBuilderHolder += '"' + optionalValue + '",\n';
  } else {
    tempNum = getRNG(0,dataPool[keyName].length);
    stringBuilderHolder += '"' + dataPool[keyName][tempNum] + '",\n';
  }
  return stringBuilderHolder;
}

//empties all forms to be called on document load and via the clear button
function clearOut() {
<<<<<<< HEAD
  $('#outputArea').val('');
  $('#userNum').val('');
<<<<<<< HEAD
=======
  $('#customEmail').val('');
>>>>>>> 89f7d5bcacba4732703031812502f9eaec7f8ff2
  $('#firstNameCheck').prop('checked', false);
  $('#lastNameCheck').prop('checked', false);
  $('#job').prop('checked', false);
  $('#email').prop('checked', false)
=======
  $('#outputArea, #userNum, #customArea, #customEmail').val('');
  $('#firstNameCheck, #lastNameCheck, #phone, #job, #email').prop('checked', false);
>>>>>>> gh-pages
}

//clears out everything when document loads
$(document).ready(function(){
    clearOut();
});

//keeps user from being able to enter anything other than numbers into user number field
function numbersOnly(thing) { //accepts Jquery selectors
  thing.keyup(function(){
    if (!$.isNumeric(thing.val())){
      thing.val('');
    }
  });

}

//These forms only accept number values
numbersOnly($('#userNum'));
numbersOnly($('#customArea'));

$('#checkAllButton').click(function() {
  $('#firstNameCheck, #lastNameCheck, #phone, #job, #email').prop('checked', true);
});

//executes generate functions on click
$('#generateButton').click(function(){
  var totalUsers;
  var outputHolder = '[\n'; //resets output in case user generates a new set of data

  if ($('#userNum').val() <= 0 || $('#userNum').val() === "") {
    totalUsers = getRNG(1,11);  //generates random value (up to 10) if 0 or nothing is in form prompt
  } else {
    totalUsers = $('#userNum').val();
  }

//throws up error if user has not checked any boxes
if (!$('#firstNameCheck').prop('checked') &&
    !$('#lastNameCheck').prop('checked')  &&
    !$('#job').prop('checked') &&
    !$('#email').prop('checked') &&
    !$('#phone').prop('checked')) {
  outputHolder = 'You need to check at least one box';
} else {

  for (i=0; i < totalUsers; i++){
    tempObject = "";
    tempNum = "";
    fullName =""; //variables are set to blank at start of each loop to sanitize results
    tempObject += '    {\n';

    if ($('#firstNameCheck').prop('checked')){
      tempObject += stringBuilder('firstName');
      fullName += dataPool.firstName[tempNum];
    }

    if ($('#lastNameCheck').prop('checked')){
      tempObject += stringBuilder('lastName');
      fullName += dataPool.lastName[tempNum];
    }

    if ($('#job').prop('checked')){
        tempObject += stringBuilder('job');
    }

    if ($('#phone').prop('checked')){
      var tempPhone = fakePhoneGen($('#customArea').val());
      tempObject += stringBuilder('lastName', tempPhone);
    }

    if ($('#email').prop('checked')){
      if (fullName === ""){
        fullName = "example"; //if user did not choose to generate a name
      }
<<<<<<< HEAD
        tempNum = getRNG(0,dataPool.emailDomain.length);
        tempObject += '        "email": ';
        tempObject += '"' + fullName.toLowerCase() + '@' + dataPool.emailDomain[tempNum] + '",\n';
=======
      //loads in custom domain if user provided one
      if ($('#customEmail').val() !== "") {
        tempObject += '        "email": ';
        tempObject += '"' + fullName.toLowerCase() + '@' + $('#customEmail').val() + '",\n';
      }
      //selects random domain from available content if no custom name
      else {
        tempNum = getRNG(0,dataPool.emailDomain.length);
        tempObject += '        "email": ';
        tempObject += '"' + fullName.toLowerCase() + '@' + dataPool.emailDomain[tempNum] + '",\n';
      }
>>>>>>> 89f7d5bcacba4732703031812502f9eaec7f8ff2
    }
    tempObject = tempObject.substring(0,tempObject.length-2);
    tempObject += '\n    },\n';
    outputHolder += tempObject;
  }
  outputHolder = outputHolder.substring(0,outputHolder.length-2);
  outputHolder += '\n';
  outputHolder += ']\n';
}
  $('#outputArea').val(outputHolder);

});

//functionality for select button
$('#selectButton').click(function(){
  $('#outputArea').select();
});

//clears and resets everything
$('#clearButton').click(function(){
    clearOut();
});
