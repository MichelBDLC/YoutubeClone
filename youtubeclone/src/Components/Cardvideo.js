export default function Cardvideo(props) {
    

    return (
        <div id={props.videoId}>
        <img src={props.videoThumbnail} />
        <strong> {props.videoTitle} </strong>
        {/* <p> {videoChannelTitle} </p> */}
        {/* <p> {videoDescription} </p> */}
        </div>
    )
}