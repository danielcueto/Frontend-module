import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { type ChatState, type Message } from "./chatTypes";

const initialMessages: { [key: string]: Message[] } = {
  general: [
    {
      id: "1",
      author: "Ana García",
      content: "¡Bienvenidos al chat del equipo!",
      timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hora atrás
      read: true,
    },
    {
      id: "2",
      author: "Carlos López",
      content: "Hola Ana! ¿Cómo va todo?",
      timestamp: new Date(Date.now() - 3000000).toISOString(), // 50 min atrás
      read: true,
    },
  ],
};

const initialState: ChatState = {
  threads: [],
  messages: initialMessages,
  selectedThreadId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectThread(state, action: PayloadAction<string>) {
      const threadId = action.payload;
      state.selectedThreadId = threadId;

      const messages = state.messages[threadId];
      if (messages) {
        messages.forEach((msg) => {
          msg.read = true;
        });
      }

      const thread = state.threads.find((t) => t.id === threadId);
      if (thread) {
        thread.unreadCount = 0;
      }
    },
    addThread(state, action: PayloadAction<{ id: string; name: string }>) {
      const { id, name } = action.payload;
      const exists = state.threads.some((t) => t.id === id);
      if (!exists) {
        const threadMessages = state.messages[id] || [];
        const unreadCount = threadMessages.filter((msg) => !msg.read).length;

        state.threads.push({ id, name, unreadCount });
      }
    },
    sendMessage: {
      reducer(
        state,
        action: PayloadAction<{ message: Message; threadId: string }>
      ) {
        const { message, threadId } = action.payload;
        if (!state.messages[threadId]) {
          state.messages[threadId] = [];
        }
        state.messages[threadId].push({ ...message, read: true });
      },
      prepare(payload: { threadId: string; author: string; content: string }) {
        return {
          payload: {
            message: {
              id: nanoid(),
              author: payload.author,
              content: payload.content,
              timestamp: new Date().toISOString(),
              read: true,
            },
            threadId: payload.threadId,
          },
        };
      },
    },

    receiveMessage: {
      reducer(
        state,
        action: PayloadAction<{ message: Message; threadId: string }>
      ) {
        const { message, threadId } = action.payload;
        const isActive = threadId === state.selectedThreadId;

        const msg: Message = {
          ...message,
          read: isActive,
        };

        if (!state.messages[threadId]) {
          state.messages[threadId] = [];
        }

        state.messages[threadId].push(msg);

        if (!isActive) {
          const thread = state.threads.find((t) => t.id === threadId);
          if (thread) {
            thread.unreadCount += 1;
          }
        }
      },
      prepare(payload: { threadId: string; author: string; content: string }) {
        return {
          payload: {
            message: {
              id: nanoid(),
              author: payload.author,
              content: payload.content,
              timestamp: new Date().toISOString(),
              read: false,
            },
            threadId: payload.threadId,
          },
        };
      },
    },
  },
});

export const { selectThread, addThread, sendMessage, receiveMessage } =
  chatSlice.actions;

export default chatSlice.reducer;
