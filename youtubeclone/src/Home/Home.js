import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
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
        <Search Youtube={props.Youtube}/>
        <div>
        {/* <Cardvideos />
        cardvideos appear when search has been made useState  */}
        </div>
        </>
    )
}