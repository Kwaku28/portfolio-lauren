import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Contact = () => {
  const formEndpoint = "https://formspree.io/f/xzbljoqn";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        resetForm();
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Message failed to send.");
      });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "30%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <div className="circle"></div>
        <h2>
          <span>G</span>et in Touch
        </h2>
      </div>
      <form action={formEndpoint} onSubmit={handleSubmit} method="post">
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Lebron"
            required
          />
          <label htmlFor="name">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            required
          ></textarea>
          <label htmlFor="message">Your Message</label>
        </div>
        <button type="submit" className="btn btn-warning">
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
