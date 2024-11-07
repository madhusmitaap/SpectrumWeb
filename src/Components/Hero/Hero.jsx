import React from "react";
import Robo from "../../assets/robo1.png";


const Hero = () => {
  return <>
    <div className="py-12 sm:py-0 dark:bg-black
      dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
           <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 place items-center relative z-10">

          {/*hero text section*/}
          <div className="order-2 sm:order-1 space-y-5 lg:pr-20">
             <h1 className="text-6xl font-semibold">
              SPECTRUM {" "}</h1>
                <h1 className="text-4xl font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r
               from-primary to-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!
               </span>
            </h1>
          </div>

            {/*image section*/}
            <div className="order-1 sm:order-2" >
              <img class="" src= {Robo} alt="" />
            </div>
          
           </div>
           {/*Animated blob*/}
           <div className="h-[300px] w-[300px] bg-gradient-to-r
            from-primary to-secondary rounded-full
            absolute top-0 left-0 blur-3xl animated-wrapper"></div>
          </div>
    </div>
      
    </>;
  
};

export default Hero;
