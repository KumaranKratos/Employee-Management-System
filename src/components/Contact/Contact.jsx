import React from "react";
import styles from "./contact.module.css";

export const Contact = ({ contact, onEdit, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div>
          <span>{contact.name}</span>
        </div>
        <div>
          <span>{contact.email}</span>
        </div>
        <div>
          <span>{contact.phone}</span>
        </div>
      </div>
      <div className={styles.buttonlist}>
        <button
          className={styles.button}
          onClick={() => {
            onEdit(contact);
          }}
          x
        >
          Edit
        </button>
        <button
          className={styles.button}
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
