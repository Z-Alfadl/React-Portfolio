import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Footer from "./Footer";

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
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/*Conditionally renders page component */}
      {renderPage()}
      <Footer />
    </div>
  );
}
