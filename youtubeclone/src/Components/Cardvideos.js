import { useState } from "react";

export default function Cardvideos() {

    const [searchStatus, setSearchStatus] = useState("Make a search to watch videos");

    const [searchMade, setSearchMade] = useState(false);

    if (searchMade == true) {

        setSearchMade(true);
        setSearchStatus("Search Results:");
    }

    <>
    <h2> {searchStatus} </h2>
    </>
}
// )

    //generates individual Cardvideo 

// export default function Cardvideos(items) {
//     const data = 
    // return (
        // <div className="card">
          
        //     {data.map((video) => {
              
        //       return (
        //         <>
        //         <div key={video.id} className="video">
                  
        //             <img className="img" src={video.items.snippet.thumbnails.default.url} alt="videoimage" />
        //             <p><strong>{items.snippet.title}</strong></p>
                    
        //         </div>
        //         </>
        //       );
        //     })}
        // </div>
    
    //   );
    // }
    
       
