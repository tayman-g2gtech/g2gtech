import api from './api';

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  service?: string;
  customService?: string;
  message: string;
}

export async function sendContactMessage(data: ContactForm) {
  return api.post('/contact', data);
}

export async function getAllContactMessages() {
  return api.get('/contact');
}

export async function getContactMessageById(id: string) {
  return api.get(`/contact/${id}`);
}
