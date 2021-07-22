window.onload = function() {
        var oSpot1 = document.getElementById("spot1");
        oSpot1.style.background = "white";
        oSpot1.style.width = "15px";
        oSpot1.style.height = "15px";
        oSpot1.style.marginTop = "-2px";
        lunbo();
        // IE();
    }
    //显示下拉菜单
function showMenu(Oid) {
    var oId = document.getElementById(Oid);
    oId.style.display = "block";
}
//隐藏下拉菜单
function hiddenMenu(Oid) {
    var oId = document.getElementById(Oid);
    oId.style.display = "none";
}
//轮播图片
function showImg(oimg, Ospot) {
    var oImg = document.getElementById('img');
    var oSpot1 = document.getElementById("spot1");
    var oSpot2 = document.getElementById("spot2");
    var oSpot3 = document.getElementById("spot3");

    //换图
    oImg.src = oimg;
    //写点样式
    if (Ospot == "spot1") {
        oSpot1.style.background = "white";
        oSpot1.style.width = "15px";
        oSpot1.style.height = "15px";
        oSpot1.style.marginTop = "-2px";
    } else {
        oSpot1.style.background = "#96a1a5";
        oSpot1.style.width = "10px";
        oSpot1.style.height = "10px";
        oSpot1.style.marginTop = "0px";
    }
    if (Ospot == "spot2") {
        oSpot2.style.background = "white";
        oSpot2.style.width = "15px";
        oSpot2.style.height = "15px";
        oSpot2.style.marginTop = "-2px";
    } else {
        oSpot2.style.background = "#96a1a5";
        oSpot2.style.width = "10px";
        oSpot2.style.height = "10px";
        oSpot2.style.marginTop = "0px";
    }
    if (Ospot == "spot3") {
        oSpot3.style.background = "white";
        oSpot3.style.width = "15px";
        oSpot3.style.height = "15px";
        oSpot3.style.marginTop = "-2px";
    } else {
        oSpot3.style.background = "#96a1a5";
        oSpot3.style.width = "10px";
        oSpot3.style.height = "10px";
        oSpot3.style.marginTop = "0px";
    }

}

//自动轮播
var index = 0;

function current(n) {
    index = n;
}

function lunbo() {
    var oImg = document.getElementById('img');
    var oSpot1 = document.getElementById("spot1");
    var oSpot2 = document.getElementById("spot2");
    var oSpot3 = document.getElementById("spot3");
    var addr = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/img5.jpeg"];

    if (index == 0) {
        oSpot1.style.background = "white";
        oSpot1.style.width = "15px";
        oSpot1.style.height = "15px";
        oSpot1.style.marginTop = "-2px";
    } else {
        oSpot1.style.background = "#96a1a5";
        oSpot1.style.width = "10px";
        oSpot1.style.height = "10px";
        oSpot1.style.marginTop = "0px";
    }
    if (index == 1) {
        oSpot2.style.background = "white";
        oSpot2.style.width = "15px";
        oSpot2.style.height = "15px";
        oSpot2.style.marginTop = "-2px";
    } else {
        oSpot2.style.background = "#96a1a5";
        oSpot2.style.width = "10px";
        oSpot2.style.height = "10px";
        oSpot2.style.marginTop = "0px";
    }
    if (index == 2) {
        oSpot3.style.background = "white";
        oSpot3.style.width = "15px";
        oSpot3.style.height = "15px";
        oSpot3.style.marginTop = "-2px";
    } else {
        oSpot3.style.background = "#96a1a5";
        oSpot3.style.width = "10px";
        oSpot3.style.height = "10px";
        oSpot3.style.marginTop = "0px";
    }
    // alert(addr[index]);
    oImg.src = addr[index];
    index++;
    if (index == 3) { index = 0 };
    setTimeout(lunbo, 1500);

}

//判断是不是IE浏览器
function IE() {
    var oImgg1 = document.getElementById('imgg1');
    var oImgg2 = document.getElementById('imgg2');
    var oImgg3 = document.getElementById('imgg3');

    if (window.ActiveXObject || "ActiveXObject" in window) {
        oImgg1.style.transform = "none";
        oImgg2.style.transform = "none";
        oImgg3.style.transform = "none";
    }
}