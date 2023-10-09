import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
import simg from "../Images/OMG_Website_without_CTA_1920X512.gif"
import carousel1 from "../Images/CAROUSEL/Care with harbs.png"
import carousel2 from "../Images/CAROUSEL/ayurveda-transformed.png"
import carousel3 from "../Images/CAROUSEL/stock-photo-herbal-medicine-selection-with-fresh-and-dried-herbs-and-spices-forming-an-abstract-background-on-385252402-transformed (3).jpeg"
import ssf1 from "../Images/dermatology-tested-100x100.webp"
import ssf2 from "../Images/msafe-100x100.jpg"
import ssf3 from "../Images/fda-100x100.jpg"
import p1 from "../Images/products/Kaagaz_20230925_135056085102-1__1_-removebg-preview.png"
import p2 from "../Images/products/Kaagaz_20230925_135056085102-2__1_-removebg-preview.png"
import p3 from "../Images/products/Kaagaz_20230925_135056085102-3__1_-removebg-preview.png"
import './Home.css'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    var settings = {
        // className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 2,
        speed: 1000,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={carousel1} text="First slide" height="400px" width="100%"/>
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carousel2} text="Second slide" height="400px" width="100%"/>
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carousel3} text="Third slide" height="400px" width="100%"/>
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* sliding */}
            <div className="row s-card-box">
                <div className="col-lg-3">
                    <div className="l-box">
                        <h2>Best Sellers</h2>
                        <p>Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.</p>
                        <a className='card-button'>ADD TO CART</a>
                    </div>

                </div>
                <div className="col-lg-9 ">

                    
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        margin={10}
                        center
                        dots={false}
                        autoplay
                        responsive={
                            {
                                '1': {
                                    items: 1
                                },
                                '1025': {
                                    items: 3
                                }
                            }

                        }

                    >
                        <div > <div className="card s-card "   >
                            <img src={p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src={p2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src={p3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>

                    </OwlCarousel>
                </div>
            </div>
            <div className="row s-card-box">
                <div className="col-lg-3">
                    <div className="l-box">
                        <h2>Hair Care</h2>
                        <p>Explore 100% toxin-free and safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals. </p>
                        <a className='card-button'>ADD TO CART</a>
                    </div>

                </div>
                <div className="col-lg-9 ">

                    
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        margin={10}
                        center
                        dots={false}
                        autoplay
                        responsive={
                            {
                                '1': {
                                    items: 1
                                },
                                '1025': {
                                    items: 3
                                }
                            }

                        }

                    >
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>

                    </OwlCarousel>
                </div>
            </div>
            <div className="row s-card-box">
                <div className="col-lg-3">
                    <div className="l-box">
                        <h2>Beauty</h2>
                        <p>Color with care with our all-new colorcare range that’s 100% toxin-free and formulated with the goodness of natural ingredients. Check out our newly launched products & bring home your new favorites.</p>
                        <a className='card-button'>ADD TO CART</a>
                    </div>

                </div>
                <div className="col-lg-9 ">

                    
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        margin={10}
                        center
                        dots={false}
                        autoplay
                        responsive={
                            {
                                '1': {
                                    items: 1
                                },
                                '1025': {
                                    items: 3
                                }
                            }

                        }

                    >
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                        <div > <div className="card s-card "   >
                            <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Heading</h5>
                                <p className="green">abc | Def</p>
                                <h4>Rs. ####</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>

                    </OwlCarousel>
                </div>
            </div>
            {/* youtube section */}
            <div className="youtube-section container">
                <div className="row">
                    <div className="col-lg-6">
                        <iframe height={400} width="100%" src="https://www.youtube.com/embed/BavyVO3wzyk"> </iframe>
                    </div>
                    <div className="col-lg-6">
                        <div className="yt-sec-content">
                            <h2>Our Goodness Promise</h2>
                            <p> we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.</p>
                            <a className='card-button'>SHOP NOW</a>
                            <a className='card-button-opp'>OUR PLEDGES</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* youtube section end */}
            {/* super safe standards */}
            <div className="container ssf">
                <h1>Super Safe Standards</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-4 ssf-img">
                                <img src={ssf1} alt="" width="100%" />
                            </div>
                            <div className="col-lg-8 ssf-content">
                                <h4>Dermatologically Tested</h4>
                                <p>we ensure that each product is tested clinically on the sensitive human skin to ensure that it is not allergic</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-4 ssf-img">
                                <img src={ssf2} alt="" width="100%" />
                            </div>
                            <div className="col-lg-8 ssf-content">
                                <h4>Made Safe Certified</h4>
                                <p>it means that a product is literally made with safe ingredients.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-4 ssf-img">
                                <img src={ssf3} alt="" width="100%" />
                            </div>
                            <div className="col-lg-8 ssf-content">
                                <h4>FDA Approved</h4>
                                <p>FDA Approved means that we are 100% safe to be used for babies as well as adults</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
