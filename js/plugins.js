window.Echo=function(a,b){"use strict";var c,d,e,f=[],g=function(){},h=function(a){var d=a.getBoundingClientRect();return(d.top>=0&&d.left>=0&&d.top)<=(window.innerHeight||b.documentElement.clientHeight)+c},i=function(){var c=f.length;if(c>0)for(var d=0;c>d;d++){var i=f[d];i&&h(i)&&(i.src=i.getAttribute("data-echo"),g(i),f.splice(d,1),c=f.length,d--)}else b.removeEventListener?a.removeEventListener("scroll",j):a.detachEvent("onscroll",j),clearTimeout(e)},j=function(){clearTimeout(e),e=setTimeout(i,d)},k=function(e){var h=b.querySelectorAll("[data-echo]"),k=e||{};c=parseInt(k.offset||0),d=parseInt(k.throttle||250),g=k.callback||g;for(var l=0;l<h.length;l++)f.push(h[l]);i(),b.addEventListener?(a.addEventListener("scroll",j,!1),a.addEventListener("load",j,!1)):(a.attachEvent("onscroll",j),a.attachEvent("onload",j))};return{init:k,render:i}}(this,document);


//initiating jQuery
jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp(
    );
  });
});

