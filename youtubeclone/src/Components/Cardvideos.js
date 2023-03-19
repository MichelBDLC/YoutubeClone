import Video from "./Video";

export default function Cardvideos(props) {

    console.log(props.theResponse)

    return (
        <>
            {
            props.theResponse.map((video) => {

                let videoId = video.id.videoId;
                let videoTitle = video.snippet.title;
                let videoDescription = video.snippet.description;
                let videoChannel = video.snippet.channelTitle;
                let videoThumbnail = video.snippet.thumbnails.default.url;

                return (
                    <div key={Math.random()}>
                    <Video videoId={videoId} video={video} apiKey={props.apiKey} videoThumbnail={videoThumbnail} videoTitle={videoTitle}
                     videoDescription={videoDescription} videoChannel={videoChannel}/>
                    </div>
                )
            }) 
            }
        </>
    )
}