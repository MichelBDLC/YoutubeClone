
export function fetch(searchTerm) {
    const KEY="AIzaSyDkl7o6yIOHtrFBGnoq4GXo9IzDBV6EPrw"
    
    
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${KEY}`)
    .then((response) => response.json())
    .then(response => console.log(response.json()))
}

// import { useState } from "react";
// export default function fetch() {

//     const apiKey = `AIzaSyB_js3m_6Td1BiAELR-giue7aIRmzHegEM`;
//     const [searchInput, setSearchInput] = useState("");

//     const apiSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?q=` + searchInput + `&part=snippet&maxResults=10&key=` + apiKey;

//     return (
//         <>
//         </>
//     )
// };

