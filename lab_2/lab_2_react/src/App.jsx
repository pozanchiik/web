import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ExpierenceAndProjects from "./components/ExpierenceAndProjects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


//grid grid-cols-4 gap-4 w-full mx-auto max-w-4xl items-center p-6 bg-transparent
function App(){
  return(
    <div className= "w-full min-h-screen grid grid-cols-4 gap-4 p-6 bg-slate-900 text-white">
      <Header/>
        <AboutMe/>
        <ExpierenceAndProjects/>
        <Education/>
        <Skills/>
      <Footer/>
    </div>
  );
}
export default App;