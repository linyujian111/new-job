/*
	放置公共函数
 */

// 明确目的

/**
 * [生成任意范围内的随机整数]
 * @param  {Number} min [最小值]
 * @param  {Number]} max [最大]
 * @return {Number}     [返回min到max间的随机整数]
 */
function randomNumber(min,max){
	// 假设
	// Math.random()最小时 -> min
	// ....
	// Math.random()最大时 -> max
	var res = parseInt(Math.random()*(max-min+1))+min;//0.999


	return res;
}

// randomNumber(1,100);
// randomNumber(100,999);
// randomNumber(10,20);

/**
 * [随机颜色]
 * @return {String} [返回rgb格式随机颜色]
 */
function randomColor(num){
	if(num === 16){
		var str = '0123456789abcdef';
		var res = '#';

		for(var i=0;i<6;i++){
			// 获取随机索引值
			var idx = parseInt(Math.random()*str.length);
			res += str.charAt(idx);
		}

		return res;
	}

	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);

	return 'rgb('+r+','+g+','+b+')';//rgb(244,12,23)
}


function randomCode(num){

}

// randomCode(4);

/**
 * [关于元素节点的操作]
 * 	1.过滤非元素节点
 * 	2.获取子元素
 * 	3.获取兄弟元素
 */
var Element = {
	/**
	 * [过滤非元素节点，得到元素节点]
	 * @param  {Array} nodes [节点列表]
	 * @return {Array}       [元素列表]
	 */
	filter:function(nodes){
		// 声明res变量，用于存放结果
		var res = [];
		for(var i=0;i<nodes.length;i++){
			// 判断是否为元素节点
			// 是：则写入res数组
			if(nodes[i].nodeType === 1){
				res.push(nodes[i]);
			}
		}

		return res;
	},
	children:function(ele){
		// var res = [];
		// for(var i=0;i<ele.childNodes.length;i++){
		// 	if(ele.childNodes[i].nodeType === 1){
		// 		res.push(ele.childNodes[i])
		// 	}
		// }

		// return res;
		return this.filter(ele.childNodes);
	},
	prev:function(ele){

	},
	next:function(ele){}
}

// Element.children(box);//得到box下面的所有子元素
// Element.prev(box);//得到box的前一个元素
// Element.next(box);//得到box后面的兄弟元素


// 封装一个函数，用于获取元素的css样式，兼容所有浏览器
function getCss(ele,attr){
	if(window.getComputedStyle){
		// 标准浏览器
		return getComputedStyle(ele)[attr]
	}else if(ele.currentStyle){
		// IE6,7,8
		return ele.currentStyle[attr]
	}else{
		// 内联样式
		return ele.style[attr];
	}
}

// 先用
// getCss(box,'font-size');

/**
 * [给元素绑定事件的效果,同名事件不覆盖]
 * @param  {Node}  ele       [绑定事件的节点]
 * @param  {String}  type      [事件类型]
 * @param  {Function}  handler   [事件处理函数]
 * @param  {Boolean} isCapture [是否捕获]
 */
function bind(ele,type,handler,isCapture){
	// 判断当前是否支持addEventListener
	if(ele.addEventListener){
		// 标准浏览器
		ele.addEventListener(type,handler,isCapture);
	}else if(ele.attachEvent){
		// IE8-
		ele.attachEvent('on'+type,handler)
	}else{
		// 其他浏览器
		ele['on' + type] = handler;
	}
}

// 给元素绑定事件的效果
// 同名事件不覆盖
// bind(box,'click',function(){},true)

// 只生效一次的事件
function one(ele,type,handler,isCapture){

}