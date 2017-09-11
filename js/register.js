$(function(){
    var user_name = $("#user_name");
    var pwd = $("#pwd");
    var repwd = $("#repwd");
    var email = $("#email");
    var tel_num = $("#tel_num");
    var identify = $("#identify");

    var userName = /^[a-zA-Z]{1}.{5}$/g;
    var _email = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
    var telNum = /\d{3}-\d{8}|\d{4}-\{7,8}/;


    user_name.blur(function(){
        if(!userName.test(user_name.val())){
            alert("请输入正确的用户名！");
        }
    });


    email.blur(function(){
        if(!_email.test(email.val())){
            alert("请输入正确的邮箱！")
        }
    });

    repwd.blur(function(){
        if(pwd.val() != repwd.val()){
            alert("两次密码输入不一致");
        }
    });

    tel_num.blur(function(){
        if(!telNum.test(tel_num.val())){
            alert("请输入正确的手机号！");
            tel_num.val("");
        }
    });



    var str1 ="";
    identify.next().click(function(e){
        var str = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        var _str ="";
        for(var i = 0; i < 4 ;i ++){
            _str += str[Math.floor(Math.random()*62)];
        }
        str1 = _str;
        e.preventDefault();
        $(this).text(_str);

   })

    identify.blur(function(){
        if($(this).val() != str1){
            alert("验证码输入不正确！");
        }
    })



});