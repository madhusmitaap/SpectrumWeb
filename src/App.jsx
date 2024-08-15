import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Leads from "./Components/Leads/Leads";
import Project from "./Components/Project/Project";

const App = () => {
  return(
     <main className="overflow-x-hidden bg-white dark:bg-black">
       <Navbar  />
       <Project/>
       <Leads/>
      
    </main>
);
};

export default App;
