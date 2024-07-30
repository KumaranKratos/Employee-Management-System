import React from "react";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <Contact contact={contact} onEdit={onEdit} onDelete={onDelete} />
        );
      })}
    </div>
  );
};
