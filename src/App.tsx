import { ColorChanger } from "./components/ColorChanger";
import { SpecialForm } from "./components/SpecialForm";
import { TareaComponent } from "./components/App/TareaComponent";
import { WidthHeightTracker } from "./components/WidthHeightTracker";

function App() {
  return (
    <div className="min-h-screen  p-8 ">
      <div className="max-w-5xl mx-auto grid gap-6">
        <TareaComponent>
          <ColorChanger />
        </TareaComponent>

        <TareaComponent>
          <WidthHeightTracker />
        </TareaComponent>

        <TareaComponent>
          <SpecialForm />
        </TareaComponent>
      </div>
    </div>
  );
}

export default App;
