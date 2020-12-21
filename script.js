// chalenge one : age in days

function ageIndays() {
    var birthYear = prompt('What is your birth year?'); 
    var age = 2020 - birthYear;
    var noOfLeapYears = age/4;
    var ageinDays = age*365 + noOfLeapYears;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageinDays + 'days old....');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
   
}

function reset() {
    document.getElementById('ageinDays').remove();
}

 
