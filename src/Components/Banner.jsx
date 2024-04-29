import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1549300461-11c5b94e8855?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-screen text-2xl md:text-4xl lg:text-8xl">
            <div className="w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-35 text-white">
              Sundarban
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1623885213877-731a59a6df1a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-screen flex text-2xl md:text-4xl lg:text-8xl">
            <div className="w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-35 text-white">
              {`Cox's Bazar Sea Beach`}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.unsplash.com/photo-1642179335770-82d5ffc4b439?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-screen text-2xl md:text-4xl lg:text-8xl">
            <div className="w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-35 text-white">
              Rangamati
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://plus.unsplash.com/premium_photo-1668611366479-cd5d2440d6a8?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-screen text-2xl md:text-4xl lg:text-8xl">
            <div className="w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-35 text-white">
              Bandarban
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Link className="absolute z-20 bottom-5 md:bottom-16 lg:bottom-20 left-1/2 text-3xl lg:text-7xl text-white text-center">
        <FaChevronDown className="animate-bounce" />
      </Link> */}
    </div>
  );
};

export default Banner;