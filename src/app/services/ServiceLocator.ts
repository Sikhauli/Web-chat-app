import { ContactService, IContactService } from './ContactService';
import { MessageService, IMessageService } from './MessageService';

export class ServiceLocator {
  private static contactService: IContactService;
  private static messageService: IMessageService;

  public static getContactService(): IContactService {
    if (!this.contactService) {
      this.contactService = new ContactService();
    }
    return this.contactService;
  }

  public static getMessageService(): IMessageService {
    if (!this.messageService) {
      this.messageService = new MessageService();
    }
    return this.messageService;
  }
}
