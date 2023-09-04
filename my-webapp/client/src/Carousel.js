import './css/carousel.css';
import { useState } from 'react'

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const imageUrls = ["https://fastly.picsum.photos/id/5/500/300.jpg?hmac=zcwrwhRvLTAVlHbXYG8Sa-9D0eCfzP4edn71kMYXLLQ",
        "https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY",
        "https://fastly.picsum.photos/id/757/500/300.jpg?hmac=3FcI5jTN04OF4deOrOzAAJAZj5RuRa579WaUJ-H2iVc",
        "https://fastly.picsum.photos/id/686/500/300.jpg?hmac=ouVwSsQr4tjufvC81wTbsj7d2jpZwUdDLK8mInJn3pk",
        "https://fastly.picsum.photos/id/520/500/300.jpg?hmac=gSZ73GMcNDxtPz8S9yQdAQEGedwLIqBHrazZBnROTlI",
    ];

    function handleLeftArrowClick() {
        console.log("handleLeftArrowClick")

        setCurrentIndex(currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1)
    }

    function handleRightArrowClicked() {
        console.log("handleRightArrowClicked")

        setCurrentIndex(currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1)
    }


    return (<>
        <h2>Project 1: Carousel</h2>
        <div className="slider">
            <div className="left-arrow" onClick={() => {
                return handleLeftArrowClick()
            }}>
                ⬅
            </div>
            <div className="right-arrow" onClick={() => {
                return handleRightArrowClicked()
            }}>
                ⮕
            </div>

            {imageUrls.map((url, index) => {
                if (currentIndex === index) {
                    return (
                    <div key={url} className="image-box">
                        <img src={url} alt="image"></img>
                    </div>
                    );
                }
            })}


        </div>
    </>);
}