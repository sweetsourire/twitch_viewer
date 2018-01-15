$(document).ready(function(){

	let channels = ["360chrism", "alexiaraye", "speedgaming", "roosj", "tfue", "lidiaplays", "baxcast", "cretetion","esportnow", "freecodecamp"];

	channels.forEach(function(channel){	
		let http = "https://api.twitch.tv/kraken/streams/" + channel;	
		function getAjax(getdata){
			$.ajax({
				url: http, 
				headers: {
				 	'Client-ID': '4tam8kazd4nnkwzu2vbnlimqwaobz4'
				},
				success: function(data) {
                    getdata(data)
				}
			});//end ajax http request	
		}//end getajax()

		getAjax(function(data){
			console.log(data);
            $("#channels").append("<div class=\"box\" id=\"box"+channel+"\">" //box for each channel
            	+"<a href=\"https://www.twitch.tv/"+channel+"\" target=\"_blank\">" //link for each channel
            	+"<div class=\"status\" id=\""+channel+"\">"+channel //div for detailed info
            	+"</div>"+"</a>"+channel+"</div>");//channel html

            //begin box properties
            if (data.stream==null) {
			$("#"+channel).html("OFFLINE");
			$("#box"+channel).addClass("off");
			} else {
				$("#"+channel).html(data.stream.game);
				$("#box"+channel).addClass("on");
			}

			$("#"+channel).hide();
			//hide details
            
            $(".box").mouseover(function () {
                $(this).find("div").fadeIn("fast");
            });
            $(".box").mouseleave(function () {
                $(this).find("div").fadeOut("slow");
            });
            //show details

            $("#usersall").click(function () {
                $(".off").show();
            });
            $("#usersonline").click(function () {
                $(".off").hide();
            });

			 });//link for every channel
	});
	})//end js