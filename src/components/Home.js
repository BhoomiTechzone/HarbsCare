import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
import simg from "../Images/OMG_Website_without_CTA_1920X512.gif"
import ssf1 from "../Images/dermatology-tested-100x100.webp"
import ssf2 from "../Images/msafe-100x100.jpg"
import ssf3 from "../Images/fda-100x100.jpg"
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
                    <img src={simg} text="First slide" height="400px" width="100%"/>
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={simg} text="Second slide" height="400px" width="100%"/>
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={simg} text="Third slide" height="400px" width="100%"/>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus adipisci similique, officia sed, saepe, sequi animi delectus tempora dignissimos at exercitationem quam quos ratione distinctio? Beatae temporibus ex molestias.</p>
                        <a className='card-button'>ADD TO CART</a>
                    </div>

                </div>
                <div className="col-lg-9 ">

                    {/* <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Heading</h5>
                                        <p className="green">abc | Def</p>
                                        <h4>Rs. ####</h4>


                                    </div>
                                    <a className='card-button'>ADD TO CART</a>
                                </div>
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex   justify-content-around">
                                <div className="card s-card  "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div><div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> */}
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
                        <h2>Hair Care</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus adipisci similique, officia sed, saepe, sequi animi delectus tempora dignissimos at exercitationem quam quos ratione distinctio? Beatae temporibus ex molestias.</p>
                        <a className='card-button'>ADD TO CART</a>
                    </div>

                </div>
                <div className="col-lg-9 ">

                    {/* <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Heading</h5>
                                        <p className="green">abc | Def</p>
                                        <h4>Rs. ####</h4>


                                    </div>
                                    <a className='card-button'>ADD TO CART</a>
                                </div>
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex   justify-content-around">
                                <div className="card s-card  "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div><div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> */}
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus adipisci similique, officia sed, saepe, sequi animi delectus tempora dignissimos at exercitationem quam quos ratione distinctio? Beatae temporibus ex molestias.</p>
                        <a className='card-button'>ADD TO CART</a>
                    </div>

                </div>
                <div className="col-lg-9 ">

                    {/* <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Heading</h5>
                                        <p className="green">abc | Def</p>
                                        <h4>Rs. ####</h4>


                                    </div>
                                    <a className='card-button'>ADD TO CART</a>
                                </div>
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex   justify-content-around">
                                <div className="card s-card  "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div><div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex  justify-content-around">
                                <div className="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div className="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> */}
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
                            <h2>Heading</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque sed possimus est quaerat ea nisi ipsum. Distinctio, vero. Explicabo laborum officiis iure ab dolor suscipit sint tenetur, dolores modi?
                                Nobis dolorum, iusto illum eos natus minus possimus delectus nostrum voluptatem eius obcaecati sint! Illum, pariatur. Aut alias eveniet eaque blanditiis corporis odit, quasi magni! Ullam provident perferendis nihil tenetur.</p>
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
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id nostrum, fugiat voluptates, unde officia quam commodi cumque debitis voluptas adipisci, vel ea? Aliquid e</p>
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
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id nostrum, fugiat voluptates, unde officia quam commodi cumque debitis voluptas adipisci, vel ea? Aliquid e</p>
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
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id nostrum, fugiat voluptates, unde officia quam commodi cumque debitis voluptas adipisci, vel ea? Aliquid e</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* super safe standards end */}

            {/* slick container */}
            {/* <div className="container slick">
                <h2> What our Customers Say </h2>
                <Slider {...settings}>
                    <div className='slick-div'>
                        <p>contnet</p>
                        <h3>1</h3>



                    </div>
                    
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                </Slider>
            </div> */}
            {/* slick container end */}
          

        </div>
    )
}
