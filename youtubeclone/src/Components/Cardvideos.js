import Video from "./Video";
//import { useState } from "react";
//import YouTube from "react-youtube";
//import { YouTubeEvent } from "react-youtube";
//import { YouTubePlayer } from "react-youtube";
//import { YouTubeProps } from "react-youtube";

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