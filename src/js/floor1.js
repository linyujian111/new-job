/* 
* @Author: Marte
* @Date:   2018-09-18 11:26:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-18 13:21:42
*/

$(document).ready(function(){
    var xhr = new XMLHttpRequest();
    xhr.onload=function(){
        if(xhr.status==200 && xhr.status==304 ){
            var data=JSON.pase(xhr.responseText)
            console.log(data);
        }
    }
    xhr.open("get", "../api/floor1.php", true);
    xhr.send();
}
    // $.ajax({
    //     url:"../api/floor1.php",
    //     type:'get',
    //     dataType:"json",

    // })

    //         var $header=`
    //             <div class="tuijian">
    //                 <span>品牌推荐</span>
    //             </div>
    //             `

    //         var $main=`
    //             <div class="Pmain">
    //                 <div class="pinl">
    //                     <div>
    //                         <a href="">
    //                             <img src="img/c5.jpg" alt="" />
    //                         </a>                        
    //                     </div>
    //                     <ul>          
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                         <li><a href="">111</a></li>
    //                     </ul>                            
    //                 </div>
    //                 <div class="pinc">
    //                     <div class="boxsm"><a href=""><img src="img/c2.jpg" alt="" /></a></div>
    //                     <div class="boxsm"><a href=""><img src="img/c2.jpg" alt="" /></a></div>
    //                     <div class="boxsm"><a href=""><img src="img/c1.jpg" alt="" /></a></div>
    //                     <div class="boxsm"><a href=""><img src="img/c1.jpg" alt="" /></a></div>
    //                     <div class="boxsm"><a href=""><img src="img/c1.jpg" alt="" /></a></div>  
    //                     <div class="boxsm"><a href=""><img src="img/c1.jpg" alt="" /></a></div>
    //                     <div class="boxsm"><a href=""><img src="img/c1.jpg" alt="" /></a></div>  
    //                 </div>
    //                 <div class="pinb">
    //                     <img src="../img/v1.jpg">
    //                 </div>
    //             </div>
    //             `

    //             $(".pin_b").html($header+$main);


});