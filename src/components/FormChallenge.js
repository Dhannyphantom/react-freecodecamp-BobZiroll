import { useState } from "react";

export default function FormChallenge() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: true,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return console.log("Passwords do not match");
    } else {
      console.log("Successfully signed up");
    }

    if (formData.newsletter) {
      console.log("Thanks for signing up for our newsletter");
    }
  };

  return (
    <main className="main-form">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="form-input"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="form-input"
        />
        <span>
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={handleChange}
            name="newsletter"
            id="newsletter"
          />
          <label htmlFor="newsletter">I want to join the newsletter</label>
        </span>

        <button className="form-btn2">Sign Up</button>
      </form>
    </main>
  );
}
