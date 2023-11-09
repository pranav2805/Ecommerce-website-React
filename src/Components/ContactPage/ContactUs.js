import React, { useRef } from "react";

import classes from "./ContactUs.module.css";

const ContactUs = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
    };
    try {
      const response = await fetch(
        "https://react-movie-http-4d549-default-rtdb.firebaseio.com/movies/contact.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      phoneInputRef.current.value = "";
      alert("Your details have been submitted successfully!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className={classes.section}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label>Name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label>Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label>Phone Number</label>
          <input type="text" id="phNo" ref={phoneInputRef} />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
