"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spotify } from "../Spotify";
import "./styles.css";

export default function Carousel() {
  return (
    <div className="h-max w-full bg-transparent py-10">
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#00000082",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          } as React.CSSProperties
        }
        allowTouchMove={true}
        pagination={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Spotify link="https://open.spotify.com/track/2xZsVEA4ZajlwoIbQRTjtC?utm_source=generator" />
        </SwiperSlide>
        <SwiperSlide>
          <Spotify link="https://open.spotify.com/track/29tGL35iH0SU4AfPCIanVZ?utm_source=generator" />
        </SwiperSlide>
        <SwiperSlide>
          <Spotify link="https://open.spotify.com/track/2Sz2Gcps6wwYGoVbRWH0Du?utm_source=generator" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
