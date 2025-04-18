import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
const Contact = () => {

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact__header">
                    <h1>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="0"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-offset="200"
                        >
                            O
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="400"
                            data-aos-offset="200"
                        >
                            N
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="600"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="800"
                            data-aos-offset="200"
                        >
                            A
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1000"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1200"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1400"
                            data-aos-offset="200"
                        >
                            .
                        </span>
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__form" data-aos="fade-up">
                            <form name="contact" method="post">
                                <input type="hidden" name="form-name" value="contact" />
                                <p className="contact__form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter email"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="message">Concern: </label>
                                    <textarea
                                        name="message"
                                        id="contact__message"
                                        cols="20"
                                        rows="5"
                                        placeholder="Type your messsage"
                                    ></textarea>
                                </p>
                                <button type='submit' className="contact__send-btn">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faLocationDot} size="2x" /><p><span>Address:&nbsp;&nbsp;</span>Churialtooli Lane, Kotwali, Chittagong</p></li>
                                <li> <FontAwesomeIcon icon={faPhone} size="2x" /><p><span>Phone:</span>&nbsp;&nbsp;(+88) 01841659356</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>ashiqueshahariar2@gmail.com</p></li>
                                
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/md-ashiq-shahariar-a4ab7b267/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </p>

                            <p className='contact__github'>
                                <a href="https://github.com/ashiq33" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </p>

                            <p className='contact__facebook'>
                                <a href="https://www.facebook.com/ashiqshahariar/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
