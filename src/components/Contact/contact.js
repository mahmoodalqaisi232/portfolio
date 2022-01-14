import React from "react";
// import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import "./contact.css"
import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends React.Component {

        render() {;
            const sendEmail = (e) => {
                e.preventDefault();
                emailjs.sendForm('gmail', 'template_h820ftq', e.target, 'user_JYc3V6UPU86MuTvddYRMK')
                  .then((result) => {
                     console.log(result.text);
                  }, (error) => {
                     console.log(error.text);
                  });
                  e.target.reset()
              };
            return (
                <>
                <Fade>
                <div className="form-container">
                    <h1 className="contact-heading fw-bold"><span> Get in Touch</span></h1>
                    <br/><br/><br/>
                    <form onSubmit={sendEmail} className="d-flex justify-content-evenly">
                        <div className="contact-form-left">
                        <label>
                           <span className="pe-2">Name</span> 
                            <input type={"text"} name="name"/>
                        </label>
                        <label>
                           <span className="pe-2">Email</span> 
                            <input type={"email"} name="email"/>
                        </label>
                        <label className="align-self-end d-flex">
                            <span className="pe-2 align-self-start">Message</span> 
                        <textarea rows="5" cols="40" placeholder="" name="message" />
                        </label>
                        <input type={"submit"} className="btn text-white rounded fw-bold contactBtn" value={"Send Message"}/>
                        </div>
                        <div className="contact-form-right mt-5">
                            <p className="">please feel free to write a feedback or contact me if you have questions about me or my work . </p>

                        </div>
                    </form>
                </div>
                </Fade>
                </>
            )
        }



}

export default Contact;
