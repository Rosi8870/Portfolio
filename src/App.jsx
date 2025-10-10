import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
// FIX: Added the missing import for 'motion' from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion';

// Import your page components (assuming the paths below are correct)
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import WelcomeScreen from "./Pages/WelcomeScreen";
import ThankYouPage from "./Pages/ThankYou";
import ProjectDetails from "./components/ProjectDetail";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";
import LoadingScreen from "./components/LoadingScreen"; 

// --- Component Layouts ---

// Layout for the main scrolling sections (Home, About, Portfolio, Contact)
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      {/* Use AnimatePresence to handle the exit animation of the WelcomeScreen */}
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} key="welcome" />
        ) : (
          // FIX: The 'motion' component is now available here
          <motion.div 
            key="main-content" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            {/* All main sections are rendered here, relying on scroll-based navigation */}
            <Navbar />
            <AnimatedBackground />
            
            {/* The main content sections, likely linked by internal IDs for the Navbar */}
            <Home />
            <About />
            <Portofolio />
            <ContactPage />
            
            {/* Footer component */}
            <footer>
              <center>
                <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
                <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                  © 2025{" "}
                  <a href="www.linkedin.com/in/roshinth-sojan-846880264" className="hover:underline">
                    ROSHINTH SOJAN™
                  </a>
                  . All Rights Reserved.
                </span>
              </center>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Layout for the full-page Project Details route
const ProjectPageLayout = () => (
  <>
    <Navbar />
    <AnimatedBackground />
    <ProjectDetails />
    {/* Project Page Footer */}
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Sojan™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

// Fallback component for unmatched routes
const ErrorPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#030014] text-white px-4">
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
      404 - Page Not Found
    </h1>
    <p className="mt-4 text-gray-400">The page you are looking for does not exist. Check the URL and try again.</p>
  </div>
);


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  // Use import.meta.env.BASE_URL provided by Vite for dynamic basename configuration
  // It is "/" in dev and "/Portfolio/" in production build (from package.json)
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Route for the main landing page, handling the welcome screen state */}
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        
        {/* Route for individual project details (using a dynamic URL segment: :projectId) */}
        <Route path="/project/:projectId" element={<ProjectPageLayout />} />
        
        {/* Route for Thank You page after form submission */}
        <Route path="/thank-you" element={<ThankYouPage />} />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;