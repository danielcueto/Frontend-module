import { ControlledUncontrolledForm } from "./components/ControlledUncontrolledForm"; 
import { KeyboardControlledCounter } from "./components/KeyboardControlledCounter";
import { UserCard } from "./components/UserCard"; 
import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-50 p-8 ">
      <div className="max-w-5xl mx-auto grid gap-6">
        <div className="rounded-lg overflow-hidden shadow-md bg-white border border-lime-300">
          <div className="bg-linear-to-r from-lime-300 to-lime-600 text-black p-4">
            <h1 className="text-2xl font-bold text-center">Tarea 1</h1>
          </div>
          <div className="p-6 flex justify-center">
            <ControlledUncontrolledForm />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md bg-white border border-lime-300">
          <div className="bg-linear-to-r from-lime-300 to-lime-600 text-black p-4">
            <h1 className="text-2xl font-bold text-center">Tarea 2</h1>
          </div>
          <div className="p-6 flex justify-center flex-wrap gap-5">
            <UserCard name="Daniel" age={23} onClick={() => alert("O")} />
            <UserCard name="Maria" age={30} onClick={() => alert("s")} />
            <UserCard name="Juan" age={25} onClick={() => alert("t")} />
            <UserCard name="Laura" age={28} onClick={() => alert("i")} />
            <UserCard name="Carlos" age={35} onClick={() => alert("a")} />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md bg-white border border-lime-300">
          <div className="bg-linear-to-r from-lime-300 to-lime-600 text-black p-4">
            <h1 className="text-2xl font-bold text-center">Tarea 3</h1>
          </div>
          <div className="p-6">
            <UserList />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md bg-white border border-lime-300">
          <div className="bg-linear-to-r from-lime-300 to-lime-600 text-black p-4">
            <h1 className="text-2xl font-bold text-center">Tarea 4</h1>
          </div>
          <div className="p-6">
            <KeyboardControlledCounter/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
