import './Footer.css'
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const Footer=()=>{
    return(
        <div className="footer-section">
           <div className='footer-one'>
                <div className="subscribe">
                        <h4 className="footer-heading">Be the first to know</h4>
                        <p>Signup up for updates from metta muse.</p>
                        <div className='subscribe-input'>
                            <input type="text" placeholder="enter your e-mail" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="contactus">
                        <h4 className="footer-heading">contact us</h4>
                        <p>+44 221 133 5360</p>
                        <p>customercare@metamuse.com</p>
                        <h4 className="footer-heading">Currency</h4>
                        <h5>+ USD</h5>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
           </div>
           <div className='footer-seperator'>

           </div>
           <div className='footer-two'>
                <div className='metta-muse'>
                    <h4 className="footer-heading">metta muse</h4>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div className='quick-links'>
                    <h4>Quick links</h4>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds </p>
                    <p> FAQs</p>
                    <p> Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className='follow-us'>
                    <h4>Follow us</h4>
                    <CiInstagram size={25}/>
                    <CiLinkedin size={25}/>
                </div>
           </div>
        </div>
    )
}

export default Footer