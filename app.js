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
var outputHolder = '[\n'; //resets output in case user generates a new set of data
console.log(totalUsers);

for (i=0; i < totalUsers; i++){
  console.log(i);
  var tempObject = "";
  tempObject += '\t{\n';
  var tempNum = getRNG(0,dataPool.firstName.length);
  tempObject += '\t\t"firstName": ';
  tempObject += '"' + dataPool.firstName[tempNum] + '",\n';
  tempNum = getRNG(0,dataPool.lastName.length);
  tempObject += '\t\t"lastName": ';
  tempObject += '"' + dataPool.lastName[tempNum] + '",\n';
  tempNum = getRNG(0,dataPool.job.length);
  tempObject += '\t\t"job": ';
  tempObject += '"' + dataPool.job[tempNum] + '"\n';
  tempObject += '\t},\n';
  outputHolder += tempObject;
}

outputHolder = outputHolder.substring(0,outputHolder.length-2);
outputHolder += '\n';
outputHolder += ']\n';

console.log(outputHolder);

$('#outputArea').val(outputHolder);


});
