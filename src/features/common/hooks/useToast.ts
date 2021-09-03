import { toast } from 'react-toastify';
import { ToastType } from 'src/features/common';

export const useToast = () => {
  const onShowToast = (type: ToastType, toastText: string | Error) => {
    switch (type) {
      case 'success':
        toast.success(toastText);
        break;
      case 'info':
        toast.info(toastText);
        break;
      case 'warn':
        toast.warn(toastText);
        break;
      case 'error':
        toast.error(toastText);
        break;
      default:
        toast.success(toastText);
        break;
    }
  };

  return onShowToast;
};
