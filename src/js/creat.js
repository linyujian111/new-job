/* 
* @Author: Marte
* @Date:   2018-09-19 09:33:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-19 12:02:27
*/

$(function(){
    console.log(111)
    $('#top').load("../html/login.html .header")
    $("#bottom").load("../html/login.html .bottom")
    var $use=$('.usertel').val();
    var $psw=$('.password').val();

    $.ajax({
        type:'post',
        url:'../api/create.php',
        data:{username:$use,password:$psw},
        success:function(res){
            if(res=='yes'){
                $(location).attr('href','../html/login.html')
            }else if(res=="no"){
                alert('用户已经存在');
            }
        }
    })
});