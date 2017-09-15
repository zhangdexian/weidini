$(function() {
    var prov = $("#prov");
    var city = $("#city");
    var county = $("#county");

    var sub_tips = $(".sub_tips");
    var sub_menu = $(".sub_menu");

    getProv();
    provChange();
    cityChange();
    menuCollapse();


    function getProv() {
        var _prov = "";
        _prov = "<option value='0'>省/直辖市</option>";
        var l = PROV.length;
        for (var i = 0; i < l; i++) {
            _prov += "<option value='" + PROV[i].ProID + "'>" + PROV[i].name + "</option>";
        }
        prov.html(_prov);
    }

    function provChange() {
        prov.change(function () {
            var provId = prov.val();
            var len = CITY.length;
            var _city = "";
            _city = "<option value='0'>市</option>";
            for (var i = 0; i < len; i++) {
                if (CITY[i].ProID == provId) {
                    _city += "<option value='" + CITY[i].CityID + "'>" + CITY[i].name + "</option>";
                }
            }
            city.html(_city);
        })

    }

    function cityChange(){
        city.change(function () {
                var cityId = city.val();
                var len = COUNTY.length;
                var _county = "";
                _county = "<option value='0'>区/县</option>";
                for (var i = 0; i < len; i++) {
                    if (COUNTY[i].CityID == cityId) {
                        _county += "<option value='" + COUNTY[i].ID + "'>" + COUNTY[i].DisName + "</option>";
                    }
                    county.html(_county);
                    console.log(_county)
                }
            })
    }

/*左面菜单的折叠*/
    function menuCollapse(){
        sub_tips.click(function() {
            var index = sub_tips.index(this);
            sub_menu.eq(index).find("dd").slideToggle();
        })
    }
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


