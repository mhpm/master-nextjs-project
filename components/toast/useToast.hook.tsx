import { useState } from 'react';
import { ToastType } from './Toast.Types';

export const useToast = () => {
  const [toastList, setToastList] = useState<ToastType[]>([]);

  const openToast = (newToast: ToastType) => {
    setToastList([...toastList, newToast]);
  };

  return {
    toastList,
    openToast,
  };
};
