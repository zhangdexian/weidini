$(function(){
    var checkAll = $(".check_all");
    var checkItem = $(".check_item");
    var price = $(".price");
    var count =$(".count");
    var subTotal = $(".sub_total");
    var remove = $(".remove");
    var deleteItem = $(".delete_item");
    var total_price = $(".total_price");


    init();
    checkItemClickEvent();

    function init(){
        for( var i = 0 ,l = count.length; i < l ; i ++ ){
            var  _count = Number(count.eq(i).val());
            var _price = Number(price.eq(i).text().replace('￥', ''));
            var _subTotal = _count * _price;
                _subTotal = _subTotal.toFixed(2);
            var str = "￥"+_subTotal;
            subTotal.eq(i).text(str);
        }

    }
    function checkItemClickEvent (){
        checkItem.click(function(){
            var _total_price = 0;
            for(var i = 0, l = count.length;i < l; i ++){
                if(checkItem.eq(i).checked){
                    var  _count = Number(count.eq(i).val());
                    var _price = Number(price.eq(i).text().replace('￥', ''));
                    var _subTotal = _count * _price;
                    _subTotal = _subTotal.toFixed(2);
                    _total_price +=_subTotal;
                    console.log("_total_price");
                }
            }
            var str = "￥"+_total_price;
            total_price.text(str);
        });


    }
});