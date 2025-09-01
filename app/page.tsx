import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Project from "./components/Project";
import Skill from "./components/Skill";


export default function Home() {
  return (
    // this thing shows up at home page 
    <div>
<LandingPage/>
<Project/>
<Skill/>
<Education/>
<Contact/>
<Footer/>
    </div>
    
  );
}
