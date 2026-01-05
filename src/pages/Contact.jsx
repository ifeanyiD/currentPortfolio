import React, { useState} from 'react';
import { GiShakingHands } from "react-icons/gi";
import { IoSendSharp } from "react-icons/io5";
import "../styles/contact.scss";

import emailjs from "emailjs-com";



const public_url = import.meta.env.VITE_EMAILJS_Public_key;
const template_key = import.meta.env.VITE_EMAILJS_Template_key;
const service_key = import.meta.env.VITE_EMAILJS_Service_key;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true)


  const [email, setEmail] = useState({
    name: "",
    email : "",
    message : ""
  });
  
  const onchange = (e)=>{
    const nextEmail = {...email, [e.target.name] : e.target.value}
    setEmail(nextEmail);
    if(nextEmail.email && nextEmail.message && nextEmail.message) setDisableBtn(false)
    else setDisableBtn(true)

  }  

  function sendEmail(e) {
      e.preventDefault();
      setLoading(true)
      emailjs.sendForm(
        service_key,
        template_key,
        e.target,
        public_url
      )
      .then(() => {
        alert("Message sent!");
      })
      .catch(() => {
        alert("Failed to send");
      })
      .finally(()=> setLoading(false));

      setEmail({name : "", email : "",  message : ""})
}
  return (
    <section className='contact'>
      <h2>
        Hello!!! 
        <span>Let's discuss <GiShakingHands color='yellow' size={40}/></span>
      </h2>
      <form onSubmit={sendEmail}> 
        <input placeholder='Name' name='name' onChange={onchange} value={email.name}/>
        <input placeholder='Email' name='email' onChange={onchange} value={email.email}/>
        <textarea placeholder='Message' name='message' onChange={onchange} value={email.message}/>
        <button disabled={disableBtn}>
          
          {
            loading ? "Sending..." : <><span>Send</span><IoSendSharp /></>
          }
        </button> 
      </form> 
    </section>
  );
}
