import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import Cardvideos from "../Components/Cardvideos";
import { useState } from "react";

export default function Home(props) {

    const [showResults, setShowResults] = useState(false);
    //use UseEffect to show results once search is made/ search button is clicked and data is successfully 
    //fetched 

    return (
        <>
        <br />
        <Navbar />
        <br />
        <Searchbar Youtube={props.Youtube}/>
        <div>
        {/* <Cardvideos />
        cardvideos appear when search has been made useState  */}
        </div>
        </>
    )
}