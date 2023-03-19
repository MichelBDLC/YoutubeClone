// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import ReactPlayer from "react-player/youtube";
// //import { Box, Stack } from "mui/material";
// import Video from "./Video";
// import videoId from "./Cardvideos";

// export default function VideoAction() {

//     const [videoDetail, setVideoDetail] = useState(null);

//     videoId = useParams();
//     //console.log(videoId) I beleive this was a success

//     const apiKey = `AIzaSyAHGj75TWuLXdfB8r2931DFxiRySiJ02Oc`;

//     let videoDataApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;

//     useEffect(() => {
//         fetch(videoDataApi)
//         .then((response) => response.json())
//         .then((videoData) => {

//             setVideoDetail(videoData.items[0])
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }, [videoId])

//     if(!videoDetail?.snippet) {

//         return "Loading...";
//     } 

//     return (
//         <>
//         <div flex={1}>
//             <div>
//                 <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls />
//             </div>
//         </div> 
//         </>
//     )
// }