import React from 'react';
import './Women.css';
import '../components/Home.css';
import p1 from "../Images/products/Kaagaz_20230925_135056085102-9__1_-removebg-preview.png"
import p2 from "../Images/products/Kaagaz_20230925_135056085102-8__1_-removebg-preview.png";
import p3 from "../Images/products/Kaagaz_20230925_135056085102-7__1_-removebg-preview.png";
import p4 from "../Images/products/Kaagaz_20230925_135056085102-1__1_-removebg-preview.png";
import p5 from "../Images/products/Kaagaz_20230925_135056085102-2__1_-removebg-preview.png";

function Men(props) {
    return (
        <div>
       <div className="ill1-header">
            <div className="container">
                {/* <h2>Unleash your Business' potential</h2>
                <h2>With Our Reliable and High-Speed</h2>
                <h2>Internet Lease Line Solutions</h2>
                <h4>Get Connected Today!</h4> */}
            </div>

        </div>
        <div className="women-products">
            <div className="container">
                <div className="row">
                    <h2>Men Products</h2>
                    <div className="col-lg-3">
                    <div > <div className="card s-card "   >
                            <img src={p4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">mens power capsules </h5>
                                <p className="green">Mostly at one age men may suffer from low self-esteem and become negative. This also occurs because they are facing problems in their sexual life. There might be early ejaculation and erectile dysfunction.</p>
                                <h4>Rs.1999 </h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                    </div>
                    <div className="col-lg-3">
                    <div > <div className="card s-card "   >
                            <img src={p5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">mens STA power  </h5>
                                <p className="green">Mostly at one age men may suffer from low self-esteem and become negative. This also occurs because they are facing problems in their sexual life. There might be early ejaculation and erectile dysfunction.</p>
                                <h4>Rs.1999 </h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                    </div>
                    <div className="col-lg-3">
                    <div > <div className="card s-card "   >
                            <img src={p2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">IMMUNE POWER TABLET</h5>
                                <p className="green">Immune power tablets" is a general term that can refer to a wide variety of dietary supplements and herbal remedies that are marketed as products to boost or enhance the immune system.</p>
                                <h4>Rs. 999</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                    </div>
                    <div className="col-lg-3">
                    <div > <div className="card s-card "   >
                            <img src={p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">JOINT PAIN TABLET</h5>
                                <p className="green">
Natural lubricant for keeping Joints healthy for Flexible & Healthy Joints.
Unique combination of 5 powerful ingredients for promoting Joint, Bone, and Muscle health.</p>
                                <h4>Rs. 999</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                    </div>
                    <div className="col-lg-3">
                    <div > <div className="card s-card "   >
                            <img src={p3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MADHU NASHAK CAPSULES</h5>
                                <p className="green">Madhu Nashak capsules are a type of Ayurvedic or herbal supplement commonly used in traditional Indian medicine. </p>
                                <h4>Rs. 799</h4>


                            </div>
                            <a className='card-button'>ADD TO CART</a>
                        </div></div>
                    </div>
                    
                </div>
            </div>
      
        </div>
    </div>
    );
}

export default Men;