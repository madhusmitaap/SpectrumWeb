import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import { ServiceData } from "../constants";

const Events = () => {
    return (
        <div className="flex items-center justify-center flex-col h-[900px] bg-[#000000]">
            <h1 className="font-semibold text-white text-6xl pb-20">Events</h1>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 1,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="relative lg:h-[500px] lg:w-[1200px] md:h-[350px] md:w-[850px] h-[360px] w-full rounded-xl bg-[#3e2d64] overflow-hidden shadow-md">
                            {/* Image section */}
                            <div className="absolute inset-0 lg:w-full lg:h-8/10 md:w-full md:h-full max-sm:w-full max-sm:h-full">
                                <img src={item.backgroundImage} alt="Card Image" className="w-full h-full object-cover rounded-xl" />
                            </div>

                            {/* Title section */}
                            <div className="relative flex items-center justify-center h-full w-full px-10">
                                <h1 className="absolute inset-0 flex items-center justify-center text-5xl max-sm:text-2xl font-bold text-center px-8  py-2 lg:px-40 lg:py-0 max-sm:relative max-sm:z-10 max-sm:text-white">
                                    {item.title}
                                </h1>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Events;
