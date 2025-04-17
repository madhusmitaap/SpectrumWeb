import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Wings from "./Components/Wings/Wings";
import Event from "./Components/Event/Event";
import Project  from "./Components/Project/Project";
import Leads from "./Components/Leads/Leads";
import Footer from "./Components/Footer/Footer";






const App = () => {
return (
  <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
    <Navbar />
    <Hero  />
    <Wings  />
    <Event  />
    <Project  />
    <Leads  />
    <Footer  />





</main>
  );
};

export default App;






