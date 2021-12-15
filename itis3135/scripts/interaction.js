function welcome()
{

    var companyName = "Majestic Rhinos"

    
    var name = window.prompt("What is your name?");
    var mood = window.prompt("How are you doing today?");


    var date = new Date();
	var currentDate = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();


    
	var time = date.getTime();
	var hours = date.getHours();

	if(hours == 0) {
		hours = 12;
	}
	else {
		hours = hours % 12;
	}

	var timeResult = " " + hours + ":" + date.getMinutes();

    
    document.write("Today is: " + currentDate + ". It is currently: " + timeResult + ". The " + companyName + " company welcomes you, " + name + "! We're glad to know you are doing " + mood);

}

function age()
{
    var age = window.prompt("How old are you?");

    if (age > 200)
    {
        alert("You cannot join our company, sorry!");
    }
    else{
        alert("You can join our company!");
    }
}

function cost()
{
    var amount = window.prompt("How many services do you need?");
    var cost = window.prompt("What is your budget per service?");

    var total = amount * cost;

    alert("The total estimated cost is: " + total);

}

function coupon()
{
    var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    if (random == 1)
    {
        alert("You get a free logo design!")
    }
    else if (random == 2)
    {
        alert("You get a free set of business cards!")
    }
    else if (random == 3)
    {
        alert("You get a free website consultation!")
    }
    else if (random == 4)
    {
        alert("You get a free service with purchase!!")
    }
}

function sum()
{
    var first = window.prompt("Enter first number");
    var second = window.prompt("Enter second number")

    var total = +first + +second;

    alert("The total is: " + total);
}

function favoriteWeather()
{
    var randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    var favorite = window.prompt("What is your favorite weather?");

    if (randomNumber == 1)
    {
        alert("Me too!");
    }
    else
    {
        alert("Not me!")
    }
}