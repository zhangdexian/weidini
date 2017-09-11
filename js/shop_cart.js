$(function(){
    var checkAll = $(".check_all");
    var checkItem = $(".check_item");
    var price = $(".price");
    var count =$(".count");
    var subTotal = $(".sub_total");
    var remove = $(".remove");
    var deleteItem = $(".delete_item");
    var total_price = $(".total_price");
    var check = $(".check");
    var num = $(".num");
    var orderList = $("#orderList table");

    init();

    function init(){
        var totalPrice = 0;
        var  _count;
        var _price;
        var _subTotal =[];
        var _num = 0;
        for(var i = 0, l = count.length;i < l; i ++){
            _count= count.eq(i).val();
            _price= price.eq(i).text().replace('￥', '');
            _price = parseFloat(_price);
            _subTotal[i] = _count * _price;
            if(checkItem.eq(i).prop("checked")){
                totalPrice +=_subTotal[i];
                _num++ ;
            }
            _subTotal[i] = _subTotal[i].toFixed(2);
            var str = "￥"+_subTotal[i];
            subTotal.eq(i).text(str);
        }
        num.text(_num);
        totalPrice = totalPrice.toFixed(2);
        var str1 = "￥"+totalPrice;
        total_price.text(str1);
    }


    check.click(function(){
        var index = check.index(this);
        checkItem.eq(index).trigger("click");
    });

    checkItem.change(function(){
        var flag = 0;
        init();
        if($(this).prop("checked")){
            flag = 1
        }else{
            flag = 0;
        }
        var index = checkItem.index(this);

        check.eq(index).prop("checked",flag);
    });

    checkAll.click(function(){
        if($(this).prop("checked")){
            checkItem.prop("checked",true);
            checkAll.prop("checked",true);
        }else{
            checkItem.prop("checked",false);
            checkAll.prop("checked",false);
        }

        init();
    })


    /*删除选中的商品*/
    deleteItem.click(function(){
        for(var i = 0, l = orderList.length ; i < l ;i ++){
            if(checkItem.eq(i).prop('checked')){
                orderList.eq(i).remove();
            }
        }
        init();
    })

   /*删除*/
    remove.click(function(){
        var index = remove.index(this);
        orderList.eq(index).remove();
    })



});