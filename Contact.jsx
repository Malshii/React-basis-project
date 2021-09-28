import React from 'react';
import { Link } from "react-router-dom";
import Navigation from './Navigation';

function Contact() {
    return(
        <>
            <Navigation />  
            <div class="contact-me">
          <h2>Get In Touch</h2>
          <h3>If you want,feel free contact me. </h3>
          <p class="contact-message">👩‍💻Practice makes perfect. After a long time of practicing, our work will become natural, skillful, swift, and steady.</p>
          <Link to='/form'><button class="btn" aria-current="page">CONTACT ME</button></Link>         
                    
        </div>
           
            <div class="bottom-container">
                <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
                <a class="footer-link" href="https://twitter.com/">Twitter</a>
                <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
                <p class="copyright">© 2021 Malshi Kulasinghe.</p>
            </div>
        </>
    );
}

export default Contact;