import { useEffect, useState } from "react";
//import Cardvideos from "./Cardvideos";

export default function Searchbar() {

    const [searchInput, setSearchInput] = useState("");

    const apiKey = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;

    const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

    //api data here.
    //funtion that intakes user input and fetches info with it 

    // useEffect(() => {
    //     
    //     //function of the event listener of when user types in searchInput 
    // }, []);

    function handlesearchInput(event) {

        setSearchInput(event.target.value);
        //console.log(event.target.value) SUCCESS

        // fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&part=snippet&maxResults=10&key=${apiKey}`)
        // .then((response) => response.json())
        // .then((searchInputData) => {
        //     <Cardvideos searchInputData={searchInputData} />
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
    }

    function searchButton(event) {
        event.preventDefault();
        //we might use routing here

    }

    //searchbutton once clicked to load results 

    //types in on the search bar 

    return (
        <>
        <input type="text" onKeyUp={(event) => handlesearchInput(event)} />
        <button type="submit" onClick={searchButton}> Search </button>
        </>
    )
}