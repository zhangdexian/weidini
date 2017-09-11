$(function(){
    var payment = $(".payment li");
    var radio = $(".payment input");
    var paymentSelectImg = $(".payment_select img");
    var paymentSelectRadio = $(".payment_select input");
    var pwdList = $(".pwd input");
    var confirm = $('#confirm');



    payment.click(function(){
        var index = payment.index(this);
        radio.eq(index).prop("checked",true);
        var imgSrc = payment.eq(index).find("img").attr("src");
        paymentSelectImg.attr("src",imgSrc);
        paymentSelectRadio.prop("checked",true);

    })

/*    pwd.click(function(){
        var _psd = $(".pwd input:first-child");
        _psd.focus();
        $(".pwd input").keyup(function(){
            $(this).blur().next().focus();
        });
    })*/

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

    })


    pwdList.eq(5).keyup(function(){
        $(this).blur();
        confirm.focus();
        console.log('jjjjj')
    });

    pwdList.eq(5).focus(function () {
        $(this).val('');
    })




});