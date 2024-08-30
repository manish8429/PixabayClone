import React, { useContext } from 'react'
import UseContatex from '../contates/UseContates.JSX'


const PixabayImages = () => {
    const { ImageData } = useContext(UseContatex);
    // console.log(ImageData)
  
    if (!ImageData) {
      return <div>No images found</div>;
    }
  
    return (
      <div className='container mt-10'>
        {ImageData.map((image) => (
        <div className="card-header text-center" key={image.id}>
        <div className="r" >
         <img src={image.largeImageURL} alt="" style={{
          height: "15rem",
          borderRadius: "10px",
          border: "2px solid yellow"
         }}/>
        </div>
        <div className="card-body">
          
        
        </div>
       
      </div>
        ))}
      </div>
    );
  };

export default PixabayImages