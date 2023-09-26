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
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
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
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
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
                                            <p> <strong>Phone:</strong>+91-##########
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
                                            <p> <strong>Address:</strong>xyz street abc road def pin
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