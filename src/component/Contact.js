import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: "100%" }} exit={{ opacity: 0, transition: { duration: 0.5 } }} id="contact" className="contact">
            <div className="container-fluid">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className='bx bx-location-plus'></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                                <i className='bx bx-envelope' ></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className='bx bx-phone-call' ></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label for="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </motion.section>
    )
}

export default Contact