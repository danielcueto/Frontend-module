import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '../../store';


export const selectChatState = (state: RootState) => state.chat;


export const selectThreads = createSelector(
  [selectChatState],
  (chat) => chat.threads
);


export const selectSelectedThreadId = createSelector(
  [selectChatState],
  (chat) => chat.selectedThreadId
);


export const selectSelectedThreadMessages = createSelector(
  [selectChatState, selectSelectedThreadId],
  (chat, selectedThreadId) => {
    if (!selectedThreadId) return [];
    return chat.messages[selectedThreadId] || [];
  }
);

export const selectSelectedThread = createSelector(
  [selectThreads, selectSelectedThreadId],
  (threads, selectedThreadId) => {
    if (!selectedThreadId) return null;
    return threads.find(thread => thread.id === selectedThreadId) || null;
  }
);
