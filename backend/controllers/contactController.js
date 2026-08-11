import { handleContactForm, getAllContacts, getContactById } from '../services/contactService.js';

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, company, service, customService, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nom, email et message sont requis.' });
    }
    await handleContactForm({ name, email, company, service, customService, message });
    res.status(200).json({ message: 'Message envoyé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
};

export const getAllContactMessages = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des messages." });
  }
};

export const getContactMessageById = async (req, res) => {
  try {
    const contact = await getContactById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Message non trouvé.' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du message." });
  }
};
