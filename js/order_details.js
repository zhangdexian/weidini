$(function(){
    var sub_tips = $(".sub_tips");
    var sub_menu = $(".sub_menu");




    (function(){
        var cart_num = $(".cart_num");
        var l = localStorage.length;
        var cartNum = l;
        for(var i = 0 ; i < l ;i++){
            if(localStorage.getItem("payStr")){
                cartNum --;
                break;
            }
        }
        cart_num.text(cartNum);
    })();



    sub_tips.click(function() {
        var index = sub_tips.index(this);
        sub_menu.eq(index).find("dd").slideToggle();
    })



});
