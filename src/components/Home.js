import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import simg from "../Images/OMG_Website_without_CTA_1920X512.gif"
import './Home.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={simg} text="First slide" height="400px" />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={simg} text="Second slide" height="400px" />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={simg} text="Third slide" height="400px" />
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
                    </div>

                </div>
                <div className="col-lg-9 ">
                
                <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card-wrapper container-sm d-flex  justify-content-around">
                                <div class="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div><div class="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div class="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex   justify-content-around">
                                <div class="card s-card  "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div><div class="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div class="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around">
                                <div class="card s-card "   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div class="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                                <div class="card s-card"   >
                                    <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            {/* again */}
            
        </div>
    )
}
