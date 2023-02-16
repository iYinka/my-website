import React, { useState } from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { BsEnvelope } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { message, notification } from "antd";
import NotifyMe from "../notification";

const Contact = () => {
    const form = useRef();
    const [notify, setNotify] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xih4cl9",
                "template_tsy6qq8",
                e.target,
                "k-5-Qcn99FNvPNGtA"
            )
            .then(() => {
                setNotify(true);
                setTimeout(() => {
                    setNotify(false);
                }, 5000);
            })
            .catch((err) => {
                console.log(err);
            });
        e.target.reset();
    };
    return (
        <section id="contact">
            {" "}
            <h2 className="text-light">Leave A Message</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <BsEnvelope className="contact__option-icon" />
                        <h4>E-mail</h4>
                        <h5>olayinkav28@gmail.com</h5>
                        <a href="mailto:olayinkav28@gmail.com">
                            Drop a Message...
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+2348022458666</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=2348022458666"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Let's Chat
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your e-mail"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        required
                        placeholder="Type your message here..."
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                    {notify === true && <NotifyMe />}
                </form>
            </div>{" "}
        </section>
    );
};

export default Contact;
