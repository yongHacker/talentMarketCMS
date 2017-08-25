/*退出登录*/
function Logout() {
    var r=confirm("您确定要退出登录吗？");
    if(r==true){
        window.location.href="login.html";
    }
}

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

/*侧边栏高度=浏览器窗口高度*/
$(function () {
    $(".sidebar .nav").css({height: $(document).height()});
    $(window).resize(function () {
        $(".sidebar .nav").css({height: $(document).height()});
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
