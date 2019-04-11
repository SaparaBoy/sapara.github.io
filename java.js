window.addEventListener("scroll", function() {
  var offset = window.pageYOffset;
  var doc = document.documentElement.scrollHeight - window.innerHeight;
  var par = (offset / doc) * 100;
  console.log(par);
  var con = document.getElementsByClassName("contener01");
  var links = document.getElementsByClassName("links");
  con[0].style.bottom = par * -0.1 + "%";
  links[0].style.top = 110 + par * 8 + "px";
  var bg = document.getElementsByClassName("home");
  bg[0].style.backgroundPositionY = offset * -0.2 + "px";
  var bar = document.getElementById("bar");
  bar.style.height = par + "%";
  var logo = document.getElementById("logoimg");

  //cards
  var cards = document.getElementsByClassName("card");
  var i;
  var width = window.innerWidth;
  /*
  if (width >= 992) {
    if (par >= 18) {
      for (i = 0; i < 4; i++) {
        cards[i].style.opacity = 1;
      }
    } else {
      for (i = 0; i < 4; i++) {
        cards[i].style.opacity = 0;
      }
    }
  } else {
    if (par >= 7) {
      for (i = 0; i < 4; i++) {
        cards[i].style.opacity = 1;
      }
    } else {
      for (i = 0; i < 4; i++) {
        cards[i].style.opacity = 0;
      }
    }
  }*/
});
var footer = document.getElementById("footertext");
var date = new Date();
footer.innerHTML =
  "©" +
  date.getFullYear() +
  " Mr.Japu Inc.All rights reserved | Design by: Sapara Jaypal ";
var menu = document.getElementsByClassName("menupanel");
var no;
function hide(no) {
  switch (no) {
    case 1:
      menu[0].style.height = "0vh";
      document.getElementById("t2").style.display = "none";
      document.getElementById("t1").style.display = "flex";
      break;
    case 2:
      menu[0].style.height = "100vh";
      document.getElementById("t1").style.display = "none";
      document.getElementById("t2").style.display = "flex";
      break;
    case 3:
      menu[0].style.height = "0vh";
      document.getElementById("t2").style.display = "none";
      document.getElementById("t1").style.display = "flex";
  }
}
function load() {
  var load = document.getElementsByClassName("loader");
  load[0].style.height = "0%";
}
var pop = document.getElementsByClassName("popup");
var no2;
function show(no2) {
  switch (no2) {
    case 2:
      pop[0].style.height = "0";
      break;
    case 1:
      pop[0].style.height = "100vh";
      break;
  }
}
/*document.getElementsByClassName("date")[0].innerHTML =
  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();*/
document.getElementsByClassName("date")[0].innerHTML = date.toDateString();
document.getElementsByClassName("day")[0].innerHTML = date.getSeconds();
//page

var sno;
function checkstate(sno) {
  //console.log(onoff);
  var stat1 = document.getElementById("state1");
  var stat2 = document.getElementById("state2");
  switch (sno) {
    case 1:
      document.getElementsByTagName("html")[0].style = "overflow-y: hidden";
      stat2.style.display = "flex";
      stat1.style.display = "none";

      break;
    case 2:
      document.getElementsByTagName("html")[0].style = "overflow-y: scroll";
      stat1.style.display = "flex";
      stat2.style.display = "none";
      break;
  }
}
//dark
function dark() {
  var dark = document.getElementsByTagName("head");
  dark[0].addClassList("light");
}
function map() {
  document.getElementById("map").style.display = "none";
}
