import { useNavigate, useLocation } from "react-router-dom";

export default function VideoAction() {

     const navigate = useNavigate();

     const location = useLocation();

     console.log(location.state.allVideoData);

    return (
        <>
        <button onClick={() => navigate(-1)}> Go Back </button>
        <div className="video-container">
        <h2> {location.state.videoTitle} </h2>
        <iframe width="900" height="500" src={`https://www.youtube.com/embed/${location.state.theVideoId}`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        <p> {location.state.videoChannel} </p>
        <p> {location.state.videoDescription} </p>
        </div>
        </>
    )
}

