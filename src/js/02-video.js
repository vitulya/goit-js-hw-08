import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function (event) {
    let currentTime = event.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

