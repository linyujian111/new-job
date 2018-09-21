/* 
* @Author: Marte
* @Date:   2018-09-20 14:14:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-21 17:53:01
*/

$(document).ready(function(){


    $(".content_h").load('../index.html #login');
    $(".content_s").load('../index.html #search');
    // $(".content_n").load('../index.html #nav');

    var id=$(location).attr('search').slice(4,5);
    var table=$(location).attr('search').slice(12);
    console.log(table);
    console.log(id);
    $.ajax({
        type:'get',
        url:'../api/content.php',
        data:{'id':id,'table':table},
        dataType:"json",
        success:function(res){
            

console.log(res[0].imgurl);
            var data=` 
                <div class="bigimg"><img src="../${res[0].imgurl}.jpg" alt="" /></div>
                <ul class="smimgall">
                    <i><</i>
                    <li><img src="../${res[0].imgurl}.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.1.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.2.jpg" alt="" /></li>
                   
                    <li><img src="../${res[0].imgurl}.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.2.jpg" alt="" /></li>
                    <li><img src="../${res[0].imgurl}.3.jpg" alt="" /></li>
                    <i>></i>
                </ul>`


            var price=`
                    <p class="price">￥<span class="show1">${res[0].nowprice}</span></p>
                    <span class="ruci">如此生活价</span>
                    <br />
                    <span>(参考价格<del>￥${res[0].delprice}</del>)</span>
                    <div class="erweima">
                        <img src="../img/erweima.png" alt="" />
                        <p>移动端扫购更便捷</p>
                    </div>
            `

            $('.boxl').append(data);
            $('.boxc_m').append(price);

            $('.title').text(res[0].title1);
            $('.maijia').text(res[0].home);





            // console.log(data);












        //     if(res=='yes'){
        //         $(location).attr('href','../html/login.html')
        //     }else if(res=="no"){
        //         alert('用户已经存在');
        //     }
        }
    })
});