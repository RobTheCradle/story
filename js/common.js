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

//动态文字效果
$(".dynamicWords").typewriter({
	text:'人生的路很长很长，让我陪你一起走吧。我愿与你搭建一个属于我们自己的天空。',
	effect:'right'
});

//鼠标悬停闪耀星星效果
$(".dynamicWords").sparkle({
	color:"pink",
	count:50,
	overlap:0,
	speed:2,
	minSize:4,
	maxSize:7,
	direction:"both"
});

$(".ourPhoto").sparkle({
	color:"red",
	count:50,
	overlap:0,
	speed:1,
	minSize:7,
	maxSize:14,
	direction:"both"
});


//时间轴
var ev = [{

		id : 1,
	
		name : "自从遇见你的那天，我的心里就只能装下你！",
	
		on : new Date(2019,3,26)
	
	},{
		id : 4,
		name : "今天是我们的第二次见面，也是五四青年节。见你的那一刻好想抱着亲昵一下，可我有点害羞，略略略...",
		on : new Date(2019,4,4)
	},{
	
		id : 2,
	
		name : "辜辜生日！只和蒙蒙差了5天呢  0.0",
	
		on : new Date(2019,4,31)
	
	},{
	
		id : 3,
	
		name : "蒙蒙18岁的生日到了哟！=.=",
	
		on : new Date(2019,5,5)
	
	}]

$('.clockEara').jqtimeline({

				events : ev,

				numYears:4,

				startYear:2019,

				click:function(e,event){

					alert(event.name);

				}

			});


//枫叶飘落

    var d = "<div class='maple' style='color: #ff000;'>🍁<div>";
    setInterval(function () {
        var f = $(document).width();
        var e = Math.random() * f - 300; // 枫叶的定位left值
        var o = 0.2 + Math.random(); // 枫叶的透明度
        var fon = 25 + Math.random() * 10; // 枫叶大小
        var l = e - 100 + 200 * Math.random(); // 枫叶的横向位移
        var k = 8000 + 5000 * Math.random();
        var deg = Math.random() * 360; // 枫叶的方向
        $(d).clone().appendTo(".maplebg").css({
        	color:"#ff0000",
            left: e + "px",
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "font-size": fon,
        }).animate({
            top: "550px",
            left: l + "px",
            opacity: 0.1,
        }, k, "linear", function () {
            $(this).remove()
        })
    }, 1000)
