export interface Message {
    id: string;
    content: string;
    image?: string;
    sender: string;
    receiver: string;
    createdAt: Date;
  }
  