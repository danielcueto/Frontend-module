import { useNotification } from '../context/useNotification';

export function TriggerButton() {
  const { showNotification } = useNotification();

  const handleSuccessClick = () => {
    showNotification('Item saved successfully!', 'success');
  };

  const handleErrorClick = () => {
    showNotification('An error occurred while processing your request.', 'error');
  };

  const handleInfoClick = () => {
    showNotification('This is an informational message.', 'info');
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Main Content Triggers</h3>
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={handleSuccessClick}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Show Success
        </button>
        <button
          onClick={handleErrorClick}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Show Error
        </button>
       
        <button
          onClick={handleInfoClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Show Info
        </button>
      </div>
    </div>
  );
}
