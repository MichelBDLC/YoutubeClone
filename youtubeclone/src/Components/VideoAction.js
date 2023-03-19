import { useNavigate, useLocation } from "react-router-dom";
//import YouTube from "react-youtube";

export default function VideoAction() {

     const navigate = useNavigate();

     const location = useLocation();

     console.log(location.state.allVideoData);

     //console.log(location.state)

    // function onPlayerReady(event) {
    //     event.target.pauseVideo();
    // }

     //const videoSrc = `https://www.youtube.com/embed/${location.state.theVideoId}`;
     //const googleSrc = `https://youtube.googleapis.com/youtube/v3/videos?id=${location.state.theVideoId}&key=${location.state.apiKey}`;

    return (
        <>
        <button onClick={() => navigate(-1)}> Go Back </button>
        <div className="video-container">
        <h2> {location.state.videoTitle} </h2>
        <iframe width="900" height="500" src={`https://www.youtube.com/embed/${location.state.theVideoId}`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        {/* <YouTube videoId={location.state.theVideoId} opts={opts} onReady={onPlayerReady} /> */}
        {/* <YoutubeIframe width="560" height="315" play={playing} videoId={location.state.theVideoId} /> */}
        {/* <YouTubePlayer url={videoSrc} /> */}
        {/* <iframe width="560" height="315" src={videoSrc}
        // "https://www.youtube.com/embed/VPVzx1ZOVuw" 
        title="YouTube video player" frameborder="0"></iframe> */}
        {/* the video itself here */}
        <p> {location.state.videoChannel} </p>
        <p> {location.state.videoDescription} </p>
        </div>
        </>
    )
}

