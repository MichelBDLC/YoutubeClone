import Cardvideo from "./Cardvideo";
import YouTube from "react-youtube";
import { YouTubeEvent } from "react-youtube";
import { YouTubePlayer } from "react-youtube";
import { YouTubeProps } from "react-youtube";

export default function Cardvideos(props) {

    //const [searchStatus, setSearchStatus] = useState("Make a search to watch videos");

    //const [searchMade, setSearchMade] = useState(false);

    // if (searchMade == true) {

    //     setSearchMade(true);
    //     setSearchStatus("Search Results:");

    //you can useeffect here to showcase message if no cards are shown
    // }

    return (
        <>
            {
            props.theResponse.map((video) => {

                let videoId = video.id.videoId;
                let videoTitle = video.snippet.title;
                let videoDescription = video.snippet.description;
                let videoChannelTitle = video.snippet.channelTitle;
                let videoThumbnail = video.snippet.thumbnails.default.url;

                return (
                    <div>
                    <Cardvideo videoId={videoId} videoThumbnail={videoThumbnail} videoTitle={videoTitle}
                     videoDescription={videoDescription} videoChannelTitle={videoChannelTitle}/>
                    </div>
                )
            }) 
            }
        </>
    )
}