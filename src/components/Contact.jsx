import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const emailParams = {
            from_name: formData.get('from_name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        emailjs.send('service_wwvbf27', 'template_uylrtr3', emailParams, "Bd6YHkIsIeNR8DHSs")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div class='contactUs'>
            <h2>Interested? Contact Us</h2>
            <div id="contactDiv">
                <div id='contacts'>
                    <div id='fb' class="contact">
                        <img id="fb-logo" src='../../public/fb.png' />
                        <h5>fb.com/thecctvguy</h5>
                    </div>
                    <div id='phone' class="contact">
                        <img id="phone-logo" src='../../public/ph.png' />
                        <h5>0927 800 1811</h5>
                    </div>
                    <div id='email' class="contact">
                        <img id="email-logo" src='../../public/email.png' />
                        <h5>thecctv_guy@yahoo.com</h5>
                    </div>
                    <div id='ig' class="contact">
                        <img id="ig-logo" src='../../public/ig.png' />
                        <h5>@thecctvguy</h5>
                    </div>
                </div>
                <div id='contactForm'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label for='name'>Full Name</label>
                        <input type="text" class="shortText" name="from_name" required/>
                        <label for='email'>Email Address</label>
                        <input type="email" class="shortText" name="email" required />
                        <label for='message'>Message</label>
                        <textarea name="message" class="message" required />
                        <input type="submit" class="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;