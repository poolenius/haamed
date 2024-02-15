"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spotify } from "../Spotify";
import "./styles.css";
export default function Slide() {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#00000082",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "10px",
          } as React.CSSProperties
        }
        pagination={true}
        allowTouchMove={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Spotify link="https://open.spotify.com/track/2xZsVEA4ZajlwoIbQRTjtC?utm_source=generator" />
          <div className="box-right"></div>
          <div className="box-left"></div>
          <div className="box-top-left"></div>
          <div className="box-top-right"></div>
          <div className="box-bottom-left"></div>
          <div className="box-bottom"></div>
          <div className="box-bottom-right"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Spotify link="https://open.spotify.com/track/29tGL35iH0SU4AfPCIanVZ?utm_source=generator" />
          <div className="box-right"></div>
          <div className="box-left"></div>
          <div className="box-top-left"></div>
          <div className="box-top-right"></div>
          <div className="box-bottom-left"></div>
          <div className="box-bottom"></div>
          <div className="box-bottom-right"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Spotify link="https://open.spotify.com/track/2Sz2Gcps6wwYGoVbRWH0Du?utm_source=generator" />
          <div className="box-right"></div>
          <div className="box-left"></div>
          <div className="box-top-left"></div>
          <div className="box-top-right"></div>
          <div className="box-bottom-left"></div>
          <div className="box-bottom"></div>
          <div className="box-bottom-right"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
