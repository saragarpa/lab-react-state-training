import { useState } from "react";

function Carousel({className = "", images}) {
  const [currentImg, setImg] = useState(0);

  const leftImage = () => {
    setImg((currentIndex) => {
        if (currentIndex === 0) {
            return images.length - 1;
        } else {
            return currentIndex - 1;
        }
    })
  };

  const rightImage = () => {
    setImg((currentIndex) => {
      if (currentIndex === images.length - 1) {
        return 0;
      } else {
        return currentIndex + 1; 
      }
    });
  };


  return (
    <div className={className}>
      <button onClick={leftImage}>
        Left
      </button>
      <img src={images[currentImg]} />
      <button onClick={rightImage}>
        Right
      </button>
    </div>
  );
}

export default Carousel;
