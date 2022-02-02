import React from "react";import{Fade}from "react-awesome-reveal";import emailjs from "@emailjs/browser";import "./contact.css";import "bootstrap/dist/css/bootstrap.min.css"
class Contact extends React.Component {
  render() {
    const sendEmail=(e)=>{e.preventDefault();emailjs.sendForm("gmail","template_h820ftq",e.target,"user_JYc3V6UPU86MuTvddYRMK").then((result)=>{console.log(result.text)},(error)=>{console.log(error.text)});alert(`Thank you,  your Message has been sent`);e.target.reset()}
    return (
      <div className="container-fluid p-0 form-section" id="contact">
        <h1 className="py-3 section-heading-contact-bg pe-3 ">
          <span className="section-heading-contact">Contact Me</span></h1>
        <Fade>
          <div className="contact-form pt-3">
            <h1 className="contact-heading fw-bold">
              <span> Get in Touch</span></h1>
            <div className="d-flex justify-content-between">
              <form onSubmit={sendEmail} className="myForm">
                <div className="contact-left">
                  <label>
                    <span className="pe-3"> Name </span>
                    <input type={"text"} name="name" />
                  </label>
                  <label>
                    <span className="pe-4">Email</span>
                    <input type={"email"} name="email" />
                  </label>
                  <label className="mt-2">
                    <span className="textAreaLabel">Message</span>
                    <textarea placeholder="" name="message" />
                  </label>
                  <input type={"submit"} className="btn text-white rounded fw-bold contactBtn" value={"Send"}/>
                </div>
              </form>
              <div className="contact-right mt-5">
                <p className="m-0 ">Please feel free to write a feedback or contact me if you have questions about me or my work .</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>);}}
export default Contact;
