import "./css/App.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <header className="bg-[#F9FBFD]">
        <Navbar />
      </header>
      <Outlet />
      <footer className="bg-[#2576BC]">
        <Footer />
      </footer>
    </>
  );
}

export default App;
