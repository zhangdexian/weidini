$(function(){
   var address = $(".receive_address >div:not(:last-child)");




    address.click(function(){
        console.log("fff")
    $(this).addClass("select").siblings().removeClass("select");
});


});