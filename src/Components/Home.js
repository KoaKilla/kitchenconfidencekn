import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";



const Home = () => {
    return (
    <>
        <Navbar />
        <Outlet />
        <section className="contact">
            <h2>Contact Us</h2>
            <p>Phone: (250) - 338 - 3998</p>
            <p>Email: kitchenconfidencekn@gmail.com</p>
        </section>
        <footer>
            <p>&copy; 2023 Kitchen Confidence. All Rights Reserved.</p>
        </footer>
    </>
    );
  };

export default Home