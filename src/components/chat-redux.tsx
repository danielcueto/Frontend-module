import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useMessageSimulation } from "@/hooks/useMessageSimulation";
import { 
  selectThreads, 
  selectSelectedThread, 
  selectSelectedThreadMessages,
  selectSelectedThreadId 
} from "@/features/chat/chatSelectors";
import { 
  selectThread, 
  addThread, 
  sendMessage 
} from "@/features/chat/chatSlice";
import { type Message } from "@/features/chat/chatTypes";

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Chat = () => {
  const dispatch = useAppDispatch();
  const [newMessage, setNewMessage] = useState("");
  
  const threads = useAppSelector(selectThreads);
  const selectedThread = useAppSelector(selectSelectedThread);
  const selectedThreadId = useAppSelector(selectSelectedThreadId);
  const messages = useAppSelector(selectSelectedThreadMessages);

  useEffect(() => {
    if (threads.length === 0) {
      const initialThreads = [
        { id: "general", name: "General" },
      ];
      
      initialThreads.forEach(thread => {
        dispatch(addThread(thread));
      });
      
      dispatch(selectThread("general"));
    }
  }, [dispatch, threads.length]);

  const threadIds = threads.map(t => t.id);
  useMessageSimulation(threadIds);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedThreadId) return;

    dispatch(sendMessage({
      threadId: selectedThreadId,
      author: "Tú",
      content: newMessage.trim()
    }));
    
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full w-full">

      <div className="flex-1 flex flex-col border-2 border-border rounded-base bg-secondary-background">
        
        <div className="p-4 border-b-2 border-border bg-main">
          <h2 className="text-lg font-heading text-main-foreground">
            {selectedThread ? `#${selectedThread.name}` : 'Selecciona un canal'}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message: Message) => (
            <div
              key={message.id}
              className={cn(
                "flex flex-col space-y-1",
                message.author === "Tú" ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "max-w-xs lg:max-w-md px-3 py-2 rounded-base border-2 border-border relative",
                  message.author === "Tú"
                    ? "bg-main text-main-foreground"
                    : "bg-background text-foreground",
                  !message.read && message.author !== "Tú" && "shadow-shadow"
                )}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading opacity-70">
                    {message.author}
                  </span>
                  <span className="text-xs opacity-50">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                <p className="text-sm font-base">{message.content}</p>
                {!message.read && message.author !== "Tú" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-chart-4 rounded-full border-2 border-border"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedThread && (
          <div className="p-4 border-t-2 border-border bg-background">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder={`Mensaje en #${selectedThread.name}...`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={newMessage.trim() === ""}
                variant="default"
              >
                Enviar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
