import { Contact } from '../interface/Contact';

export interface IContactService {
  createContact(contact: Contact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContactById(id: string): Promise<Contact>;
  updateContact(contact: Contact): Promise<Contact>;
  deleteContact(id: string): Promise<void>;
}

export class ContactService implements IContactService {
  async createContact(contact: Contact): Promise<Contact> {
    // Implement the logic to create a contact
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    // Implement the logic to fetch all contacts
    return [];
  }

  async getContactById(id: string): Promise<Contact> {
    // Implement the logic to fetch a contact by ID
    return { id, name: '', email: '', phone: '', owner: '' };
  }

  async updateContact(contact: Contact): Promise<Contact> {
    // Implement the logic to update a contact
    return contact;
  }

  async deleteContact(id: string): Promise<void> {
    // Implement the logic to delete a contact
  }
}
