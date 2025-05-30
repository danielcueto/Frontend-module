import SocialMediaForm from "./components/SocialMediaForm";
import { TestForm } from "./components/TestForm";
import { TareaComponent } from "./TareaComponent";
import RatingForm from "./components/RatingForm";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-50 p-8 ">
      <div className="max-w-5xl mx-auto grid gap-6">
        <TareaComponent title="Tarea 2">
          <SocialMediaForm />
        </TareaComponent>

        <TareaComponent title="prueba: Formulario con UseForm">
          <TestForm />
        </TareaComponent>

        <TareaComponent title="Rating Form with Formik and Yup">
          <RatingForm />
        </TareaComponent>

        <TareaComponent title="Multi-Step Form (Refactored)">
          <MultiStepForm />
        </TareaComponent>
      </div>
    </div>
  );
}

export default App;
