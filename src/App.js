// import { Link } from "react-router-dom";
import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./Components/ProductCard";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Newsfeed from "./Components/Newsfeed";
import JobCard from "./Components/JobCard";
function App() {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        <span className="heading-gradient">Latest</span>
        <span className="heading"> Products</span>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
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

      <p style={{ textAlign: "center" }}>
        <span className="heading-gradient">Available</span>
        <span className="heading"> High Paying Jobs</span>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
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
          <JobCard />
        </SwiperSlide>
        <SwiperSlide>
          <JobCard />
        </SwiperSlide>
        <SwiperSlide>
          <JobCard />
        </SwiperSlide>
        <SwiperSlide>
          <JobCard />
        </SwiperSlide>
        <SwiperSlide>
          <JobCard />
        </SwiperSlide>
      </Swiper>

      <p style={{ textAlign: "center" }}>
        <span className="heading-gradient">Trending</span>
        <span className="heading"> Newsfeed Topics</span>
      </p>

      <Newsfeed />

      <p style={{ textAlign: "center" }}>
        <span className="heading-gradient">Trending</span>
        <span className="heading"> Business</span>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
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
