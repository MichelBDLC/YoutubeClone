import Video from "./Video";
import "./css/Search.css"

export default function Cardvideos(props) {

    return (
        <>
            {
            props.theResponse.map((video) => {

                let videoId = video.id.videoId;
                let videoTitle = video.snippet.title;
                let videoDescription = video.snippet.description;
                let videoChannel = video.snippet.channelTitle;
                let videoThumbnail = video.snippet.thumbnails.high.url;

                return (
                    <div key={Math.random()} classname="card">
                    <br />
                    <Video videoId={videoId} video={video} apiKey={props.apiKey} videoThumbnail={videoThumbnail} videoTitle={videoTitle}
                     videoDescription={videoDescription} videoChannel={videoChannel}/>
                    </div>
                )
            }) 
            }
        </>
    )
}
