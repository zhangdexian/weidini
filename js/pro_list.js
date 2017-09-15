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


    brandSelect();
    materialSelect();
    selectShutDown();
    selectMoreSwitch();
    priceMinSelect();
    priceMaxSelect();


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
    function priceMinSelect(){
        min_price.focus(function(){
                $(this).select();
        });
        min_price.blur(function(){
            var minprice = Number(min_price.val());
        })
    }
    function  priceMaxSelect(){

    }


});