$().ready(function(){
           /* 自定义rules */
            /*字母+数字*/
            jQuery.validator.addMethod("alnum", function(value, element){
                return this.optional(element) ||/^[a-zA-Z0-9]+$/.test(value);
            }, "只能包括英文字母和数字");
            /*手机号码*/
            jQuery.validator.addMethod("isMobile", function(value, element) {
                var length = value.length;
                return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
            }, "请正确填写您的手机号码。");
            /* 自定义rules结束 */

            /*实现rules规则*/
            /*login.html*/
            $("#login").validate({
                rules:{
                    loginAccount: {
                        required: true,
                        alnum: true
                    },
                    loginPassword: {
                        required: true,
                        minlength: 6,
                        maxlength: 10
                    }
                }
            });

            /*login-form*/
            $("#login").submit(function (e) {
                var flagLogin=$("#login").valid();
                if($("#loginCode").val() == ""){
                    flagLogin=false;
                }
                e.preventDefault();//阻止表单默认提交
                if(flagLogin == true){
                    $.ajax({
                        type:"POST",
                        dataType: "",
                        url: "",
                        data: "",
                        error: function (XMLHttpRequest,textStatus,errorThrown) {
                            alert("form提交数据失败："+ textStatus);
                        },
                        success: function (data) {
                            alert("form返回的数据"+data);
                        }
                    });
                }else{
                    alert("请填写正确的信息")
                }
            });


            /*register.html*/
            $("#register").validate({
                rules:{
                    registerAccount: {
                        required: true,
                        alnum:true,
                    },
                    registerPassword:{
                        required: true,
                        minlength: 6,
                        maxlength: 10
                    },
                    registerPhone:{
                        isMobile: true,
                        required: true
                    }
                }
            });
            /*实现rules规则结束*/

            /*register-form*/
            var flag=false;
            flag=$("#register").valid();
            if(flag == true){
                $("#btnSendCode").prop("disabled",true);
            }else {
                $("#btnSendCode").prop("disabled",false);
            }
            $("#btnSendCode").click(function () {
                if($("#registerPhone").valid() == true){
                    $("#btnSendCode").prop("disabled",false);
                    sendMessage();
                }
            });
            /*表单提交*/
            $("#register").submit(function (e) {
                flag=$("#register").valid();
                if($("#registerCode").val() == ""){
                    flag=false;
                }
                if($("#registerPhoneMsg").val() == ""){
                    flag=false;
                }
                e.preventDefault();//阻止表单默认提交
                if(flag == true){
                    $.ajax({
                        type:"POST",
                        dataType: "",
                        url: "",
                        data: "",
                        error: function (XMLHttpRequest,textStatus,errorThrown) {
                            alert("form提交数据失败："+ textStatus);
                        },
                        success: function (data) {
                            alert("form返回的数据"+data);
                        }
                    });
                }else{
                    alert("请填写正确的信息")
                }
            });


});