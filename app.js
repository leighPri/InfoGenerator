//OK new plan, make the funcitons that generate the data first then worry about customizing numbers and types.

//populate a big object that has some data in it to play with (will eventually be changed to a JSON file to manage separately)

//this is acceptable for JSON except the keys should be in quotes too
var dataPool = {
  firstName: ["Alison", "Bob", "Susan", "Anthony", "Samantha", "Daniel", "Jack", "Leigh", "Brian", "Christopher", "Steven", "Albert"],
  lastName: ["Stevenson", "Johnson", "Cox", "Smith", "Cooke", "Carter", "Jackson", "Akers", "Stiles", "Anderson", "Addams", "Samuels"],
  job: ["teacher", "dentist", "web developmer", "artist", "internet troll", "writer", "mathmetician", "project manager"]
};

//defines RNG generator for this app
function getRNG(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}



//generate and stores a random number to determine how many objects will be created (max 10 for now)
$("#generateButton").click(function(){
var totalUsers = getRNG(1,11);
var outputHolder = '['; //resets output in case user generates a new set of data
console.log(totalUsers);

for (i=0; i < totalUsers; i++){
  console.log(i);
  var tempObject = "";
  tempObject += '{';
  var tempNum = getRNG(0,dataPool.firstName.length);
  tempObject += '"firstName": ';
  tempObject += '"' + dataPool.firstName[tempNum] + '",';
  tempNum = getRNG(0,dataPool.lastName.length);
  tempObject += '"lastName": ';
  tempObject += '"' + dataPool.lastName[tempNum] + '",';
  tempNum = getRNG(0,dataPool.job.length);
  tempObject += '"job": ';
  tempObject += '"' + dataPool.job[tempNum] + '"';
  tempObject += '},';
  outputHolder += tempObject;
}

outputHolder = outputHolder.substring(0,outputHolder.length-1);
outputHolder += ']';

console.log(outputHolder);

$('#outputArea').val(outputHolder);


});

//create a function that loops through an object, generating a random number to select an option from each array

//iterates over whole object, selecting a random value from each array



//push results onto temp array
//display completed temp array in <textarea>


// });


//idea for later customization:
  //generate email address based on firstname + lastname and a stock of domains
    //still later, allow user to input own @whatever.com e-mail field
  //allow option of a string with a full name or separate first/last names

  // var numUsersTemp = $("#userNum").keyup(function(){
  //   return this.value();
  // });
  //
  // var numUsers = parseInt(numUsersTemp);
  //
  // $("#generateButton").click(function(){
  //   console.log(numUsers);
  // });
