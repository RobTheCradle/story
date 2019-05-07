     function toggleSound() {
            var music = document.getElementById("audioPlay");//获取ID  
            if (music.paused) { //判读是否播放  
                music.paused=false;
                music.play(); //没有就播放 
            }  
            
        }

		playSound();
		function playSound(){
			if(!confirm("蒙蒙，要听背景音乐吗？背景音乐加载可能有点慢哟，耐心等待一下啦！"))
			return false;
      var borswer = window.navigator.userAgent.toLowerCase();
      if ( borswer.indexOf( "ie" ) >= 0)
      {
        //IE内核浏览器
        var strEmbed = '<embed name="embedPlay" src="5c89e10412f8424475.mp3" autostart="true" hidden="true" loop="true"></embed>';
        if ( $( "body" ).find( "embed" ).length <= 0 )
          $( "body" ).prepend( strEmbed );
        var embed = document.embedPlay;

        //浏览器不支持 audion，则使用 embed 播放
        embed.volume = 100;
        //embed.play();这个不需要
      }else
      {
        //非IE内核浏览器
        var strAudio = "<audio id='audioPlay' src='5c89e10412f8424475.mp3'   hidden='true' loop='loop'/>";
        if ( $( "body" ).find( "audio" ).length <= 0 )
          $( "body" ).prepend( strAudio );
//      var audio = document.getElementById( "audioPlay" );

        //浏览器支持 audion
//      audio.play();

		
		setInterval("toggleSound()",1);
      }
    }
       