import { TareaComponent } from "./TareaComponent";
import { NotificationProvider } from "./context/NotificationContext";
import { Notification } from "./components/Notification";
import { Navbar } from "./components/Navbar";
import { TriggerButton } from "./components/TriggerButton";

function App() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-50 p-8">
        <Notification />
        <div className="max-w-5xl mx-auto">
          <Navbar />
          <div className="grid gap-6">
            <TareaComponent title="Notification System Demo">
              <TriggerButton />
            </TareaComponent>
          </div>
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;
