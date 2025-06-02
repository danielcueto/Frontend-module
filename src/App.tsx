import { TareaComponent } from "./TareaComponent";
import { ExpensiveComponent } from "./SlowCalculation";
import { ToDoReducer } from "./ToDoReducer";
import { LazyComponent } from "./LazyComponent";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto grid gap-6">
        <TareaComponent title="tarea 1">
          <ExpensiveComponent/>
        </TareaComponent>

        <TareaComponent title="tarea 2">
          <ToDoReducer />
        </TareaComponent>

        <TareaComponent title="tarea 3">
          <LazyComponent/>
        </TareaComponent>
      </div>
    </div>
  );
}

export default App;
