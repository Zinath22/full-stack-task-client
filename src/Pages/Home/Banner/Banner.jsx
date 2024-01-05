import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <div>
            <Carousel>
                <div >
                    <img className="" src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;