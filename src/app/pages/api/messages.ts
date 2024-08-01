import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceLocator } from '../../services/ServiceLocator';

const messageService = ServiceLocator.getMessageService();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const messages = await messageService.getMessages();
      res.status(200).json(messages);
      break;
    case 'POST':
      const message = await messageService.createMessage(req.body);
      res.status(201).json(message);
      break;
    // Add cases for PUT and DELETE as needed
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
