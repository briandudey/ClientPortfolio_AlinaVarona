(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js36').attr('src', (dpi>1) ? 'images/alinavarona_committee-1488.jpg' : 'images/alinavarona_committee-744.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m21')[0]);
initMenu($('#m22')[0]);
initMenu($('#m23')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js37')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js38')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js39')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js40')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js41')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js42')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js43')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js44')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});