import Video from "./Video";


export default function Cardvideos(props) {

    return (
        <>
            {
            props.theResponse.map((video) => {

                let videoId = video.id;
                let videoTitle = video.snippet.title;
                let videoDescription = video.snippet.description;
                let videoChannelTitle = video.snippet.channelTitle;
                let videoThumbnail = video.snippet.thumbnails.default.url;

                return (
                    <div key={videoId}>
                    <Video videoId={videoId} videoThumbnail={videoThumbnail} videoTitle={videoTitle}
                     videoDescription={videoDescription} videoChannelTitle={videoChannelTitle}/>
                    </div>
                )
            }) 
            }
        </>
    )
}
