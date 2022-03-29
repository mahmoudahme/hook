$(function(){
    $("header .container .content .fa-bars").on("click",function(){
       
        $("header .container .content .links").toggle("1000");
    
    });
   $(window).resize(function() {
        
         location.reload();
         return;
   });
});