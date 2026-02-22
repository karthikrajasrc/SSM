import logo from "../images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp }
    from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            <footer>
                <p>Copyright © 2026 SSM Fragrence. All rights reserved.</p>
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
            </footer>
        </div>
    );
};

export default Footer;
