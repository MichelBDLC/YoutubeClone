import { NavLink } from "react-router-dom";

//is Card neccessary? TBD

export default function Video(props) {

    //const navigate = useNavigate();

    const dataTransfer = {
        theVideoId: props.videoId,
        videoTitle: props.videoTitle,
        videoDescription: props.videoDescription,
        videoChannel: props.videoChannel,
        allVideoData: props.video,
    };

    //navigate({dataTransfer});

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

    //for Youtube to work you have to find out what the required props are and look up how to use each individually

    //when something is clicked it succesfullygoes to the desired page, now i just need to be able to pass data such as vudeiId and such
    
    //let url = `https://youtube.com/watch?v=${props.videoId}=fotios`
    return (
        <div className="videos">
        <NavLink to="/VideoAction" state={dataTransfer}> <img src={props.videoThumbnail} alt={props.videoTitle} /> </NavLink>
        <NavLink to="/VideoAction" state={dataTransfer}> <strong> {props.videoTitle} </strong> </NavLink>
        
        {/* <ReactPlayer url={url} /> */}
        {/* <YouTube videoId={props.videoId}/> */}
        {/* <iframe 
            id="player"
            style={{ width: '100%', height: '100%'}}
            src={url}
            ></iframe> */}
        {/* <YouTube videoId={props.videoId} /> */}
        {/* <iframe src={`https://www.youtube.com/embed/${props.videoId}`}
         title={props.videoTitle} /> */}
        {/* <YouTube url={`https://www.youtube.com/watch?v=${props.videoId}`} /> */}
        </div>
    )
}
