$(function(){
    var orderList = $(".shop_list form");
    getData();
    withdrawBuyNowEvent();
    var address = $(".receive_address >div:not(:last-child)");
    var sub_total = $(".sub_total");
    var total = $(".total");
    var discount = $(".discount");
    var pay = $(".pay");
    var submit = $("[type=submit]");



    chooseAddress();
    calTotal();
    setSubmitEvent();


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

    /*选择发货地址*/
    function chooseAddress(){
        address.click(function(){
            $(this).addClass("select").siblings().removeClass("select");
        });
    }

    /*获取LocalStorage中的内容*/

    function getData(){
        var l = localStorage.length;
        var orderStr="";
        for(var i = 0; i < l ;i++){
            if(localStorage.getItem(i+1)){
                orderStr += localStorage.getItem(i+1);
            }
        }
        orderList.prepend(orderStr);
    }

    /*计算总价*/
    function calTotal() {
        var l = localStorage.length;
        var subTotal = 0;
        var _discount =parseInt(discount.text().replace("￥",""));
        for (var i = 0; i < l; i++) {
            subTotal += Number(sub_total.eq(i).text().replace("￥", ""));
        }
        var _subTotal = subTotal.toFixed(2);
        var totalStr = "￥"+ _subTotal;
        total.text(totalStr);
        if(_subTotal != "0.00"){
            var _pay = (subTotal + _discount).toFixed(2) ;
        }else{
            _pay = _subTotal;
        }
        payStr = "￥"+ _pay;
        pay.text(payStr);

    }


   /*提交订单*/

    function setSubmitEvent(){
        submit.click(function(){
            localStorage.clear();
            localStorage.setItem("payStr",payStr);
            window.open("pay.html");
        })
    }

    /*收取从立即购买过来的数据*/

    function withdrawBuyNowEvent(){
        var key = localStorage.length;
        for(var i =0 ;i < key ; i++){
            if(localStorage.getItem("buynow"+(i+1))){
                var buyNowStr = localStorage.getItem("buynow"+(i+1))
                orderList.prepend(buyNowStr);
        }


        }
    }







});