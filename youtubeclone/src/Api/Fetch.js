export function fetch(searchTerm) {
   const KEY="AIzaSyDkl7o6yIOHtrFBGnoq4GXo9IzDBV6EPrw"

    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${KEY}`)
    .then((response) => response.json())
    .then(response => console.log(response.json()))
}


