import { NavLink, useNavigate } from "react-router-dom";

export default function Video(props) {

    const navigate = useNavigate();

    const dataTransfer = {
        theVideoId: props.videoId,
        videoTitle: props.videoTitle,
        videoDescription: props.videoDescription,
        videoChannel: props.videoChannel,
        allVideoData: props.video,
        apiKey: props.apiKey,
    };

    return (
        <>
        <button onClick={() => navigate(-1)}> Go Back </button>
        <div className="videos">
        <NavLink to="/VideoAction" state={dataTransfer}> <img src={props.videoThumbnail} alt={props.videoTitle} /> </NavLink>
        <NavLink to="/VideoAction" state={dataTransfer}> <strong> {props.videoTitle} </strong> </NavLink>
        </div>
        </>
    )
}
