/*An exercise where I create an array of anonymous movie objects,
and write a function that prints out */
var Movies = [
    {   seen:true,
        title: "Guardians of the Galaxy 2",
        score: 4    },
    {   seen:false,
        title: "Color of Water",
        score: 5    },
    {   seen:true,
        title: "Batman v Superman",
        score: 2.5   },

];

Movies.forEach(function (movie){
    console.log(buildStringMovie(movie));
});

function buildStringMovie (movie)   {
    var saw ="";
    var result = "You have ";
    if (movie.seen){
        saw = "watched";
    }
    else    
        saw = "not seen";
    result+=saw+" \""+movie.title+"\" - "+movie.score+" stars";
    return result;
}