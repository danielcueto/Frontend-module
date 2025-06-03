import { ThemeProvider } from "./components/theme-provider";
import Layout from "./Layout";
import Chat from "./components/chat-redux";

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">     
     <Layout>
      <div className="h-full w-full p-6">
        <Chat />
      </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
