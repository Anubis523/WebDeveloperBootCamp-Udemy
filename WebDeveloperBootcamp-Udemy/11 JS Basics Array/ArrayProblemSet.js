
console.log("CONNECTED");

function printReverse(array)    {
    for (var i = array.length-1; i>=0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array)   {
    var eval = false;
    var match = array[0];
    //this one works too
    // array.forEach(item => {
    //     if (match === item)
    //     {
    //         eval = true;
    //     }
    //     else{
    //         eval = false;
    //         break;
    //     }
    // });
    for (var i = 0; i < array.length ; i++)  {
        if (match === array[i])
        {
            eval = true;
        }
        else{
            eval = false;
            break;
        }
    }
    return eval;
}

printReverse([0,1,2,3,4]);
//summation of all numbers from 1 to n
function summation(array)    {
    var result = 0;
    for (var i = 0; i < array.length;i++)
    {
        result += array[i];
    } 
    return result;
}

function max(array)
{
    var high = 0;
    array.forEach(element => {
        if (element > high)
        {
            high = element;
        }
    });
    return high;
}