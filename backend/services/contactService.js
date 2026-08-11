import Contact from '../models/Contact.js';

export const handleContactForm = async ({ name, email, company, service, customService, message }) => {
  const contact = new Contact({ name, email, company, service, customService, message });
  await contact.save();
  return true;
};

export const getAllContacts = async () => {
  return await Contact.find().sort({ createdAt: -1 });
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};
