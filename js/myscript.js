$(document).ready(function () {
    $("figure").mouseenter(function(){
     
       $(this).parent().css("color", "#e61c60"); 
    }).mouseleave(function(){
     
       $(this).parent().css("color", "black");        
    });
});
