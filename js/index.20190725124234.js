(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/alinavarona_slide2-1920.jpg' : 'images/alinavarona_slide2-960-1.jpg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/alinavarona_slide6-1920.jpg' : 'images/alinavarona_slide6-960-1.jpg');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/dan-dimmock-323874-unsplash-1920.jpg' : 'images/dan-dimmock-323874-unsplash-960-1.jpg');
var a='data-src'; if($('.js .slide3').hasAttr('src')) { a='src'; } $('.js .slide3').attr(a, (dpi>1) ? 'images/alinavarona_slide5-1920.jpg' : 'images/alinavarona_slide5-960-1.jpg');
var a='data-src'; if($('.js .slide4').hasAttr('src')) { a='src'; } $('.js .slide4').attr(a, (dpi>1) ? 'images/alinavarona_slide4-1920.jpg' : 'images/alinavarona_slide4-960-1.jpg');
var a='data-src'; if($('.js .slide5').hasAttr('src')) { a='src'; } $('.js .slide5').attr(a, (dpi>1) ? 'images/alinavarona_slide3-1920.jpg' : 'images/alinavarona_slide3-960-1.jpg');
var a='data-src'; if($('.js .slide6').hasAttr('src')) { a='src'; } $('.js .slide6').attr(a, (dpi>1) ? 'images/alinavarona_slide1-1920-1.jpg' : 'images/alinavarona_slide1-960-1.jpg');
$('.js2').attr('src', (dpi>1) ? 'images/alinavarona_headshot2-1734.jpg' : 'images/alinavarona_headshot2-867.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();setTimeout(function(){$('.js6').prop('disabled',false);$("input[name='rlppsubqhpq']").attr('value', 'ugcwsnphdrm');},1000);
initMenu($('#m1')[0]);
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 1100,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});