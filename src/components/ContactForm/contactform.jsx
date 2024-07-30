import React from "react";
import styles from "./contactform.module.css";

export const ContactForm = ({
  contact,
  setContact,
  addContact,
  updateContact,
  edit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      updateContact(contact);
    } else {
      addContact(contact);
      setContact({ name: "", email: "", phone: "" });
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>Name: </label>
        <input
          className={styles.input}
          value={contact.name}
          onChange={(e) => {
            setContact({ ...contact, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label className={styles.label}>Email: </label>
        <input
          className={styles.input}
          value={contact.email}
          onChange={(e) => {
            setContact({ ...contact, email: e.target.value });
          }}
        />
      </div>
      <div>
        <label className={styles.label}>Phone: </label>
        <input
          className={styles.input}
          value={contact.phone}
          onChange={(e) => {
            setContact({ ...contact, phone: e.target.value });
          }}
        />
      </div>
      <button type="submit" className={styles.button}>
        {edit ? "Update" : "Add"} Employee
      </button>
    </form>
  );
};
