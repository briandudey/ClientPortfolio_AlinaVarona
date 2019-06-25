(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m9')[0]);
initMenu($('#m10')[0]);
initMenu($('#m11')[0]);
initMenu($('#m12')[0]);
initMenu($('#m13')[0]);
initMenu($('#m14')[0]);
$('.c26').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js15')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js16')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js17')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js18')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js19')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js20')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js21')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js22')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js23')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js24')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js25')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js26')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js27')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});