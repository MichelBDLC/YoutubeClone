import { useState } from "react";
import Cardvideos from "./Cardvideos";

export default function Searchbar() {

    const [searchInput, setSearchInput] = useState("");

    const [theResponse, setTheResponse] = useState([]);

    const apiKey = `AIzaSyBglTz4vKrPMqfU4Hown-Obm-J3QSa6XS8`;

    function handlesearchInput(event) {

        setSearchInput(event.target.value);

        //you can showcase a search with every key pressed here with a filter function 
        //and using useState with displaying what comes up using the filter function 
        //it might also be easier to use UseEffect 
        
    }

    const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

    //api data here.

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
        //you can use thisto change search statusand therefore displayvideos
        //and make message on screen disappear
        //orr youcan useEffect
    }

    return (
        <>
        {/* <h2> {searchStatus} </h2> */}
        <input type="text" onKeyUp={(event) => handlesearchInput(event)} placeholder="Let's Watch..." />
        <button onClick={searchButton}> Search </button>
        <br />
        <Cardvideos handlesearchInput={handlesearchInput} searchButton={searchButton} theResponse={theResponse}/>
        </>
    )
}