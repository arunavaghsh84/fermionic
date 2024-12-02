import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      {children}
    </>
  );
}
