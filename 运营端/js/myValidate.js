$().ready(function(){
            $.validator.setDefaults({
                submitHandler: function () {
                    alert("提交成功");
                    form.submit();
                }
            });
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

            /*实现rules*/
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
                        isMobile: true
                    }
                }
            });
            /*实现rules结束*/

});