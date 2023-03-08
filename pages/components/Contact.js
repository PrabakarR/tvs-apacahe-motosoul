import React, { useState, useRef } from "react";
import { sendContactForm } from "services";

const Contact = () => {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            name: e.target[0].value,
            email: e.target[1].value,
            comment: e.target[2].value,
        });
        if (res == 0) {
            setMessage("Thank you for your valuable comment!");
            setTimeout(function () {
                setMessage("");
            }, 7000);
            formRef.current.reset();
        } else {
            setMessage("Something went wrong! Please try again");
        }
    };

    return (
        <div className="spaceall section-contact">
            <div className="container max-w-2xl">
                <h1 className="text-center">
                    {"Contact Us"}
                </h1>

                <div className="formmain-wrd">
                <h2 className="text-center mb-4">Send us a message</h2>
                    <div className="messagetext">
                        {message}
                      
                    </div>
                    <form
                        ref={formRef}
                        onSubmit={submitContact}
                    >
                        <div className="form-tworow">
                            <div>
                                <label htmlFor="name" className="tf bg rg"> Name </label>
                                <div className="kb">
                                    <input
                                        required
                                        placeholder="Name*"
                                        type={"text"}
                                        minLength={3}
                                        maxLength={25}
                                       
                                    />
                                </div>
                            </div>
                            <div>
                            <label htmlFor="email" className="tf bg rg"> Email </label>
                              <div className="kb">
                              <input
                            required
                            placeholder="Email Address*"
                            type={"email"}
                        />
                              </div>
                            </div>
                            <div>
                            <label htmlFor="message" className="tf bg rg"> Message </label>
                                <div className="kb">
                                <textarea
                            required
                            placeholder="Comment*"
                            rows={5}
                        ></textarea>
                                </div>
                            </div>
                        </div>

                       
                        
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;