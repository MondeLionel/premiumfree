const channel_items = document.querySelectorAll('.channelItem')	
		const videoPlayer = document.getElementById("videoItem");
		const vidModal = new bootstrap.Modal(document.querySelector('#video-modal'))
		const vidModalPlayer = new Plyr(videoPlayer);

		channel_items.forEach(function(channel, index){
			channel.addEventListener("click", function(e){
					vidModal.show()
					videoPlayer.src = channel.dataset.video;
					videoPlayer.poster = channel.dataset.video_poster;

					console.log(channel.dataset.video_poster)
					 
				})
		})

		document.querySelector('#video-modal').addEventListener("hidden.bs.modal", function(){
			videoPlayer.poster = "";
			videoPlayer.src = "";
			console.log(vidModalPlayer)
			videoPlayer.pause()
		})
