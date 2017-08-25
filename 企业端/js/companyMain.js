/*退出登录*/
function Logout() {
    var r=confirm("您确定要退出登录吗？");
    if(r==true){
        window.location.href="login.html";
    }
}

/*表格全选效果*/
$(function(){
    /*table每行点击效果*/
    $("tr").click(function(){
        $(this).find("input").prop("checked",function(event){
            if ($(this).prop("checked")){
                $(this).prop("checked",false);
            }else{
                $(this).prop("checked",true);
            }
        });
    });
    /* 全选按钮效果*/
    $("#pName").click(function (event) {
        $(".table").find("input").prop("checked",$(this).prop("checked"));
    });
});

/*日历控件*/
$(function () {
    $(".form_datetime").datetimepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        showMeridian: true,
        pickerPosition: "bottom-left",
        language: 'zh-CN',//中文，需要引用zh-CN.js包
        startView: 2,//月视图
        minView: 2//日期时间选择器所能够提供的最精确的时间选择视图
    });
});

/*侧边栏点击效果*/
$(function () {
    /*一级菜单点击*/
    $(".nav-sidebar>li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".collapse>li").removeClass("selected");
        /* 箭头的动作*/
      /*$(".sidebar > .nav > li").find(".icon").toggleClass("glyphicon glyphicon-menu-down");*/
       if($(this).find(".icon").attr("class").indexOf("glyphicon-menu-right") >= 0 ){
            $(this).find(".icon").attr("class","pull-right glyphicon glyphicon-menu-down icon");
        }else{
            $(this).find(".icon").attr("class","pull-right glyphicon glyphicon-menu-right icon");
        }
    });
    /*二级菜单点击*/
    $(".sidebar .collapse > li").click(function () {
        $(this).css({"background-color":"#132140"});
        $(".sidebar .collapse > li").removeClass("selected");
        $(this).addClass("selected").siblings("li").removeClass("active");
    });
    /*侧边栏固定高度*/
    $(".sidebar .nav").css({"height":300+$(document).height()});
});

$(function () {
    /*修改账号信息---companyManagerUser.html*/
    $("#setName").click(function (event) {
        $("#setUserName").val("").removeProp("disabled").focus();
    });
    $("#setPsw").click(function (event) {
        $("#setUserPsw").val("").removeProp("disabled").focus();
    });
    $("#setEmail").click(function (event) {
        $("#setUserEmail").val("").removeProp("disabled").focus();
    });
    $("#setNumber").click(function (event) {
        $("#setUserNumber").val("").removeProp("disabled").focus();
    });
});

/*删除消息*/
$(function () {
   $(".delete-msg").click(function () {
        $(this).parent().parent().parent().remove();
   });
});

/*modal弹窗层居中*/
function centerModals() {
    $(".modal").each(function (i) {
        var $clone=$(this).clone().css({"display":"block"}).appendTo("body");
        var top=Math.floor(($clone.height() - $clone.find(".modal-content").height())/2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find(".modal-content").css("margin-top",top);
    });
}
$(function () {
    $(".modal").on("show.bs.modal",centerModals);
    $(window).on("resize",centerModals);
});

