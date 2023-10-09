import React from 'react';
import Faq from "react-faq-component";
import { BsFillChatDotsFill } from 'react-icons/bs';
import './Contact.css'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


const Contact = () => {
    const data = {
        title: "FAQ ",
        rows: [
            {
                title: "What are herbal products?",
                content: `Herbal products are natural supplements or remedies made from plants or plant extracts. They can include herbal teas, tinctures, capsules, creams, and more, and are used for various health and wellness purposes.`,
            },
            {
                title: "How do I choose the right herbal product for my needs?",
                content:
                    "It's essential to do your research and consult with a healthcare professional. They can help you select the right herbal product based on your specific health goals and any potential interactions with other medications you may be taking.",
            },
            {
                title: "What is the difference between herbal products and pharmaceutical drugs?",
                content: `Herbal products are generally considered natural remedies derived from plants, while pharmaceutical drugs are synthetically produced compounds designed to treat specific medical conditions. Pharmaceuticals typically undergo rigorous testing and clinical trials, whereas herbal products may not undergo the same level of scrutiny.`,
            },
            {
                title: "How should I store herbal products?",
                content: <p>Herbal products should be stored according to the instructions on their labels. Typically, they should be kept in a cool, dry place, away from direct sunlight and moisture.</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "#58A321",
        rowTitleColor: "black",
        titleTextAlign: "center"
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };
    return (
        <div className='contact-body'>
            <div className="container-fluid contact-page">
                <div className="row contact-faq-row">
                    <div className="col-lg-9 contact-faq">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                    <div className="col-lg-3">
                        <div className="contact-side">
                            <h2>Get</h2>
                            <h1>Instant </h1>
                            <h1> Solution</h1>
                            <h2>to your queries</h2>
                            <h3><BsFillChatDotsFill />Chat with us</h3>


                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="container-fluid"> */}

                <div className="section-title contact-heading">
                    <h2><span>Contact</span> Us</h2>
                    {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
                </div>
                {/* </div> */}
                <div className="container-fluid contact-form">
                <div className="row ">
                    <div className="col-lg-6">
                        <section id="contact" className="contact">

                            <div className="container">

                                <div className="section-title">
                                    <h2><span>Send us a mail</span></h2>

                                </div>
                            </div>


                            <div className="container ">


                                <form action="" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>

                            </div>
                        </section>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-details">
                            <h2>Contact Details</h2>
                            <div className="row contact-details-content">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <CallRoundedIcon sx={{ color: "#58A321", fontSize: '50px' }} />
                                        </div>
                                        <div className="col-lg-9">
                                            <p> <strong>Phone:</strong>+91-9616463178
                                            </p>
                                            <p>(monday-saturday ,9 AM- 6PM)</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <AddLocationRoundedIcon sx={{ color: "#58A321", fontSize: '50px' }} />
                                        </div>
                                        <div className="col-lg-9">
                                            <p> <strong>Address:</strong>A -43 , Sector-63 Noida (201301)
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <h2>Follow us on social networks</h2>
                                <div className="contact-social-icon-box">
                                    <FacebookIcon fontSize='large' sx={{ color: "#58A321", width: "20%" }} />
                                    <InstagramIcon fontSize='large' sx={{ color: "#58A321", width: "20%" }} />
                                    <LinkedInIcon fontSize='large' sx={{ color: "#58A321", width: "20%" }} />
                                    <YouTubeIcon fontSize='large' sx={{ color: "#58A321", width: "20%" }} />
                                    <TwitterIcon fontSize='large' sx={{ color: "#58A321", width: "20%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;