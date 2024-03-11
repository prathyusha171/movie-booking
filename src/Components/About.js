import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

const About = () => {

    const handelSubmit=()=>{
        alert('subscribed')
    }
  return (
    <div class="newsletter">
      <footer>
        <div class="newsletter1">
            <div>
                <h2>Subscribe our VELVET REEL</h2>
                <p>We’re a team of velvet who truly care for our work.</p>
            </div>
            <div class="n-text">
                <label>
                    <input type="text" name="" placeholder="Enter your email"/>
                    <button type='submit'onClick={handelSubmit}>Subscribe</button>
    
                </label>
            </div>
        </div>	
    
    
        <div class="f-contact">
            <div>
                <h1>Information</h1>
                <p>If you have any queries please contact us, This is our socialMedia platform</p>          
                <i><WhatsAppIcon/></i>
                <i><FacebookIcon/></i>
                <i><TelegramIcon/></i>
                <i><XIcon/></i>
                
            </div>
    
            <div>
                <h1>Useful links</h1>
                <p>About us</p>
                <p>Gallery</p>
                <p>Blog posts</p>
                <p>Pricing plans</p>
    
            </div>
    
            <div>
                <h1>Details</h1>
                <p>bookingDetails</p>
                <p>Gallery</p>
                <p>About</p>
                <p>Pricing plans</p>
    
            </div>
    
            <div>
                <h1>Help & Support</h1>
                <p>Privacy policy</p>
                <p>Term & conditions</p>
                <p>Technical support</p>
                <p>Customer care</p>
    
            </div>
        </div>
    </footer>
    
    </div>
  )
}

export default About
