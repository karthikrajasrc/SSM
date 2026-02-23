import logo from "../images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp }
    from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            <footer>
                
                <img src={logo} alt="" />
                <div>
                    <h2>Contact</h2>
                    <div className="footer-icons">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faPhone} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <p className="footer-copyright">Copyright © 2026 SSM Fragrence. All rights reserved.</p>
            </footer>
            
        </div>
    );
};

export default Footer;
