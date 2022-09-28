import './youtube.css';
import youtubeimg from './../../assets/img/index/youtube.png';
import youtubevid from './../../assets/videos/youtube.mp4';
function Youtube() {
  return (
    <div className="youtube_conatiner">
      <div className="youtube_1">
        <img src={youtubeimg} alt="" />
        <h2>Youtube Channel</h2>
        <a href="https://www.youtube.com/channel/UCPAay1FlxNaNAVW7FhvLsXA">@curryonnaanstop</a>
      </div>
      <div className="youtube_2">
        <video src={youtubevid} autoPlay muted loop></video>
      </div>
    </div>
  )
}

export default Youtube;
