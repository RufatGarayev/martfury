import React, {useState} from 'react';

const GetInTouch: React.FC = () => {
    const [rows] = useState<number>(5);

    return (
        <section id="get-in-touch">
            <form>
                <div className="container">
                    {/* ======= Title ======= */}
                    <div className="title text-center">
                        <h2>Get In Touch</h2>
                    </div>
                    <div className="row">
                        {/* ======= Inputs ======= */}
                        <div className="col-lg-6 col-md-6">
                            <div className="inputs-wrapper w-100">
                                <input type="text" className="w-100" name="name" placeholder="Name *" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="inputs-wrapper w-100">
                                <input type="text" className="w-100" name="email" placeholder="Email *" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="inputs-wrapper w-100">
                                <input type="text" className="w-100" name="name" placeholder="Subject *" />
                            </div>
                        </div>
                        <div className="col-12">
                            {/* ======= Textarea ======= */}
                            <div className="textarea-wrapper">
                                <textarea
                                    name="message"
                                    className="text-area w-100"
                                    placeholder="Your Message"
                                    rows={rows}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* ======= Button ======= */}
                            <div className="send-msg-btn-wrapper d-flex justify-content-center">
                                <button type="submit" className="send-msg-btn btn-style">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default GetInTouch;