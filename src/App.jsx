import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow pt-16 relative">
          {}
          <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-gray-900 dark:to-slate-900 transition-colors duration-700 bg-[length:400%_400%] animate-gradient-x"></div>
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-300/40 dark:bg-purple-900/40 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-color-dodge"></div>
            {}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/40 dark:bg-blue-900/40 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-color-dodge"></div>
            {}
            <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-teal-300/40 dark:bg-teal-900/40 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-color-dodge"></div>
            {}
            <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-pink-300/40 dark:bg-indigo-900/40 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-color-dodge"></div>
          </div>
          <div className="relative z-10 w-full">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
