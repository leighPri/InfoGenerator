
var dataPool = {
  firstName: ["Alison", "Bob", "Susan", "Anthony", "Samantha", "Daniel", "Jack", "Leigh", "Brian", "Christopher", "Steven", "Albert"],
  lastName: ["Stevenson", "Johnson", "Cox", "Smith", "Cooke", "Carter", "Jackson", "Akers", "Stiles", "Anderson", "Addams", "Samuels"],
  job: ["teacher", "dentist", "web developmer", "artist", "internet troll", "writer", "mathmetician", "project manager"]
};

//defines RNG generator for this app
function getRNG(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

//prevents old data from remaining in textarea when page is reloaded
$(document).ready(function(){
    $('#outputArea').val('');
});

//generate and stores a random number to determine how many objects will be created (max 10 for now)
$('#generateButton').click(function(){
  var totalUsers;
  var outputHolder = '[\n'; //resets output in case user generates a new set of data

  //generates random value (up to 10) if 0 or nothing is in form prompt
  if ($('#userNum').val() === 0 || $('#userNum').val() === "") {
    totalUsers = getRNG(1,11);
  } else {
    totalUsers = $('#userNum').val();
  }
  console.log(totalUsers);

  for (i=0; i < totalUsers; i++){
    console.log(i);
    var tempObject = "";
    tempObject += '    {\n';
    var tempNum = getRNG(0,dataPool.firstName.length);
    tempObject += '        "firstName": ';
    tempObject += '"' + dataPool.firstName[tempNum] + '",\n';
    tempNum = getRNG(0,dataPool.lastName.length);
    tempObject += '        "lastName": ';
    tempObject += '"' + dataPool.lastName[tempNum] + '",\n';
    tempNum = getRNG(0,dataPool.job.length);
    tempObject += '        "job": ';
    tempObject += '"' + dataPool.job[tempNum] + '"\n';
    tempObject += '    },\n';
    outputHolder += tempObject;
  }
  outputHolder = outputHolder.substring(0,outputHolder.length-2);
  outputHolder += '\n';
  outputHolder += ']\n';

  console.log(outputHolder);

  $('#outputArea').val(outputHolder);

});

$('#clearButton').click(function(){
  $('#outputArea').val('');
  $('#userNum').val('');
});

$('#selectButton').click(function(){
  $('#outputArea').select();
});
