import { useNavigate, useLocation } from "react-router-dom";
import './css/VideoAction.css';

export default function VideoAction() {

     const navigate = useNavigate();

     const location = useLocation();

     console.log(location.state.allVideoData);

    return (
        <>
        <button onClick={() => navigate(-1)} className="go-back"> Go Back </button>
        <div className="video-container">
        <div> <h2> {location.state.videoTitle} </h2> </div>
        <div className="iframe"> <iframe width="900" height="500" src={`https://www.youtube.com/embed/${location.state.theVideoId}`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe> </div>
        <div> <p> {location.state.videoChannel} </p> </div>
        <div> <p> {location.state.videoDescription} </p> </div>
        </div>
        </>
    )
}

