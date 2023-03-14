// import { useState } from "react";

export default function Searchbar() {

    // const [searchInput, setSearchInput] = useState("");

    // const apiKey = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;

    // const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

    //api data here.
    //funtion that intakes user input and fetches info with it 

    function handlesearchInput(event) {
        //event.preventDefault();
        //whatever is typed to be fetched 

        // fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&part=snippet&maxResults=10&key=${apiKey}`).then((response) => response.json())
        

    }

    function searchButton(event) {
        event.preventDefault();

    }

    return (
        <>
        <input type="text" onKeyUp={(event) => handlesearchInput(event)} />
        <button type="submit" onClick={searchButton}> Search </button>
        </>
    )
}