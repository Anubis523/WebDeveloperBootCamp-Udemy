// confirm("This is a window");
//Check off specific todos by clicking them

// $(document).ready(function(){
    $('ul').on("click",'li', function () {   //on doesn't work atm

    $(this).toggleClass('completed');
    //sets style once
    // $(this).css('text-decoration', 'line-through');
    // $(this).css('color','gray');

    //conditional that toggles based on the evaluation of a conditional
    // if ($(this).css('color')==='rgb(128, 128, 128)')
    // {
    //     $(this).css(
    //         {
    //             color:'black',
    //             textDecoration:'none'
    //         }
    //     );
    // }
    // else
    // {
    //     $(this).css(
    //         {
    //             color:'gray',
    //             textDecoration:'line-through'
    //         }
    //     );
    // }
    
    //sets values once by passing an object literal
    // $(this).css(
    //     {
    //         color:'gray',
    //         textDecoration:'line-through'
    //     }
    // )
});

$('ul').on("click",'span',function (event) { //can only work in the context of using an item that already exists, then using the affected part as the selector
    // confirm("Span selected");
    // $(this).parent().remove();
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();    //stops event bubbling
});

$("input[type ='text']").keypress(function (event) {
    if (event.which === 13)
    {
        // confirm("enter pressed");
        let todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li><span><i class=" fas fa-times-circle"/></i></span> '+todoText+"</li>");
    }
});

$(".fa-edit").click(function(){
    $("input[type ='text']").fadeToggle(200);
});
// });
