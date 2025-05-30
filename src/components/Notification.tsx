import { useNotification } from '../context/useNotification';

export function Notification() {
  const { notification, clearNotification } = useNotification();

  if (!notification) return null;

  const getNotificationStyles = (type: string) => {
    const baseStyles = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium flex items-center gap-3 min-w-96 transition-all duration-300 ease-in-out";
    
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-500`;
      case 'error':
        return `${baseStyles} bg-red-500`;
      case 'info':
      default:
        return `${baseStyles} bg-blue-500`;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      default:
        return 'ℹ';
    }
  };

  return (
    <div className={getNotificationStyles(notification.type)}>
      <span className="text-xl">{getIcon(notification.type)}</span>
      <span className="flex-1">{notification.message}</span>
      <button
        onClick={clearNotification}
        className="text-white hover:text-gray-200 text-lg font-bold ml-2"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}
