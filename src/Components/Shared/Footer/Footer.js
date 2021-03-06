import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "style", link: "/style" },
        { name: "fade style", link: "/fade style" },
        { name: "New fade", link: "/new fade" },
        { name: "mid fade", link: "mid fade" },
        { name: "high fade", link: "/high fade" },
        { name: "low fade", link: "/low fade" },
    ]
    const ourAddress = [
        { name: "California - 202020 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const BusinessITSupport = [
        { name: "Scheduled maintenance", link: "/checkup" },
        { name: "Schedule a Service", link: "/checkup" },
        { name: "Remote Support", link: "/checkup" }

    ]
    const services = [
        { name: "style", link: "/style" },
        { name: "fade style", link: "/fade style" },
        { name: "New fade", link: "/new fade" },
        { name: "mid fade", link: "mid fade" },
        { name: "high fade", link: "/high fade" },
        { name: "low fade", link: "/low fade" },
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Business IT Support" menuItems={BusinessITSupport} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="https://www.facebook.com/Muhtasim315"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Contact Now</h6>
                            <button className="btn btn-secondary">+65464765465</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="text-secondary">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;