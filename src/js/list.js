/* 
* @Author: Marte
* @Date:   2018-09-19 17:29:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-21 17:02:48
*/

$(document).ready(function(){

    $('.list_header').load('../index.html #login')
    $('.list_search').load('../index.html #search')
    $('.list_nav').load('../index.html #nav')

    $.ajax({
        type:'get',
        url:'../api/list.php',
        // data:{username:$use,password:$psw},
        dataType:'json',
        success:function(res){

            var $main='';

            $(res).map(function(idx,item){
                // console.log(item);
                // var num=0
            return $main+=`<div class="main0 fl" data-id="${item.id}">
                <div class="main1">
                    <div class="showboxl">
                            <a href="#"><img src="../${item.imgurl}.jpg" alt="" /><a>
                            <ul class="simg">
                                <li><img src="../${item.imgurl}.jpg" alt="" /></li>
                            </ul>
                            <h4>${item.title1}</h4>
                            <div class="show1box">
                                <p class="show2">${item.title2}</p>
                            </div>
                            
                            <p class="show1">
                                <span>￥${item.nowprice}</span>
                                <del>${item.delprice}</del>
                            </p>
                            <p>${item.home}

                            <p></p></p>
                            <p class="show3">
                                <span>加入购物车</span>
                                <span>关注商品</span>
                            </p>
                        </div>
                        <div class="showboxr">
                            <div class="btn1">v</div>
                            <div><img src="../${item.imgurl}.jpg"/></div>
                            <div><img src="../${item.imgurl}.1.jpg"/></div>
                            <div><img src="../${item.imgurl}.2.jpg"/></div>
                            <div class="btn2">^</div>
                        </div>
                    </div>            
                </div>`
              })
                $('.main').append($main)
        }
    })

    

    $('.main').on('click',function(e){

        var target=$(e.target)
        if(e.target.tagName=="IMG"){

            var id=target.parent().parent().parent().parent().attr('data-id')

// console.log(attr);
            $(location).attr('href',`../html/content.html?id=${id}&table=goods`)
            // console.log(22222)
            // $.ajax({
            //     type:'get',
            //     url:'../api/list1.php',
            //     data:{id:},
            //     dataType:'json',
            //     success:function(res){
            // })
        }

        

    })
   
});