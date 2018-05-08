(function () {
	var text = document.querySelector("h2");

	var textSplit = text.textContent.split("");

	text.textContent = '';
	// create a span for every character and append
	// to the h2
	textSplit.forEach(function (current) {
			var span = document.createElement("span");

			span.innerHTML = current;

			text.appendChild(span);
	});

	window.setInterval(function () {
			spanChangeColor(text.querySelectorAll("span"))
	}, 1000);

	function randColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	function spanChangeColor(ele) {
		ele.forEach(function (current) {
				current.style.color = randColor();
		})
	}

  // audio
  /*
    store all songs information
    load every song and place into an audio array
    play the song on load / when a song is finished play the next one in the list
  */


  var playAndPauseButton = document.querySelector(".track__play");
  
  var songs = [
    {
      "artist": '21 savage',
      "title": "Bank Account",
      "image": "image/issa-cover.jpeg",
      "audio": "music/bankaccount.mp3"
    },
    {
      "artist": '21 savage',
      "title": "No Heart",
      "image": "image/no-heart.jpg",
      "audio": "music/noheart.mp3"
    }
  ];
  var allAudio = [];
  var activeTrack = 0;

  songs.forEach(function (current) {
    var newAudio = new Audio();

    newAudio.src = current.audio;
    newAudio.load();

    newAudio.addEventListener('ended', function () {

      console.log(activeTrack, songs.length-1)
      if (activeTrack < songs.length-1) {
        activeTrack++;
      } else {
        activeTrack = 0;
      }

      document.querySelector(".track__img").src = songs[activeTrack].image;
      document.querySelector(".track__title").textContent = songs[activeTrack].title;
      document.querySelectorAll(".track__p")[1].textContent = songs[activeTrack].artist;

      allAudio[activeTrack].play();
    });

    allAudio.push(newAudio);

    allAudio[activeTrack].play();
    console.log(allAudio[activeTrack].paused)

  });

	playAndPauseButton.addEventListener("click", function () {
    console.log(allAudio[activeTrack].paused)

    if (allAudio[activeTrack].paused) {
      playAndPauseButton.textContent = '| |'
			allAudio[activeTrack].play();
		} else {
      playAndPauseButton.textContent = '>'
      allAudio[activeTrack].pause();
		}
  });

  // the text animation

  document.querySelector(".content").addEventListener("tiltChange", function (event) { 
    document.querySelector(".content").style.transform = 'perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    document.querySelector(".move").style.transform = 'perspective(0) rotateX(' + event.detail.tiltY + 'deg) rotateY(' + event.detail.tiltX + 'deg) scale3d(1, 1, 1)';
  });


})();

