import { toast } from "react-toastify";

export const successTost = (text) =>
  toast.success(text, {
    position: "bottom-right",
  });
