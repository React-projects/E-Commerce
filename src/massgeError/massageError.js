import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (massage, type) => {
  if (type === "error") {
    toast.error(massage);
  } else if (type === "warning") {
    toast.warning(massage);
  } else if (type === "success") {
    toast.success(massage);
  }
};

const Toast = () => {
  return <ToastContainer autoClose={1100} />;
};

export { notify, Toast };
