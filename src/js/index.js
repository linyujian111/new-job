/* 
* @Author: Marte
* @Date:   2018-09-15 09:48:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-19 09:45:00
*/


// 
// window.onload=function(){
//     var nav_l=document.querySelector(".nav_l");
//     var show1=nav_l.querySelector(".show1");
//     var num=true;
//         nav_l.onclick=function(){
//             if(num){
//                 show1.style.display="block";
//                 num=!num;
//             }else{
//                 show1.style.display="none";
//                 num=!num;
//             }
    
//         }
// }
// 导航功能：
$(function(){
    console.log(888)
    $('.nav_l').on("click",function(){
        $('.nav_l .show1').toggle();
    })

    $('#foot').load('../html/login.html')
    console.log(4444)

})



// let num=0;
// let len=$('.bannerul').get(1).children.length;
// console.log(len);
// var timer=setInterval(autoplay,2000)

// function autoplay(){
//     num++;
//     show();

// }

// function show(){

//     if(num>=len){
//         // console.log(len)
//         $(".bannerul").css('left',0);

//         num==1;

//     }
//      $(".bannerul").animate({left:-num*$("#banner").width()},2000)
// }






