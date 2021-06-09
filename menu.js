function open(){
    $(document).ready(function(){
       $(".lnr").click(function(e){
           $('.menu').toggleClass('open');
           $('.menu').toggleClass('animate');

           e.preventDefault();
       }) 
    });
}

open();