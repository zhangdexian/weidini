;(function (win, $) {
    var star = function (obj) {
        this.obj = $(obj);
        this.num = 2;
        this.desc = this.obj.find('dd');
        this.start ();
        this.mouseMoveEvent ();
    };
    star.prototype = {

        mouseMoveEvent : function () {
            var _this = this;
            _this.desc.bind("mouseover",function(){
                var index = _this.desc.index(this);
                $(this).addClass("light_on");
                _this.desc.eq(index).prevAll().addClass("light_on").end().nextAll().removeClass("light_on");
            }).bind("click",function(){
                _this.num = _this.desc.index(this) + 1;
            }).bind('mouseout', function () {
                _this.desc.removeClass("light_on");
                _this.start(_this.num);
            })
        },
        start : function () {
            var _this = this;
            this.desc.each(function(i){
                if(i < _this.num ){
                    $(this).addClass("light_on");
                }
            })
        }
    };
    star.init = function (obj) {
        var _vm = this;
        for (var i = 0, l = obj.length; i < l; i++) {
            new _vm(obj[i]);
        }
    };
    win['MyStar'] = star;
})(window, jQuery);

MyStar.init($('.desc'));


$(function(){
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
});

