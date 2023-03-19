import { useNavigate, useLocation } from "react-router-dom";

export default function VideoAction() {

     const navigate = useNavigate();

     const location = useLocation();

    return (
        <>
        <button onClick={() => navigate(-1)}> Go Back </button>
        <div>
        <h2> {location.state.videoTitle} </h2>
        {/* the video itself here */}
        <p> {location.state.videoChannel} </p>
        <p> {location.state.videoDescription} </p>
        </div>
        </>
    )
}

