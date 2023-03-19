//import { Link } from "react-router-dom";
import YouTube from "react-youtube";

//is Card neccessary? TBD

export default function Video(props) {

    // function playVideo(event) {
    //     event.preventDefault();

    //     return (
    //         <>
    //         <ReactPlayer url={`https://www.youtube.com/watch?v=${props.videoId}`} className="react-player" controls/>
    //         </>
    //     )
    // }

    // function onReady(event) {

    //     console.log(event.target);
    // }
    
    return (
        <>
        <img src={props.videoThumbnail} alt={props.videoTitle} />
        <strong> {props.videoTitle} </strong>
        {/* <iframe src={`https://www.youtube.com/embed/${props.videoId}`}
         title={props.videoTitle} /> */}
        {/* <YouTube videoId={props.videoId} /> */}
        {/* <YouTube url={`https://www.youtube.com/watch?v=${props.videoId}`} /> */}
        {/* div can be removed to facilitate putting items next to eachother
        or if using css grid can do grid column: row  */}
        {/* <div className="video-card">
        <Link onClick={playVideo}>
        <img src={props.videoThumbnail} alt={props.videoTitle} />
        </Link>
        {/* <Link to={props.videoId}> */}
         {/* <strong> {props.videoTitle} </strong>  */}
        {/* </Link> */}
        {/* consider rwrapping the entire card around a link 
        tingy so that anywhere it is clicked, whether the pic, etc 
        direct to desired youtube video 
        just use controls to give the video functionality */}
        {/* </div> */} 
        </>
    )
}

//consider doing event handler clicking on the video and directing to like a new page sort of
//or changing the entire page for that video only to play and include other info like
//description and channel title and what now, you know the deal 