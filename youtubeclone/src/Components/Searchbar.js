import { useEffect, useState } from "react";

export default function Searchbar() {

    const [searchInput, setSearchInput] = useState("");

    const [theVideoTitle, setTheVideoTitle] = useState("");

    const apiKey = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;

    //maybe make an object useState for displaying card video data 

    function handlesearchInput(event) {

        setSearchInput(event.target.value);
        //console.log(event.target.value) SUCCESS
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
        //we might use routing here

        fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&part=snippet&maxResults=10&key=${apiKey}`)
        .then((response) => response.json())
        .then((searchInputData) => {

            console.log(searchInputData);
            // <Cardvideos searchInputData={searchInputData} />
            //then we generate the results
            // searchInputData.items[0].map((video) => {
            //     //deconstruct here?
            //     //you need videoId
            //     //define some tings 

            //     let videoId = video.id.videoId;
            //     let videoTitle = video.snippet.title;
            //     let videoDescription = video.snippet.description;
            //     let videoChannelTitle = video.snippet.channelTitle;
            //     let videoThumbnail = video.snippet.thumbnails.default.url;

            //     setTheVideoTitle(videoTitle);

            //     //do sets here to showcase data

            //     //pass this data to card videos and then individual data to cardvideo 
            //     //finish the code here though, make sure it works then move on to move the data accross components
            // }) 
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //searchbutton once clicked to load results 

    //types in on the search bar 

    return (
        <>
        <input type="text" onKeyUp={(event) => handlesearchInput(event)} />
        <button type="submit" onClick={searchButton}> Search </button>
        <br />
        <div>
            <p> {theVideoTitle} </p>
        {/* <Cardvideos /> */}
        </div>
        </>
    )
}