function isEven(x)
{
    return x%2===0;
}

function factorial (y){
    //higher complexity
    if(y===1 || y === 0)
    {
        return 1;
    }
    // else
    // {
    //     return y * factorial(y-1);
    // }

    //using an incrementing loop
    var result = 1;
    for (var i = 2; i<=y; i++)
    {
        result *= i;
    }
    return result;

    //using a decrementing loop
    // if (y === 0) //too many steps the 2nd is best!!
    // {
    //     return 1;
    // }

    // var result = y;
    // for (var i = y-1; i >= 1; i--)
    // {
    //     result *= i;
    // }
    // return result;
}

function kebabToSnake(z)
{
    //note to self learn regular expressions
    var result = z.replace(/-/g,"_");
    return result;
}