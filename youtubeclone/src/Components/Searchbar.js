import { useState } from "react";

export default function Searchbar() {

    const [searchInput, setSearchInput] = useState("");

    const apiKey = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;

    const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

    //api data here.

    return (
        <>
        <input type="text" />
        <button type="submit"> Search </button>
        </>
    )
}