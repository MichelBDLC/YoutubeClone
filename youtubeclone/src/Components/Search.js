import { useEffect, useState } from "react";
import Cardvideos from "./Cardvideos";
import './css/Search.css';

export default function Search() {

    const [searchInput, setSearchInput] = useState("");

    const [theResponse, setTheResponse] = useState([]);

    const REACT_APP_API_KEY = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;
    //`AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`

    function handlesearchInput(event) {

        setSearchInput(event.target.value);

        clearSearch();
 
    }

    const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + REACT_APP_API_KEY;

    useEffect(() => {
        fetch(apiSearchUrl)
        .then((response) => response.json())
        .then((searchInputData) => {

            setTheResponse(searchInputData.items);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [searchInput]);  

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

        clearSearch();
    }

    function clearSearch() {
        
        setSearchInput("");
    }

    return (
        <>
        <div className="search-form">
        <input className="search-bar" type="search" onKeyUp={(event) => handlesearchInput(event)} placeholder="What would you like to watch?" />
        <button onClick={searchButton}> Search </button>
        </div>
        <br />
        <div className="cards">
            <Cardvideos handlesearchInput={handlesearchInput} searchButton={searchButton} theResponse={theResponse} apiKey={REACT_APP_API_KEY}/>
        </div>
        </>
    )
}
