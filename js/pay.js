$(function(){
    var payment = $(".payment li");
    var radio = $(".payment input");
    var paymentSelectImg = $(".payment_select img");
    var paymentSelectRadio = $(".payment_select input");
    var pwdList = $(".pwd input");
    var confirm = $('#confirm');
    var pay = $(".pay");




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



    getMoney();
    confirmEvent();


    /*从localstorage拿到待支付金额*/
    function getMoney(){
        var _pay = localStorage.getItem("payStr");
        pay.text(_pay);
    }



    payment.click(function(){
        var index = payment.index(this);
        radio.eq(index).prop("checked",true);
        var imgSrc = payment.eq(index).find("img").attr("src");
        paymentSelectImg.attr("src",imgSrc);
        paymentSelectRadio.prop("checked",true);

    });


    pwdList.each(function (i) {
        var _this = $(this);
        if (i < 5) {
            _this.keyup(function () {
                if ($(this).val()) {
                    $(this).next().focus();
                }
            })
        }

        if (i > 0) {
            _this.focus(function () {
                if (!$(this).prev().val() ) {
                    $(this).prev().focus();
                }
            })
        }

        _this.keydown(function(){
            if(event.keyCode == 8){
                _this.val("");
                _this.prev().focus();
            }
        })

    });


    pwdList.eq(5).keyup(function(){
        $(this).blur();
        confirm.focus();
    });

    pwdList.eq(5).focus(function () {
        $(this).val('');
    })

    function confirmEvent(){
        confirm.click(function(){
            window.open("payment_success.html");
        });

    }





});