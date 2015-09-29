//to be replaced by a JSON file called through ajax at a later date
var dataPool = {
  firstName: ["Alison", "Bob", "Susan", "Anthony", "Samantha", "Daniel", "Jack", "Leigh", "Brian", "Christopher", "Steven", "Albert"],
  lastName: ["Stevenson", "Johnson", "Cox", "Smith", "Cooke", "Carter", "Jackson", "Akers", "Stiles", "Anderson", "Addams", "Samuels"],
  job: ["teacher", "dentist", "web developmer", "artist", "internet troll", "writer", "mathmetician", "project manager"],
  emailDomain: ["gmail.com", "hotmail.com", "aol.com", "fakemail.org"]
};

//defines RNG generator for this app
function getRNG(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

//empties all forms to be called on document load and via the clear button
function clearOut() {
  $('#outputArea').val('');
  $('#userNum').val('');
  $('#customEmail').val('');
  $('#firstNameCheck').prop('checked', false);
  $('#lastNameCheck').prop('checked', false);
  $('#job').prop('checked', false);
  $('#email').prop('checked', false)
}

//clears out everything when document loads
$(document).ready(function(){
    clearOut();
});

//keeps user from being able to enter anything other than numbers into user number field
$('#userNum').keyup(function(){
  if (!$.isNumeric($('#userNum').val())){
    $('#userNum').val('');
  }
});


$('#generateButton').click(function(){
  var totalUsers;
  var outputHolder = '[\n'; //resets output in case user generates a new set of data

  if ($('#userNum').val() === 0 || $('#userNum').val() === "") {
    totalUsers = getRNG(1,11);  //generates random value (up to 10) if 0 or nothing is in form prompt
  } else {
    totalUsers = $('#userNum').val();
  }

//throws up error if user has not checked any boxes
if (!$('#firstNameCheck').prop('checked') && !$('#lastNameCheck').prop('checked') && !$('#job').prop('checked') && !$('#email').prop('checked')) {
  outputHolder = 'You need to check at least one box';
} else {

  for (i=0; i < totalUsers; i++){
    var tempObject = "";
    var tempNum = "";
    var fullName =""; //holds names to build e-mail string
    tempObject += '    {\n';

    if ($('#firstNameCheck').prop('checked')){
      tempNum = getRNG(0,dataPool.firstName.length);
      tempObject += '        "firstName": ';
      tempObject += '"' + dataPool.firstName[tempNum] + '",\n';
      fullName += dataPool.firstName[tempNum];
    }

    if ($('#lastNameCheck').prop('checked')){
      tempNum = getRNG(0,dataPool.lastName.length);
      tempObject += '        "lastName": ';
      tempObject += '"' + dataPool.lastName[tempNum] + '",\n';
      fullName += dataPool.lastName[tempNum];
    }

    if ($('#job').prop('checked')){
      tempNum = getRNG(0,dataPool.job.length);
      tempObject += '        "job": ';
      tempObject += '"' + dataPool.job[tempNum] + '",\n';
    }

    if ($('#email').prop('checked')){
      if (fullName === ""){
        fullName = "example"; //if user did not choose to generate a name
      }
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
    }

    tempObject += '    },\n';
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
