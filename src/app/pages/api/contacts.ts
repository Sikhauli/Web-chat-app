import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceLocator } from '../../services/ServiceLocator';

const contactService = ServiceLocator.getContactService();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const contacts = await contactService.getContacts();
      res.status(200).json(contacts);
      break;
    case 'POST':
      const contact = await contactService.createContact(req.body);
      res.status(201).json(contact);
      break;
    // Add cases for PUT and DELETE as needed
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
