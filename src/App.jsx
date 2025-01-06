import "@styles/App.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <header className="bg-[hsl(210,50%,96%)]">
        <Navbar />
      </header>
      <Outlet />
      <footer className="bg-[hsl(210,50%,96%)]">
        <Footer />
      </footer>
    </>
  );
}

export default App;
