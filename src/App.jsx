import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Wings from "./Components/Wings/Wings";
import Events from "./Components/Events/Events";
import Projects from "./Components/Projects/Projects";
import CurrentLeads from "./Components/Current Leads/CurrentLeads";
import OurTeam from "./Components/Our Team/OurTeam";
import Footer from "./Components/Footer/Footer";











const App = () => {
  return(
     <main className="overflow-x-hidden bg-white dark:bg-black">
       <Navbar  />
       <Hero  />
       <Wings  />
       <Events />
      <Projects  />
       <CurrentLeads  />
       <OurTeam  />
       <Footer  />
       
      
       
     
      </main>
);
};

export default App;
