/*============================================================================ 
jquery.function.js
Copyright (C) C-brains Corporation All rights reserved.
============================================================================ */

/**********************************************************
setClassBtn
--------
指定の要素のclass属性に"btn"を設定
@param / @return
**********************************************************/
function setClassBtn() {
	$("div#nav ul li img, .setButton img, .setButton input").each(function() {
		$(this).addClass("btn");
	});
}


/**********************************************************
setExternal
--------
別窓_blankでウィンドウ開く
a要素のclass属性に"external"を指定
@param / @return
**********************************************************/
function setExternal() {
	$("a.external").click(function() {
		window.open(this.href, '_blank');
		return false;
	});	
}


/**********************************************************
initRollOverImages
--------
マウスオーバーで画像を切換
@param / @return
**********************************************************/
function initRollOverImages() {
	var image_cache = new Object();
	$("a img.btn,input[type=image].btn").not("[@src*='_o.'],[@src*='_d.']").each(function(i) {
		var imgsrc = this.src;
		var dot = this.src.lastIndexOf('.');
		var imgsrc_on = this.src.substr(0, dot) + '_o' + this.src.substr(dot, 4);
		image_cache[this.src] = new Image();
		image_cache[this.src].src = imgsrc_on;
		$(this).hover(
			function() { this.src = imgsrc_on; },
			function() { this.src = imgsrc; }
		);
	});
}


/**********************************************************
pageScroll
--------
ページをスムーズにスクロール（ href属性値が#で始まるものが対象 ）
@param / @return
**********************************************************/
function pageScroll() {
	$("a[href*=#]").click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 500);
				return false;
			}
		}
	});
}


/**********************************************************
実行処理
**********************************************************/
$(document).ready(
	setClassBtn,
	initRollOverImages,
	pageScroll,
	setExternal
);


