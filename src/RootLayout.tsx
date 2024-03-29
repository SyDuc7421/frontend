import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="flex min-w-[screen]  flex-col justify-center ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
