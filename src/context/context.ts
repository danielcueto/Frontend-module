import { createContext } from 'react';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info' ;
}

export interface NotificationContextType {
  notification: Notification | null;
  showNotification: (message: string, type: 'success' | 'error' | 'info' ) => void;
  clearNotification: () => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
