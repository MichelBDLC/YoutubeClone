import { useState } from "react";

export default function Cardvideos() {

    const [searchStatus, setSearchStatus] = useState("Make a search to watch videos");

    const [searchMade, setSearchMade] = useState(false);

    if (searchMade == true) {

        setSearchMade(true);
        setSearchStatus("Search Results:");
    }

    //generates individual Cardvideo 

    return (
        <>
        <h2> {searchStatus} </h2>
        </>
    )
}