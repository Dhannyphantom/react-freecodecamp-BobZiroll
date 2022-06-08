import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const onFormChange = (event) => {
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={onFormChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={onFormChange}
        value={formData.lastName}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onFormChange}
        value={formData.email}
      />
      <textarea
        value={formData.comment}
        name="comment"
        onChange={onFormChange}
      />
    </form>
  );
}
