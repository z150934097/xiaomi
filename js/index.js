window.onload=function(){
	
	// var imgs=getClass('win')[0].getElementsByTagName('a');//获取类名为win下的a标签
	// var annius=getClass('anniu')[0].getElementsByTagName('span');//获取类名为anniu下面的span标签
	// var num=0;
var da=getClass('window')[0];
// console.log(da)
   var imgBox=getClass('win')[0];
   // console.log(imgBox)
   var da=getClass('banner')[0];
   var as=imgBox.getElementsByTagName('img');
   // console.log(as)
   var imgW=parseInt(getStyle(as[0],'width'));
   var left=getClass('bannerjt2')[0];
   var right=getClass('bannerjt1')[0];
   var dian=getClass('anniu')[0].getElementsByTagName('span');
   xiaolunbo(da,imgBox,as,imgW,left,right,dian);
   function xiaolunbo(da,imgBox,as,imgW,left,right,dian){
   var index=0;
   imgBox.style.width=imgW*as.length+'px';//获取一张图片的宽度算出图片盒子的宽度
   
   var r=setInterval(lunbo,2000);
   function lunbo() {
   	index++;//下标自增
   	if (index>as.length-1) {
   		index=0;
   	}
   	animate(imgBox,{marginLeft:-index*imgW},200)//动画的方式让图片盒子每次移动一张图片的宽度
   	for(i=0;i<as.length;i++){
   	dian[i].className='';//按钮选中状态不显示
   	}
   	dian[index].className='hot'//图片和按钮对应
   }
   da.onmouseover=function(){
   	clearInterval(r);//鼠标移上去停止轮播
   }
   da.onmouseout=function(){
   	r=setInterval(lunbo,2000);//鼠标离开继续轮播
   }
   right.onclick=function(){
   	lunbo();
   }
   left.onclick=function(){
   	index--;
   	if(index<0){
   		index=as.length-1;
   	}
   	animate(imgBox,{marginLeft:-index*imgW},200)
   	for(i=0;i<as.length;i++){
   	dian[i].className='';
   	}
   	dian[index].className='hot'
   }
for (var k=0;k<dian.length;k++) {//给每个按钮加点击事件
    		dian[k].index=k;//用anniu的index属性把下标保存起来
    dian[k].onclick=function(){
    	for (var j=0;j<dian.length;j++) {
			dian[j].className='';//所有按钮选中状态不显示
    	};
    	dian[this.index].className='hot';//鼠标点击显示按钮选中状态
    	animate(imgBox,{marginLeft:-this.index*imgW},200)//点击按钮显示对应的图片
    }
}
}







//       var w=parseInt(getStyle(imgs,'width'));
//         
//       setInterval(move,2000);
//       function move(){
//       	num++;
//       	if (num>imgs.length) {
//       		num=0;
//       	};
//       	animate(imgs,{marginLeft:-imgs[0].length*num},200)
//       }


var mxdpbox=getClass("mxdpContent")[0];//获取span标签
var spanbox=getClass('spanbox')[0];
var spans=spanbox.getElementsByTagName('span');
var leftbtn=getClass('mxdptitleRight2')[0];
var rightbtn=getClass('mxdptitleRight1')[0];
var mxdp=getClass('mxdp')[0];
	xiaolunbo(mxdp,spanbox,spans,1226,leftbtn,rightbtn,dian);




// var boxs=$('.znyjContent .dpRight span');console.log(boxs)

//     tab(tabs,boxs);
//     function tab(a,b){
//     b[0].style.display="none";//第一张图片显示
// 	for(var i=0; i<a.length; i++){
// 		a[i].index=i;//把i的值让index属性保存起来
// 		a[i].onmouseover=function(){
// 			for(var j=0;j<a.length;j++){
// 				b[j].style.display="none"//所有图片不显示
// 				a[j].className="";//所有的选项选中状态不显示
// 			}
// 			b[this.index].style.display="block";//选中选项时显示对应的图片
// 			a[this.index].className='hot';//鼠标移动到选项时显示选中状态
// 		}
// 	}
// }
var aaa=tabs=getClass('titleRight')[0].getElementsByTagName("a");
var aaa1=tabs=getClass('titleRight')[1].getElementsByTagName("a");
var aaa2=tabs=getClass('titleRight')[2].getElementsByTagName("a");
   var bbb=boxs=getClass('tab')[0].getElementsByTagName('span');
   var bbb1=boxs=getClass('tab1')[0].getElementsByTagName('span');
   var bbb2=boxs=getClass('tab2')[0].getElementsByTagName('span');
   tab(aaa,bbb);
   tab(aaa1,bbb1);
   tab(aaa2,bbb2)
   function tab(aaa,bbb){
   for(var i=0;i<aaa.length;i++){  
   	aaa[i].index=i;
    aaa[i].onmouseover=function(){
        for(var j=0;j<bbb.length;j++){
               bbb[j].style.display="none";
               }
              bbb[this.index].style.display="block";
              for(var n=0;n<aaa.length;n++){
        aaa[n].className=""
        }
        aaa[this.index].className="hot";
         } 
     }
	}
 }
