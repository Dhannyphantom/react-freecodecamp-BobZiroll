import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isMarried: false,
    comment: "",
  });

  const onFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
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
      <span>
        <input
          type="checkbox"
          name="isMarried"
          onChange={onFormChange}
          checked={formData.isMarried}
          id="isMarried"
        />
        <label htmlFor="isMarried">Are you married ?</label>
      </span>
    </form>
  );
}
