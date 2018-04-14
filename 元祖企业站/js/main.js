//shop页轮播
 var swiper = new Swiper('.swiper-container', {
  slidesPerView: 0,
  spaceBetween: 30,
  loop: true,
});
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//登录表单验证
function checkEmail() {
    var a=document.getElementById("email").value;
    var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    var c=/^1\d{10}$/;
    if (b.test(a)||c.test(a)) {
        document.getElementById("emailSpan").innerHTML="ok";
        document.getElementById("emailSpan").innerHTML="ok";
    }else {
        document.getElementById("emailSpan").innerHTML="no";
        document.getElementById("emailSpan").innerHTML="no";
    }
}
function checkpwd() {
    var a=document.getElementById("pwd").value;
    if (a=="") {
        document.getElementById("pwdSpan").innerHTML="X"
    }else if (a.length>5) {
        document.getElementById("pwdSpan").innerHTML="密码正确"
    }else if (!isNaN(a)) {
        document.getElementById("pwdSpan").innerHTML="密码错误"
    }
}
//登录表单验证
function checkPhoneNum() {
    var a=document.getElementById("phoneNum").value;
    var b=/^1\d{10}$/;
    if (b.test(a)) {
        document.getElementById("phoneNumSpan").innerHTML="ok"
    }else {
        document.getElementById("phoneNumSpan").innerHTML="no"
    }
}function checkEmail2() {
    var a=document.getElementById("email2").value;
    var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (b.test(a)) {
        document.getElementById("emailSpan2").innerHTML="ok"
    }else {
        document.getElementById("emailSpan2").innerHTML="no"
    }
}
function checkpwd1() {
    var a=document.getElementById("pwd1").value;
    if (a=="") {
        document.getElementById("pwdSpan1").innerHTML="密码不能为空"
    }else if (a.length<6 ||a.length>20) {
        document.getElementById("pwdSpan1").innerHTML="密码不能少于6位或者大于20位"
    }else if (!isNaN(a)) {
        document.getElementById("pwdSpan1").innerHTML="密码不能为纯数字"
    }else{
        document.getElementById("pwdSpan1").innerHTML="密码符合"
    }
}
function checkpwd2() {
    var a=document.getElementById("pwd1").value;
    var b =document.getElementById("pwd2").value;
    if (a!=b) {
        document.getElementById("pwdSpan2").innerHTML="密码输入不正确"
    }else{
        document.getElementById("pwdSpan2").innerHTML="密码输入正确"
    }
}
//地图
var points = [{
    id: 1,
    lng: 118.096525,
    lat: 24.462602,
    title: "厦门中山公园",
    content: ["地址：北京市新建宫门路19号", "电话：010-62881144"]
}, {
    id: 2,
    lng: 118.095231,
    lat: 24.461615,
    title: "厦门实验小学",
    content: ["地址：北京市后花园风景区", "电话：010-69768087"]
}, {
    id: 3,
    lng: 118.092644,
    lat: 24.468522,
    title: "厦门光明大厦",
    content: ["地址：北京市东城区景山前街4号", "电话：010-65131892"]
}, {
    id: 4,
    lng: 118.106586,
    lat: 24.467207,
    title: "厦门将军祠",
    content: ["地址：北京市东城区天坛东里甲1号", "电话：010-67013036"]
}, {
    id: 5,
    lng: 118.108526,
    lat: 24.474245,
    title: "厦门古龙商城",
    content: ["地址：北京市西城区文津街1号(故宫北)", "电话：010-64040610"]
}];

new BaiduMap({
    id: "container1",
    level: 16,
    titleClass: "title",
    contentClass: "content",
    centerPoint: { // 地图中心点经纬度
        lng: 118.106586,
        lat: 24.467207
    },
    index: -1,
    points: points,
    showLabel: true
});