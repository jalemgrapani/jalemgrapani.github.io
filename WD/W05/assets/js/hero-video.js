// Functions
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    var frame = event.target.getIframe();
    var state = event.data;

    if (state === YT.PlayerState.PLAYING) {
        frame.classList.add("is-ready");
    } else {
        frame.classList.remove("is-ready");
    }

    if (state === YT.PlayerState.ENDED) {
        event.target.seekTo(0);
    }

    if (state === YT.PlayerState.ENDED || state === YT.PlayerState.PAUSED || state === YT.PlayerState.CUED) {
        event.target.playVideo();
    }
}

// API
function onYouTubeIframeAPIReady() {
    new YT.Player(document.querySelector(".hero-video"), {
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}