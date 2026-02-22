import { Link } from "react-router"
import banner from "../images/banner.svg"
import banner2 from "../images/bannermedia.svg"
import image1 from "../images/image1.svg"
import image2 from "../images/image2.svg"
import image3 from "../images/image3.svg"
import image4 from "../images/image4.svg"
import logo from "../images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp }
    from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "../Components/Scrollreveal"


const Home = () => {
    return (
        <>
        
            <div className="home-main">
                <div className="home-head-img">
                    <ScrollReveal>
                        <h1>Welcome To SSM Fragrence</h1>
                    </ScrollReveal>
                    <ScrollReveal>
                        <img src={banner} alt="banner" className="home-banner-web" />
                    </ScrollReveal>
                    <ScrollReveal>
                    <img src={banner2} alt="banner" className="home-banner-media" />
                    </ScrollReveal>
                </div>
                
                <div className="home-products">
                    <ScrollReveal>
                        <h2>Best Selling</h2>
                    </ScrollReveal>
                    
                    <div className="home-products-list">
                        <ScrollReveal>
                        <div className="home-products-list-item">
                            <img src={image1} alt="image1" />
                            <h3>Incense Stick <br /> (தூபக்கட்டி)</h3>
                            <p>A traditional aromatic incense stick used for daily pooja</p>
                            <p>Starts From <strong>₹30</strong></p>
                            <button><Link to="/products" className="home-btn-link">Buy Now</Link></button>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                        <div className="home-products-list-item">
                            <img src={image2} alt="image2" />
                            <h3>Sambrani Cup <br />(சம்பிராணி கப்)</h3>
                            <p>A divine resin cup used for daily pooja</p>
                            <p>Starts From <strong>₹30</strong></p>
                            <button><Link to="/products" className="home-btn-link">Buy Now</Link></button>
                        </div>
                        </ScrollReveal>
                        <ScrollReveal>
                        <div className="home-products-list-item">
                            <img src={image3} alt="image3" />
                            <h3>Agarbathi Stick <br />(அகர்பத்தி)</h3>
                            <p>A long-lasting fragrance stick</p>
                            <p>Starts From <strong>₹30</strong></p>
                            <button><Link to="/products" className="home-btn-link">Buy Now</Link></button>
                        </div>
                        </ScrollReveal>
                        <ScrollReveal>
                        <div className="home-products-list-item">
                            <img src={image4} alt="image4" />
                            <h3>Dhoop Cone <br />(தூப கோன்)</h3>
                            <p>cone-shaped incense for pooja and meditation.</p>
                            <p>Starts From <strong>₹30</strong></p>
                            <button><Link to="/products" className="home-btn-link">Buy Now</Link></button>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home