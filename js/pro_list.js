$(function(){
    var brand = $("#brand dd");
    var material = $("#material dd");
    var fix_method = $("#fix_method dd");
    var brand_selected = $(".brand_selected");
    var material_selected = $(".material_selected");
    var shut_down = $(".shut_down");
    var select_more = $(".select_more");
    var flag = 0;
    var min_price = $(".min_price input");
    var max_price = $(".max_price input");
    var pro_item = $(".pro_list li");
    var inputKeyword = $("#inputKeyword");
    var searchKeyword = $("#searchKeyword");




    brandSelect();
    materialSelect();
    selectShutDown();
    selectMoreSwitch();
    priceSelect();


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
    /*选择品牌*/
    function brandSelect(){
        brand.click(function(){
            var _brand = $(this).text();
            if(flag == 0){
                brand_selected.text(_brand);
                brand_selected.parent().css("display","block");
            }else{
                var brandSelectedMore = brand_selected.parent();
                brandSelectedMore.clone(true).find(".brand_selected").text(_brand).end().insertAfter(brandSelectedMore);
            }
        })
    }
    /*选择材质*/
    function materialSelect(){
        material.click(function(){
            var _material = $(this).text();
            if(flag == 0){
                material_selected.text(_material);
                material_selected.parent().css("display","block");
            }else{
                var materialSelectedMore = material_selected.parent();
                materialSelectedMore.clone(true).find(".material_selected").text(_material).end().insertAfter(materialSelectedMore);
            }

        })
    }

    /*关闭按钮*/
    function selectShutDown(){
        shut_down.click(function(){
            $(this).parent().css("display","none");
        })
    }

    /*多选*/
    function selectMoreSwitch(){
        select_more.eq(0).click(function(){
            if(flag == 0){
                flag = 1;
                $(this).css("background-color","#cecece");
            }else{
                flag = 0;
                $(this).css("background-color","#f4f4f4");
                brand_selected.parent().siblings(":contains(品牌)").detach();
            }
        });
        select_more.eq(1).click(function(){
            if(flag == 0){
                flag = 1;
                $(this).css("background-color","#cecece");
            }else{
                flag = 0;
                $(this).css("background-color","#f4f4f4");
                material_selected.parent().siblings(":contains(材质)").detach();
            }
        })
    }

    /*价格筛选*/
    function priceSelect() {
        var minprice;
        var maxprice;
        var price = $(".price");

        priceMinSelect();
        priceMaxSelect();

        function priceMinSelect() {
            min_price.blur(function () {
                minprice = Number(min_price.val());
                maxprice = Number(max_price.val());
                price.each(function (i) {
                    var _price = parseInt(price.eq(i).text().replace("￥", ""));
                    if (!maxprice) {
                        if (minprice > 0) {
                            if (_price < minprice) {
                                $(this).parent().css("display", "none");
                            } else {
                                $(this).parent().css("display", "block");
                            }
                        } else {
                            return false;
                        }
                    } else if (maxprice > minprice) {
                        if (_price > minprice && _price < maxprice) {
                            $(this).parent().css("display", "block");
                        } else {
                            $(this).parent().css("display", "none");
                        }
                    } else {
                        return false;
                    }

                })
            });
        }
        function priceMaxSelect() {
            max_price.blur(function () {
                minprice = Number(min_price.val());
                maxprice = Number(max_price.val());
                price.each(function (i) {
                    var _price = parseInt(price.eq(i).text().replace("￥", ""));
                    if (!minprice) {
                        if (maxprice > 0) {
                            if (_price > maxprice) {
                                $(this).parent().css("display", "none");
                            } else {
                                $(this).parent().css("display", "block");
                            }
                        } else {
                            return false;
                        }
                    } else if (minprice < 0) {
                        return false
                    } else {
                        if (minprice < maxprice) {
                            if (_price < maxprice && _price > minprice) {
                                $(this).parent().css("display", "block");
                            } else {
                                $(this).parent().css("display", "none");
                            }
                        } else {
                            return false
                        }

                    }
                });
            });
        }
    }

    /*存储需要拿到pro_center内的数据*/


    /*关键字搜索*/


});