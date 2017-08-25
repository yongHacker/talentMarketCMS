/*图片验证码*/
/*全局设置*/
var code;
var codeResult;
function createCode() {
    code = "";
    var checkCode=document.getElementById("checkCode");
    function RndNum (n) {
        var rnd="";
        for(var i=0;i<n;i++){
            rnd += Math.floor(Math.random()*10);
        }
        return rnd;
    }

    var num=RndNum(2);
    var num2=RndNum(1);

    code = num + "+" + num2 + "=" + "?" ;
    codeResult =parseInt(num) + parseInt(num2);

    if(checkCode){
        checkCode.className="code";
        checkCode.value=code;
    }
}

/*执行*/
$(function () {
    createCode();
    /*登录验证码*/
    $("#loginCode").blur(function () {
        var inputCode=$(this).val();
        if(inputCode.length <= 0){
            alert("请输入验证码！");
        }else if(inputCode != codeResult){
            alert("验证码输入错误");
            createCode();
            $(this).val("");
        }else{

        }
    });
    /*注册验证码*/
    $("#registerCode").blur(function () {
        var inputCode=$(this).val();
        if(inputCode.length <= 0){
            alert("请输入验证码！");
        }else if(inputCode != codeResult){
            alert("验证码输入错误");
            createCode();
            $(this).val("");
        }else{

        }
    });
});

/*手机短信验证码*/
/*全局设置*/
var IntervalObj;//定时器变量
var count=60;
var curCount;

function sendMessage() {
    curCount=count;
    $("#btnSendCode").attr("disabled","true");
    $("#btnSendCode").val(curCount + "秒后重发");
    IntervalObj = window.setInterval(setRemainTime,1000);
    //用ajax向后台发送数据
    $.ajax({
        type:"POST",
        dataType: "text",
        url: "",
        data: $("#registerPhone").val(),
        error: function (XMLHttpRequest,textStatus,errorThrown) {
            alert("手机号提交数据失败："+ textStatus);
        },
        success: function (data) {
            alert("返回的数据"+data);
            var msgCorrectCode=data;
            alert("手机收到的验证码"+msgCorrectCode);
        }
    });
}

function setRemainTime() {
    if (curCount == 0){
        window.clearInterval(IntervalObj);
        $("#btnSendCode").prop("disabled",false);
        $("#btnSendCode").val("重新发送");
    }else{
        curCount--;
        $("#btnSendCode").val(curCount + "秒后重发");
    }
}