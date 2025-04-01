import "./css/SlideShow.css";
import {useState} from "react"

const SlideShow = () => {
    const[imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(

    );

    const showNextImage = () => {
        setImageIndex(imageIndex == images.length -1? 0: imageIndex+1);
    }

    const showPreviousImage = () => {
        setImageIndex(imageIndex == 0? images.length-1:imageIndex-1);
    }


    return (
        <section id="slideshow">
            <img src={images[imageIndex]} />
            <p>
                <button onClick={showNextImage}>Next</button>
                <button onClick={showPreviousImage}>Previous</button>
            </p>
        </section>
    );
};

export default SlideShow;