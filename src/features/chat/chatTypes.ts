export interface Message {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Thread {
  id: string;
  name: string;
  unreadCount: number;
}

export interface ChatState {
  threads: Thread[];
  messages: {
    [threadId: string]: Message[];
  };
  selectedThreadId: string | null;
}
