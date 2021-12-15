function numberToWord()
{
    var condition = false;
    var number;
    var shape;

    number = window.prompt("The Majestic Rhino requests a number between 1-10:");
    if (number > 10 || number < 1)
    {
        condition = true;
    }

    while (condition)
    {
        number = window.prompt("The number you entered was invalid. Please enter a number between 1-10");
        
        if (number <= 10 & number >= 1)
        {
            condition = false;
        }
    }

    shape = getShape(number);
    alert("The shape with that number of sides is " + shape);

}



function getShape(sides)
{
    if (validateEntry(sides))
    {
        if (sides == 1)
        {
            return "does not exist";
        }
        else if (sides == 2)
        {
            return "does not exist";
        }
        else if (sides == 3)
        {
            return "Triangle";
        }
        else if (sides == 4)
        {
            return "Quadrilateral";
        }
        else if (sides == 5)
        {
            return "Pentagon";
        }
        else if (sides == 6)
        {
            return "Hexagon";
        }
        else if (sides == 7)
        {
            return "Heptagon";
        }
        else if (sides == 8)
        {
            return "Octagon";
        }
        else if (sides == 9)
        {
            return "Nonagon";
        }
        else if (sides == 10)
        {
            return "Decagon";
        }

    }
    
}



function validateEntry(num)
{

    if (num <= 10 & num >= 1)
    {
        return true;
    }
    
}
