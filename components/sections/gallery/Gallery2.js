import Link from 'next/link';
import { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const images = [
    {
        id: 1,
        url: '/images/gallery/gallery-1.jpg',
        title: 'Resto Djago Jowo',
        description: 'Coding tersedia di restoran Djago Jowo',
    },
    {
        id: 2,
        url: '/images/gallery/gallery-2.jpg',
        title: 'Full Stock di Resto xxx',
        description: 'Mampir ke resto xxx, nikmati coconut puddingnya',
    },
    {
        id: 3,
        url: '/images/gallery/gallery-3.jpg',
        title: 'Cemilan Eko Patrio',
        description: 'Cemilan sehat sambil perjalanan',
    },
    {
        id: 4,
        url: '/images/gallery/gallery-4.jpg',
        title: 'Coding di Panoramic Train',
        description: 'Nikmati kesegaran coconut pudding di Panoramic Train',
    },
    {
        id: 5,
        url: '/images/gallery/gallery-1.jpg',
        title: 'Coding di Panoramic Train',
        description: 'Nikmati kesegaran coconut pudding di Panoramic Train',
    },
    {
        id: 6,
        url: '/images/gallery/gallery-2.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    },
    {
        id: 7,
        url: '/images/gallery/gallery-3.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 8,
        url: '/images/gallery/gallery-4.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    }
];

export default function Gallery2({ helperCls }) {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section id="gallery-2" className={`gallery-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">CUSTOMER GALLERY</h2>
                                {/* Text */}
                                <p className="p-xl">Explore the happiness our coconut pudding spreads. 
                                Our photo collection highlights cherished moments from casual get-togethers to special family events, all sweetened by our pudding.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGES HOLDER */}
                    <div className="row">
                        {images.map((image, index) => (
                            <div className="col-sm-6 col-lg-3">
                                <div className="gallery-img">
                                    <a className="image-link" onClick={() => openLightbox(index)}>
                                        <div className="hover-overlay">
                                            <img className="img-fluid" src={image.url} alt="gallery-image" />
                                            <div className="item-overlay" />
                                            {/* Image Meta */}
                                            <div className="img-meta white-color">
                                                <h5 className="h5-xs">{image.title}</h5>
                                                <div className="txt-block-rating">
                                                    <div className="stars-rating">
                                                        {image.description}
                                                        {/* <span>4.5</span>
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <span>(23)</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex].url}
                                nextSrc={images[(photoIndex + 1) % images.length].url}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
                                onCloseRequest={closeLightbox}
                                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                // imageTitle={images[photoIndex].title}
                                // imageCaption={images[photoIndex].description}
                                className="abc"
                            />
                        )}
                    </div>	{/* END IMAGES HOLDER */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
