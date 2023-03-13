import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import Cardvideos from "../Components/Cardvideos";

export default function Home() {

    return (
        <>
        <Navbar />
        <Searchbar />
        <Cardvideos />
        {/* cardvideos appear when search has been made useState  */}
        </>
    )
}