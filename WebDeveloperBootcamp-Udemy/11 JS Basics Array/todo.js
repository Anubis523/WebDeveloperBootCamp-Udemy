var list = [];
window.setTimeout(function()    {
    var input = prompt("What would you like to do");
while (input !== "quit")    {
    if (input === "new")    {
        AddToDo ();
    }
    else if (input === "list") {
        confirm(printArray(list));
    }
    else if (input === "delete")
    {
        DeleteToDo();
    }
    input = prompt("What would you like to do");
}
}, 500);

/* This is a function that takes an array and prints out a long string that
displays the members of the array with their corresponding index number*/
function printArray(array)
{
    var arr = [];
    var index = 0;
    var message = "\n";
    arr = array;
    arr.forEach(item => {
        message+= (index+ ": "+item +"\n");
        index++;
    });
    return message;
}

function AddToDo ()
{
    var entry = prompt ("Add a list entry");
        list.push(entry);
        confirm("Added a TODO entry");
}

function DeleteToDo()   {
    var del = prompt("Which item would you like to delete? (Chose number in \"()\") \n" + printArray(list));
    list.splice(parseInt(del),1)
}
