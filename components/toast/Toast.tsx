import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

enum ToastTypes {
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
}

interface ToastProps {
  /**
   * Toast title
   */
  type?: keyof typeof ToastTypes;
  /**
   * Optional Classes
   */
  className?: string;
  /**
   * optional closable button
   */
  closable?: boolean;
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
  /**
   * Toast content
   */
  children: React.ReactNode;
}

const toastClass: { [key in ToastTypes]: string } = {
  success: 'bg-green-100 text-green-600 border-green-200',
  warning: 'bg-yellow-100 text-yellow-600 border-yellow-200',
  danger: 'bg-red-100 text-red-600 border-red-200',
  info: 'bg-sky-100 text-sky-600 border-sky-200',
};

const Toast = ({
  type = 'success',
  className = '',
  onClose,
  closable,
  children,
}: ToastProps) => { 
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  function handleCloseClick() {
    setVisible(false);

    if (onClose) {
      onClose();
    }
  }

  return (
    <div
      className={`relative border-l-4 rounded-md max-w-lg border p-4 shadow-lg ${toastClass[type]} ${className}`}
    >
      {closable && (
        <button
          onClick={handleCloseClick}
          className="toast-close absolute right-1 top-1 p-2 opacity-80 rounded-full hover:bg-black/[0.05]"
        >
          <FaXmark />
        </button>
      )}
      {children}
    </div>
  );
};

Toast.Title = function Title({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={`toast-title font-bold mb-1 ${className}`}>{children}</h2>
  );
};

Toast.Content = function Content({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`toast-content font-light ${className}`}>{children}</div>
  );
};

export default Toast;
