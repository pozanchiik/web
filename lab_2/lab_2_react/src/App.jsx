import { useState, useEffect } from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ExpierenceAndProjects from "./components/ExpierenceAndProjects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Reviews from "./components/Reviev";
import ContactForm from "./components/ContactForm";

function App(){
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return(
    <div className={`min-h-screen p-4 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'}`}>
      <div className="flex justify-end mb-4">
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-lime-600 text-white rounded hover:bg-lime-500 text-sm">
          Theme: {theme.toUpperCase()}
        </button>
      </div>

      <Header />
      
      <div className="grid gap-4 mt-4 mb-4">
        <AboutMe />
        <ExpierenceAndProjects />
        <Education />
        <Skills />
      </div>

      <Reviews />
      <ContactForm />

      <div className="grid gap-4 mt-4 mb-4">
        <Footer />
      </div>
      
    </div>
  );
}
export default App;