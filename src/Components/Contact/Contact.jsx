import React from "react";
import { assets } from "../../assets/assets";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "26d49e46-25fc-44c7-8b9d-1dcc9df28b9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="Contact container" id="contact">
        <div className="contact-col">
          <h3>
            Send us a massage <img src={assets.massage} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact from or find our contact
            information below. Your fedback , question , and suggestions are
            important to us as we struve to provide exceptional services to our
            university community
          </p>
          <ul>
            <li>
              <img src={assets.mail} alt="" />
              learnify@edu.in
            </li>
            <li>
              <img src={assets.phone} alt="" />
              +91 1800 123 123
            </li>
            <li>
              <img src={assets.location} alt="" />
              DLF Cybercity , infocity , chandrasekharpur <br />
              Bhubneswer, Odisha{" "}
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="Name" placeholder="Your Name" required />
            <label>Email</label>
            <input type="email" name="Email" placeholder="Email Id" required />
            <label>Feedback</label>
            <textarea
              name="Massage"
              rows="6"
              placeholder="Write your masasage"
              required
            />
            <button type="submit" className="Btn">
              Submit
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
