import express from 'express';
import { sendContactMessage, getAllContactMessages, getContactMessageById } from '../controllers/contactController.js';

const router = express.Router();

// POST: Envoyer un message de contact
router.post('/', sendContactMessage);

// GET: Récupérer tous les messages de contact
router.get('/', getAllContactMessages);

// GET: Récupérer un message de contact par ID
router.get('/:id', getContactMessageById);

export default router;
