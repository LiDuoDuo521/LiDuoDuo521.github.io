//轮播
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//显示按钮
//var button=document.querySelector(".main-button");
//button.onclick(function(){
//  this.animate({height:"300px"});
//});
//返回顶部
function topFunction() {
    //设置一个定时器
    timer = setInterval(function(){
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 3);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
        isTop =true;  //用于阻止滚动事件清除定时器
        if(osTop == 0){
            clearInterval(timer);
        }
    },30);
}

//var obtn=document.querySelector(".topFunction")
//obtn.onclick = function(){    //回到顶部按钮点击事件
//    //设置一个定时器
//    timer = setInterval(function(){
//        //获取滚动条的滚动高度
//        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
//        //用于设置速度差，产生缓动的效果
//        var speed = Math.floor(-osTop / 6);
//        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
//        isTop =true;  //用于阻止滚动事件清除定时器
//        if(osTop == 0){
//            clearInterval(timer);
//        }
//    },30);
//}