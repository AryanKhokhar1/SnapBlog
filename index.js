var w = window.innerWidth;
var h = window.innerHeight;
// console.log(w,h);
let hsecondul  = document.getElementById("hsecondul");
hsecondul.style.right = w/15 + "px";
document.getElementById("hfirstul").style.marginLeft = w/40 + "px";
// (document.querySelectorAll(".haclass").[0].style.padding = "5px");



document.getElementById("subbox1-li1").addEventListener("mouseover",function () {
    document.getElementById("mail-icon").style.transform = "scale(1.5)";
})
document.getElementById("subbox1-li1").addEventListener("mouseleave",function () {
    document.getElementById("mail-icon").style.transform = "scale(1)";
})
document.getElementById("subbox1-li2").addEventListener("mouseover",function () {
    document.getElementById("call-icon").style.transform = "scale(1.5)";
})
document.getElementById("subbox1-li2").addEventListener("mouseleave",function () {
    document.getElementById("call-icon").style.transform = "scale(1)";
})