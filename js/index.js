/**
 * Created by 徳贤 on 2017/9/2.
 */
$(function(){
    var sort = $("#sort h3");
    var sub_nav = $(".sub_nav");
    var sortIsClick = 0;
    var body = $("body");



    sub_nav.click(function(event){
        event.stopPropagation();
    });

    sort.click(function(event){
        event.stopPropagation();
        if(sortIsClick == 0){
            sortIsClick = 1;
            sub_nav.slideDown("fast");
            sort.find("span").css("transform","rotate(-90deg)");
        }
        else {
            sortIsClick = 0;
            sub_nav.slideUp("fast");
            sort.find("span").css("transform","rotate(90deg)");
        }
    });

   /* 点击其他位置商品分类的弹出菜单消失*/
    body.click(function() {
        if (sortIsClick == 1) {
            sortIsClick = 0;
            sub_nav.css("display", "none");
            sort.find("span").css("transform","rotate(90deg)");
        }
    });


    /*阻止冒泡*/
    /*sort.click(function(event){
    if(sortIsClick == 0){
        sortIsClick = 1;
        sub_nav.css("display","inline-block");
    }
    else {
        sortIsClick = 0;
        sub_nav.css("display","none");
    }
    event.stopPropagation();
});*/


});