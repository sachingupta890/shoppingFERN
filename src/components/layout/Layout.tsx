import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React from "react";

interface Props{
    children:React.ReactNode;
}

/* eslint-disable react/prop-types */
const Layout = ({ children }:Props) => {
    return (
        <div>
            <Navbar />
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
