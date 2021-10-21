$(document).ready(function () {
    $("figure").mouseenter(function(){
     
       $(this).parent().css("color", "red"); 
    }).mouseleave(function(){
     
       $(this).parent().css("color", "black");        
    });
});
