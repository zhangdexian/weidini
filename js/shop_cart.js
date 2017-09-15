$(function(){
    var order = $("#orderList");
    withdrawOrderItem();
    var checkAll = $(".check_all");
    var checkItem = $(".check_item");
    var subTotal = $(".sub_total");
    var remove = $(".remove");
    var deleteItem = $(".delete_item");
    var total_price = $(".total_price");
    var check = $(".check");
    var num = $(".num");
    var balance = $(".balance");

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

    init();

    checkItemChange();

    checkClickEvent();

    checkAllEvent();

    deleteItemSelected();

    removeItem();

/*本地存储*/
    orderSave ();



    function init(){
        var price = $(".price");
        var count =$(".count");
        var orderList = $("#orderList table");
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

    /*店名与CheckBox关联*/
    function checkClickEvent(){
        check.click(function(){
            var index = check.index(this);
            checkItem.eq(index).trigger("click");
        });
    }


    function checkItemChange(){
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

    }

    function checkAllEvent(){
        checkAll.click(function(){
            if($(this).prop("checked")){
                checkItem.prop("checked",true);
                checkAll.prop("checked",true);
                check.prop("checked",true);

            }else{
                checkItem.prop("checked",false);
                checkAll.prop("checked",false);
                check.prop("checked",false);
            }

            init();
        });
    }


    /*删除选中的商品*/
    function deleteItemSelected(){
        deleteItem.click(function(){
            for(var i = 0, l = orderList.length ; i < l ;i ++){
                if(checkItem.eq(i).prop('checked')){
                    orderList.eq(i).remove();
                }
            }
            init();

        });
    }


   /*删除*/
    function removeItem(){
        remove.click(function(){
            var orderList = $("#orderList table");
            var index = remove.index(this);
            orderList.eq(index).remove();
            init();
        });
    }


/*选中商品存入localStorage*/

    function orderSave(){
            balance.next().click(function(){
            var orderList = $("#orderList table");
                var price = $(".price");
                var count =$(".count");
            var shop_name = $(".shop_name");
            var proImgSrc = $(".pro_info >img");
            var num = 0;
            for(var i = 0, l = orderList.length;i < l ; i++ ){
                var key = localStorage.length;
                if(checkItem.eq(i).prop("checked")){
                    num ++;
                    var orderStr =
                        "<table data-key='"+(key+1)+"'>"
                        +"<tr>"
                        +"<td>"+shop_name.eq(i).text()+"</td>"
                        +"<td>单价</td>"
                        +"<td>数量</td>"
                        +"<td>金额</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td>"
                        +"<img src='"+proImgSrc.eq(i).attr("src")+"'alt=''>"
                        +"<div>"
                        +"<p>白色恋人浴室柜组合洗脸盆柜组合</p>"
                        +"<p>洗手盆洗漱台洗手台 定制一体盆款 </p>"
                        +"</div>"
                        +"</td>"
                        +"<td>"+price.eq(i).text()+"</td>"
                        +"<td>"+count.eq(i).attr("value")+"</td>"
                        +"<td class='sub_total'>"+subTotal.eq(i).text()+"</tdsub_total>"
                        +"</tr>"
                        +"</table>";
                    localStorage.setItem(key+1,orderStr);
                }
            }
            if(num > 0){
                alert("所有商品已加入到购物车");
            }
                window.open("confirm_order.html");
        })
    }

/*取到购物车里的数据并显示*/
    function withdrawOrderItem(){
        var key = localStorage.length;
        var shopCartStr = "";
        for(var i = 0; i < key ; i++){
            if(localStorage.getItem("shop_cart"+(i+1))){
                shopCartStr += localStorage.getItem("shop_cart"+(i+1));
            }
        }
        order.append(shopCartStr);
    }



});