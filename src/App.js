// import { Link } from "react-router-dom";
import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./Components/ProductCard";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function App() {
  return (
    <>
      <p className="heading">
        Latest <strong>Products</strong>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>

      <p className="heading" style={{ marginTop: 50 }}>
        Available <strong>High Paying Jobs</strong>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
