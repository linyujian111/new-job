/* 
* @Author: Marte
* @Date:   2018-09-19 09:33:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-21 22:49:51
*/

$(function(){
    // 页面的头部
    $('#top').load("../html/login.html .header")
    // 页面的尾部
    $("#bottom").load("../html/login.html .bottom")
var $use
var $psw
$('.zhuce').on("click",function(){
    console.log(222)
$use=$('.usertel').val();
$psw=$('.password').val();
    var $psw2=$('.password2').val();
    console.log($psw2,$psw);
    if($psw2!=$psw){
        alert('两次密码不一致');
        return
    }
//     else if(!$('#checkbox').checked){

//         alert(111)
// return
//     }

    $.ajax({
        type:'post',
        url:'../api/create.php',
        data:{username:$use,password:$psw},
        success:function(res){
            if(res=='yes'){
                // $(location).attr('href','../html/login.html')
            }else if(res=="no"){
                alert('用户已经存在');
            }
        }
    }) 


})
    // 手机号码验证
$('.usertel').on("change",function(){
    $use=$('.usertel').val();
    var Reg=/^1[3-9]\d{9}$/;
    if(!Reg.test($use)){
        alert('手机号码不合法');
    }
})

    // 随机验证码
$('.yzm').on("click",function(){
    var idx='';
    for(var i=0;i<4;i++){
        idx+=parseInt(Math.random()*4)
    }
    $('.yzm').text(idx);
})


$('.password').on("change",function(){
    console.log(1111111)
    $psw=$('.password').val()

    var Regpsw=/^\S{6,16}$/;
    if(!Regpsw.test($psw)){
        alert('密码不合法');
    }
})

   
});

   // 验证码验证
   
   // 密码验证
