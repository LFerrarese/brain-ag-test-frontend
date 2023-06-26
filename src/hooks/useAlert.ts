import { toast, ToastOptions } from "react-hot-toast";
import { Hook } from "@interfaces";

type UseAlert = {
  success: (message: string) => void;
  error: (message: string) => void;
  loading: () => void;
};

export const useAlert: Hook<UseAlert> = () => {
  const options: ToastOptions = {
    position: "bottom-center",
  };

  const success = (message: string) => toast.success(message, options);

  const error = (message: string) => toast.error(message, options);

  const loading = () => toast.loading("Aguarde...", options);

  return {
    success,
    error,
    loading,
  };
};
