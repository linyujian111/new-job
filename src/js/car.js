/* 
* @Author: Marte
* @Date:   2018-09-23 14:21:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-23 21:59:13
*/

$(document).ready(function(){








    $('#top').load('../index.html #login');

    var goodslist = Cookie.get('goodslist');


        if(goodslist.length<=0){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist);
            }
    
// 封装有一个生成页面的函数render
        // $('.goods').html(render());

        console.log(render());

        function render(){
            // 根据数据生成HTML结构
            


            $('.goods').html(goodslist.map(function(goods){
            var total=0;
            total+=goods.price.slice(1)*goods.qty;
                
            return `
                <ul class="goodslist">
                                
                    <li class="tupian">
                        <input type="checkbox"  class="goodsbtn"/>
                        <img src="../img/c1.jpg" alt="" />
                    </li>

                    <li class="biaoti">
                        <span>${goods.dianpu}</span>
                    </li>
     
                    <li class="color">
                        <span>黄色</span>
                    </li>
                           
                    <li class="price">
                        <span>￥${goods.price.slice(1)}</span>
                    </li>
                                   
                    <li class="num">
                        <button>-</button>
                        <input type="text" value='${goods.qty}' class="num1" />
                        <button>+</button>
                    </li>
                             
                    <li class="heji">
                        <span>￥${total}</span>
                    </li>
                               
                    <li class="delgood">
                            删除
                    </li>
                </ul>
                `
             })
            );
        };

});