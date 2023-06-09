import { NavLink } from "react-router-dom";
import './css/Search.css';
import './css/Video.css';

export default function Video(props) {

    const dataTransfer = {
        theVideoId: props.videoId,
        videoTitle: props.videoTitle,
        videoDescription: props.videoDescription,
        videoChannel: props.videoChannel,
        allVideoData: props.video,
        apiKey: props.apiKey,
    };

    return (
        <div className="card">
            <NavLink to="/VideoAction" state={dataTransfer}> <img src={props.videoThumbnail} alt={props.videoTitle} className="card-img" /> </NavLink>
            <NavLink to="/VideoAction" state={dataTransfer}> <strong> {props.videoTitle} </strong> </NavLink>
        </div>
    )
}
