import React, { useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

export default function Portfolio() {
  //Initial State set to 'About', used to control which page component to render
  const [currentPage, setCurrentPage] = useState("About");

  //Conditionally renders a component page based on currentPage state
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  //Function to handle setting currentPage state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/*Conditionally renders page component */}
      {renderPage()}
      <Footer />
    </div>
  );
}
