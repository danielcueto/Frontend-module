import { TriggerButton2 } from './TriggerButton2';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 mb-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Notification System Demo</h1>
        <TriggerButton2 />
      </div>
    </nav>
  );
}
