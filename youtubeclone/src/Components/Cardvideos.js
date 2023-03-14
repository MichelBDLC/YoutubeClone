export default function Cardvideos(items) {
    const data = ""

    return (
        <div className="card">
          
            {data.map((video) => {
              
              return (
                <>
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
    