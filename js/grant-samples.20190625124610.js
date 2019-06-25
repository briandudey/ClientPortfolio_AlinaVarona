(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js46').attr('src', (dpi>1) ? 'images/alinavarona_grantsamples-1618.jpg' : 'images/alinavarona_grantsamples-809.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m25')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js47')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js48')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js49')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js50')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js51')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js52')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js53')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js54')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js55')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js56')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js57')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js58')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js59')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js60')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js61')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js62')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});