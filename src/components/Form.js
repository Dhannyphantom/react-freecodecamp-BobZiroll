import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isMarried: false,
    employment: "",
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
      <fieldset>
        <legend>Current employment status</legend>

        <span>
          <input
            type="radio"
            id="employed"
            checked={formData.employment === "employed"}
            name="employment"
            value="employed"
            onChange={onFormChange}
          />
          <label htmlFor="employed"> Employed </label>
        </span>
        <span>
          <input
            type="radio"
            id="part-time"
            checked={formData.employment === "part-time"}
            name="employment"
            value="part-time"
            onChange={onFormChange}
          />
          <label htmlFor="part-time"> Part-time </label>
        </span>
        <span>
          <input
            type="radio"
            id="unemployed"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            name="employment"
            onChange={onFormChange}
          />
          <label htmlFor="unemployed"> Unemployed </label>
        </span>
      </fieldset>
    </form>
  );
}
