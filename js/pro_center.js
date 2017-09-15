$(function(){
    var styleSelect = $(".style_select");
    var homeService = $(".home_service");
    var minute = $(".minute");
    var plus = $(".plus");
    var num = $(".num");
    var price = $(".price");
    var picLg = $(".pic_lg").find("a");
    var picSm = $(".pic_sm").find("a");
    var prev = $(".prev");
    var next = $(".next");
    var subMenu = $(".menu").find("li");
    var hotSell = $(".side_nav+ul").children("li");
    var pageTransition = $(".page_transition a:not(.next,.prev,.ok)");
    var pic_sm = $(".pic_sm a img");

    var imgSrc;
    var buynow = $(".buynow");
    var addshopcart = $(".addshopcart");


    orderSave();
    setPicEvent();
    addToShopCart();
    subMenuEvent();


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
    function setPicEvent() {
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
                backgroundPosition : -hx * be + 'px ' + (-hy * be) + 'px',
                backgroundImage :"url('img/pro_center01.png')"
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
    }

    /*加入购物车*/
    function addToShopCart(){
        addshopcart.click(function(){
            var key = localStorage.length;
            var proImgSrc = picSm.find("img").attr("src");
            var orderStr =
            "<table data-key='"+(key+1)+"'>"
                +"<tr>"
                +"<td><input type='checkbox' class='check'></td>"
                   +"<td colspan='5' class='shop_name'>白色恋人官方旗舰店 <img src='img/pro_center08.png' alt=''></td>"
                    +"</tr>"
                    +"<tr>"
                    +"<td><input type='checkbox' class='check_item'></td>"
                    +"<td>"
                    +"<div><p><span>满减</span>活动商品已购满￥1000.00 (<span>已减￥200.00</span>)<a href='javascript:;'>>  去凑单 ></a></p></div>"
                    +"<div class='pro_info'>"
                    +"<img src='"+proImgSrc+"' alt=''>"
                    +"<div>"
                    +"<p>白色恋人浴室柜组合洗脸盆柜组合<span>颜色：定制一体盆款</span></p>"
                +"<p>洗手盆洗漱台洗手台 定制一体盆款 </p>"
               +"<p><img src='img/cart03.png' alt=''>不支持7天无理由退货</p>"
                    +"</div>"
                    +"</div>"
                    +"<p>【送装服务】送货上门安装</p>"
                +"</td>"
                +"<td class='price'>"+price.text()+"</td>"
                +"<td><input type='text' value='"+num.text()+"' class='count'></td>"
                    +"<td class='sub_total'></td>"
                +"<td class='remove'>删除</td>"
                    +"</tr>"
                    +"<tr>"
                    +"<td colspan='6'><span>运费</span>本组商品已免运费</td>"
                    +"</tr>"
                    +"</table>";

            localStorage.setItem("shop_cart"+(key+1),orderStr);
            (function(){
                var cart_num = $(".cart_num");
                var l = localStorage.length;
                cart_num.text(l);
            })();
            alert("此件商品已加入到购物车");
        })

    }

    /*立即购买*/
    function orderSave(){
        buynow.click(function(){
            var proImgSrc = picLg.find("img").attr("src");
            console.log(proImgSrc)
            var key = localStorage.length;
            var _price = Number(price.text().replace("￥",""));
                _price = _price.toFixed(2);
            var _num = Number(num.text());
            var _subTotal = _num*_price;
            _subTotal = _subTotal.toFixed(2);
            var subTotalStr = "￥"+_subTotal;
            var orderStr =
                "<table data-key='"+(key+1)+"'>"
                +"<tr>"
                +"<td>白色恋人官方旗舰店</td>"
                +"<td>单价</td>"
                +"<td>数量</td>"
                +"<td>金额</td>"
                +"</tr>"
                +"<tr>"
                +"<td>"
                +"<img src='"+proImgSrc+"'alt=''>"
                +"<div>"
                +"<p>白色恋人浴室柜组合洗脸盆柜组合</p>"
                +"<p>洗手盆洗漱台洗手台 定制一体盆款 </p>"
                +"</div>"
                +"</td>"
                +"<td>"+price.text()+"</td>"
                +"<td>"+num.text()+"</td>"
                +"<td class='sub_total'>"+subTotalStr+"</tdsub_total>"
                +"</tr>"
                +"</table>";
            localStorage.setItem("buynow"+(key+1),orderStr);
            (function(){
                var cart_num = $(".cart_num");
                var l = localStorage.length;
                cart_num.text(l);
            })();
            window.open("confirm_order.html");
        })
    }

    /*商品详情 评价详情 成交记录切换*/
    function subMenuEvent(){
        subMenu.click(function(){
            $(this).addClass("current").siblings().removeClass("current");
        });
    }







});

