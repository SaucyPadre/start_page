

console.log("hello");

$( document ).ready(function(){
    var giveitaname = false;
    $("#myButton").click(function(){
        if(giveitaname == false){
            $("#sidebar").animate({right: '10%'});
            giveitaname = true;
        }
        else{
            $("#sidebar").animate({left: '10%'});
            giveitaname = false;
        }
    });
});

