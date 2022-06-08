import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);

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
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={onFormChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onFormChange}
      />
    </form>
  );
}
