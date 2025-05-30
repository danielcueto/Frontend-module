import { useNotification } from '../context/useNotification';

export function TriggerButton2() {
  const { showNotification } = useNotification();

  const handleWelcomeClick = () => {
    showNotification('Welcome to our application!', 'success');
  };

  const handleLogoutClick = () => {
    showNotification('You have been logged out successfully.', 'info');
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleWelcomeClick}
        className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-sm transition-colors"
      >
        Welcome
      </button>
      <button
        onClick={handleLogoutClick}
        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
      >
        Logout
      </button>
    </div>
  );
}