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
    var pic_sm = $(".pic_sm a img");

    var imgSrc;




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
    picSm.hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var n = $(this).index();
        picLg.eq(n).css("display","block").siblings().css("display","none");
        imgSrc = pic_sm.eq(n).attr("src");
        $(".pic_lg a img").eq(n).attr("src",imgSrc);

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


    /*放大镜*/

    var box = $('#box');
    var target = $('<div class="target"></div>');
    var hbox = $('<div class="hbox"></div>');
    var body = $('body');
    var bw = box.width();
    var bh = box.height();
    var be = 2.5;
    var hw = bw / be;
    var hh = bh / be;
    var top = 0;
    var left = 0;






    body.append(target);
    hbox.appendTo(box);
    box.mousemove(function (e){
        var _vm = $(this);
        top = _vm.get(0).getBoundingClientRect().top;
        left = _vm.get(0).getBoundingClientRect().left;

        var cx = e.clientX - left;
        var cy = e.clientY - top;
        var hx = cx - hw / 2;
        var hy = cy - hh / 2;

        if (hx < 0) {
            hx = 0;
        } else if (hx > bw - hw) {
            hx = bw - hw;
        }
        if (hy < 0) {
            hy = 0;
        } else if (hy > bh - hh) {
            hy = bh - hh;
        }
        hbox.css({
            left : hx + 'px',
            top : hy + 'px'
        });
        target.css({
            backgroundPosition : -hx * be + 'px ' + (-hy * be) + 'px'
        })

    }).hover(function (e) {
        var _vm = $(this);
        top = _vm.get(0).getBoundingClientRect().top;
        left = _vm.get(0).getBoundingClientRect().left;
        target.css({
            display : 'block',
            width : bw + 'px',
            height : bh + 'px',
            left : left + bw +20+ 'px',
            top : top + 'px',
            backgroundImage : 'url("' + imgSrc + '")',
            backgroundSize : bw * be + 'px ' + bh * be + 'px',
            backgroundPosition : '0px 0px'
        });
        hbox.css({
            display : 'block',
            width : hw + 'px',
            height : hh + 'px'
        })
    }, function (e) {
        target.css({'display' : 'none'});
        hbox.css({'display' : 'none'});
    });





});

