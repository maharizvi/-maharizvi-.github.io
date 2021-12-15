alert("running");

var salaries = [];
var people = [];

var average = 0;
var total = 0;
var maxSalary = 0;

function addSalary()
{
    var inputSalary = document.getElementById("salaryNum").value;
    var inputName = document.getElementById("employee").value;


    salaries.push(inputSalary);
    people.push(inputName);

}

function displayResults()
{

    total = 0;
    for(var i = 0; i < salaries.length; i++) 
    {
        total += salaries[i];
    }

    average = total / salaries.length;

    
    

    

    document.getElementById("results").innerHTML = "Average value:" + average + " Highest value: " + maxSalary + " Total: " + total;

}

function displaySalary()
{

}


