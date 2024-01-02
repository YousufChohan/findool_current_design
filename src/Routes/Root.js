import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { Navbar } from "../Components/Navbar";
import "../App.css";
import Footer from "../Components/Footer";

export default function Root() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Navbar />

        <div className="main-content">
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}