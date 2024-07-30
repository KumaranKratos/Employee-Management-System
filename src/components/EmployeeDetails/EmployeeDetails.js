import React, { useEffect, useState } from "react";
import styles from "./employeedetails.module.css";
import { ContactForm } from "../ContactForm/contactform";
import { ContactList } from "../ContactList/ContactList";
const EmployeeDetails = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    await fetch("http://localhost/contact_manager/get_contacts.php")
      .then((res) => res.json())
      .then((res) => setContacts(res));
  };

  const addContact = async (contact) => {
    await fetch("http://localhost/contact_manager/add_contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      }),
    });
    fetchContacts();
  };

  const updateContact = async (contact) => {
    await fetch("http://localhost/contact_manager/update_contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(contact),
    });
    fetchContacts();
    setEdit(false);
    setContact({ name: "", email: "", phone: "" });
  };

  const deleteContact = async (id) => {
    await fetch("http://localhost/contact_manager/delete_contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ id }),
    });
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setEdit(true);
    setContact(contact);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Employee Manager</h1>
      <ContactForm
        contact={contact}
        setContact={setContact}
        addContact={addContact}
        updateContact={updateContact}
        edit={edit}
      />
      <h1 className={styles.edetails}>Employee Details</h1>
      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={deleteContact}
      />
    </div>
  );
};

export default EmployeeDetails;
