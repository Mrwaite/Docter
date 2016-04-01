/*function check_login(para){
    //2是用户不存在，1是密码错误，0是成功
    if(para == 2){
        $('#into_login').innerHTML='用户名不存在，请重新输入';
        get.byTagName("form")[0].reset();
    }
    else if(para == 1){
        $('#into_password').innerHTML='密码错误，请重新输入';
        get.byTagName("form")[0].reset();
    }
    else if(para == 0){
        window.location.href="";//这里是跳转个人页面的网址
    }
}*/





$(document).ready(function() {

    $('.page-container form').submit(function(){
        console.log(1);
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
		
        if(password == '') {
            $(this).ifind('.error').fadeOut('fast', function(){
                $(ths).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    })


  /*  $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });*/


    /*$('.page-container form .username').blur(function(){
       if($(this).val() !== ""){
           checkRegisterName($(this).val());
       }
    });

    $('#register').click(function(){
        window.location.href="register.html";
    });

     $('#back_login').click(function(){
        window.location.href="login.html";
    });*/

});


