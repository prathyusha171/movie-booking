import React from 'react'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SupportIcon from '@mui/icons-material/Support';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div style={{margin:'10px'}}>
       <ContactPageIcon sx={{ fontSize:40}}/>
      <h1>CONTACT NOW</h1>
<p>Question not answered yet?We are here to help</p>
<br/>
<div className='contact'>
<h2><SupportIcon sx={{ fontSize:30}}/> HELP CENTER</h2>
<p>Got questions? we've got answers</p>
</div>
<br/>
<div className='contact'>
<h2><ChatIcon sx={{ fontSize:30}}/>CHAT</h2>
<p>Typical reply within seconds</p>
<p>Monday-Friday 10am-4pm IST</p>
</div>
<br/>
<div className='contact'>
<h2><EmailIcon sx={{ fontSize:30 }}/>EMAIL</h2>
<p>Typical reply within a day or two IST</p> 
</div>
     <br/>
    </div>
  )
}

export default Contact
