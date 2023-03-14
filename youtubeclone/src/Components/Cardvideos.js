import { useState } from "react";

export default function Cardvideos(items) {

    const [searchStatus, setSearchStatus] = useState("Make a search to watch videos");

    const [searchMade, setSearchMade] = useState(false);

    if (searchMade == true) {

        setSearchMade(true);
        setSearchStatus("Search Results:");
    }

    //generates individual Cardvideo 
    const data = ""

    return (
        <div className="card">
          
            {data.map((video) => {
              
              return (
                <>
        <h2> {searchStatus} </h2>
                <div key={video.id} className="video">
                  
                    <img className="img" src={video.items.snippet.thumbnails.default.url} alt="videoimage" />
                    <p><strong>{items.snippet.title}</strong></p>
                    
                </div>
                </>
              );
            })}
        </div>
    
      );
    }

    