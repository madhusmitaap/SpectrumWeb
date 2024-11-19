import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/SpaceCity5.jpeg";

const EventData = [
  {
    id: 1,
    img: Image1,
    title: "EVENT 1",
    title1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!",
  },
  {
    id: 2,
    img: Image1,
    title: "EVENT 2",
    title1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!",
  },
  {
    id: 3,
    img: Image1,
    title: "EVENT 3",
    title1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!",
  },
  {
    id: 4,
    img: Image1,
    title: "EVENT 4",
    title1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!",
  },
  {
    id: 5,
    img: Image1,
    title: "EVENT 5",
    title1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!",
  },
  {
    id: 6,
    img: Image1,
    title: "EVENT 6",
    title1:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ut!",
  },
];

const Event = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 400,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="py-12 sm:py-0 dark:bg-black
      dark:text-white duration-300 overflow-hidden">
    <div className="container py-10 sm:min-h-[400px]">
      <div>
        <h1
          data-aos="fade-up"
          className="text-3xl font-semibold text-center sm:text-4xl mb-5"
        >
          EVENTS
        </h1>
        <div
          className="overflow-hidden rounded-3xl min-h-[450px]
        sm:min-h-[400px]  flex justify-center items-center"
        >
          <div className="container pb-3 sm:pb-2">
            {/*Event Section*/}
            <Slider {...settings}>
              {EventData.map((data) => (
                <div key={data.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/*text content*/}
                    <div
                      className="flex flex-col justify-center gap-3 sm:pl-3 pt-5
                    sm:pt-9 text-center sm:text-left order-2 
                    sm:order-1 relative z-10"
                    >
                      <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold">
                        {data.title}
                      </h1>
                      <h1
                        className="text-2xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
               from-primary to-secondary"
                      >
                        {data.title1}
                      </h1>
                    </div>
                    {/*image content*/}
                    <div className="order-1 sm:order-2">
                      <div>
                        <img
                          src={data.img}
                          className="w-[600px] h-[500px] sm:h-[450px]
                            sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Event;
