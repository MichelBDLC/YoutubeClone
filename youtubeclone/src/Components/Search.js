import { useEffect, useState } from "react";
import Cardvideos from "./Cardvideos";
import './Search.css';

export default function Search() {

    const [searchInput, setSearchInput] = useState("");

    const [theResponse, setTheResponse] = useState([]);

    const apiKey = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;

    function handlesearchInput(event) {

        setSearchInput(event.target.value);
 
    }

    const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

    // useEffect(() => {
    //     fetch(apiSearchUrl)
    //     .then((response) => response.json())
    //     .then((searchInputData) => {

    //         setTheResponse(searchInputData.items);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }, [searchInput]); //this showcases the most popular or some random videos on page load 

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

    return (
        <>
        <input className="search-bar" type="search" onKeyUp={(event) => handlesearchInput(event)} placeholder="What would you like to watch?" />
        <button onClick={searchButton}> Search </button>
        <br />
        <div>
            <Cardvideos handlesearchInput={handlesearchInput} searchButton={searchButton} theResponse={theResponse} apiKey={apiKey}/>
        </div>
        </>
    )
}
