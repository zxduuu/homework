/**
 * Created by tutu on 16/10/24.
 */


var cookie_name = "baidu";//假如获取到的值为baidu
var cookie_pwd = "123";
$(document).ready(function () {
    $("#submit_btn").click(function () {
        var name = $("#username").val();
        var password = $("#usercode").val();
        if (cookie_name == name && cookie_pwd == password) {
            // alert("登录成功");
            // $(function () {
            window.location.href = "baidu.html";
            window.event.returnValue = false;  //不能跳转后的解决办法
            }
        // )
        else
            {
                alert("用户名或密码不正确！");
            }
        });

});