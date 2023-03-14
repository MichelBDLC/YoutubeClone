import { useEffect, useState } from "react";

export default function Searchbar(props) {

    const [searchInput, setSearchInput] = useState("");

    const [theVideoTitle, setTheVideoTitle] = useState("");

    const [theResponse, setTheResponse] = useState([]);

    const apiKey = `AIzaSyBglTz4vKrPMqfU4Hown-Obm-J3QSa6XS8`;

    //maybe make an object useState for displaying card video data 

    //get one full videocard workingthensend overto cardvideosthensendover to cardvideomaybe you'll find the solution somewhere
    //along the lines

    function handlesearchInput(event) {

        setSearchInput(event.target.value);
    }

    const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

    //api data here.
    //funtion that intakes user input and fetches info with it 

    // useEffect(() => {
    //     
    //     //function of the event listener of when user types in searchInput 
    // }, []);

    function searchButton(event) {
        event.preventDefault();

        fetch(apiSearchUrl)
        .then((response) => response.json())
        .then((searchInputData) => {

            setTheResponse(searchInputData.items);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //function that displays search results 

    return (
        <>
        <input type="text" onKeyUp={(event) => handlesearchInput(event)} />
        <button type="submit" onClick={searchButton}> Search </button>
        <br />
        <div>
            {
            theResponse.map((video) => {


                //only showing one result, try doing without useState 

                let videoId = video.id.videoId;
                let videoTitle = video.snippet.title;
                let videoDescription = video.snippet.description;
                let videoChannelTitle = video.snippet.channelTitle;
                let videoThumbnail = video.snippet.thumbnails.default.url;

                //setTheVideoTitle(videoTitle);

                return (
                    <>
                    <p> {videoTitle} </p>
                    </>
                )

                //pass this data to card videos and then individual data to cardvideo 
                //finish the code here though, make sure it works then move on to move the data accross components
            }) 
            }
            {/* <img src={videoThumbnail} /> */}
            {/* <p> {theVideoTitle} </p>  */}
        {/* <Cardvideos /> */}
        </div>
        </>
    )
}