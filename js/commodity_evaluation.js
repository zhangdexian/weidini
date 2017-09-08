$(function(){
    var styleSelect = $(".style_select");
    var homeService = $(".home_service");
    var minute = $(".minute");
    var plus = $(".plus");
    var num = $(".num");
    var picLg = $(".pic_lg").find("a");
    var picSm = $(".pic_sm").find("a");
    var prev = $(".prev");
    var next = $(".next");
    var subMenu = $(".menu").find("li");
    var hotSell = $(".side_nav+ul").children("li");
    var pageTransition = $(".page_transition a:not(.next,.prev,.ok)");


/*选择款式*/
    styleSelect.children("div").click(function(){
        $(this).addClass("current").siblings().removeClass();
    });
    homeService.click(function(){
        if($(this).hasClass("home_service")){
            $(this).removeClass("home_service");
        }
        else {
            $(this).addClass("home_service");
        }
    });
    /*购买数量加*/
    plus.click(function(){
        var _num = Number(num.text());
        _num ++;
        num.text(_num);
        if(_num > 1){
            minute.css("color","#000");
        }
    });

    /*购买数量减*/
    minute.click(function(){
        var _num = Number(num.text());
        if (_num > 1) {
            _num --;
        }
        num.text(_num);
        if(_num == 1){
            $(this).css("color","#999999");
        }
    });
/*放大镜小图片*/
    picSm.click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var n = $(this).index();
        picLg.eq(n).css("display","block").siblings().css("display","none");

    });
/*前一张*/
    prev.click(function(){
        var n = picSm.length;
        var index;
        for ( var i = 0; i < n ;i ++){
            if(picSm.eq(i).hasClass("current")){
                 index = i;
            }
        }
        if(index > 0) {
            index -= 1;
        }else{
            index = n-1;
        }
            picSm.eq(index).addClass("current").siblings().removeClass("current");
            picLg.eq(index).css("display","block").siblings().css("display","none");

    });


    next.click(function(){
        var n = picSm.length;
        var index;
        for ( var i = 0; i < n ;i ++){
            if(picSm.eq(i).hasClass("current")){
                index = i;
            }
        }
        if(index == n-1) {
            index = 0;
        }else{
            index += 1;
        }
        picSm.eq(index).addClass("current").siblings().removeClass("current");
        picLg.eq(index).css("display","block").siblings().css("display","none");
    });


    /*商品详情 评价详情 成交记录切换*/
    subMenu.click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    });

    hotSell.click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    });

    pageTransition.click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    });





});
