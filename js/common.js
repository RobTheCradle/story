$(function(){
	
	resizeWindowViewer($(".body"));
	
})

//监听浏览器窗口变化
$(window).resize(function () { 
	
	resizeWindowViewer($(".body"))	
})

//重置窗口高宽
function resizeWindowViewer($ele){
	
	let windowWidth = $(window).width();
	let windowHeight = $(window).height();
	
	console.log("windowWidth="+windowWidth+"px;windowHeight="+windowHeight+"px;");
	
	$ele.width(windowWidth);
	$ele.height(windowHeight);
}
