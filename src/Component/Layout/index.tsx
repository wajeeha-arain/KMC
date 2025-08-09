import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
    <Navbar />
      {children}
    <Footer />
    </div>
  );
};

export default Layout;