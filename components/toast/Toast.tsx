import { FaXmark } from 'react-icons/fa6';

enum ToastTypes {
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
}

// type ToastVariations<T = boolean> = { [key in keyof typeof ToastTypes]: T };

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

const Toast = ({ type = 'success', className = '', children }: ToastProps) => {
  return (
    <div
      className={`relative border-l-4 rounded-md max-w-lg border p-4 ${toastClass[type]} ${className}`}
    >
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
  return <h2 className={`font-bold mb-1 ${className}`}>{children}</h2>;
};

Toast.Close = function Title({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-1 top-1 p-2 opacity-80 rounded-full hover:bg-black/[0.05]"
    >
      <FaXmark />
    </button>
  );
};

export default Toast;
