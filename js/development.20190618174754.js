(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js33').attr('src', (dpi>1) ? 'images/alina_development-1422.jpg' : 'images/alina_development-711.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m18')[0]);
initMenu($('#m19')[0]);
initMenu($('#m20')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js34')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js35')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});