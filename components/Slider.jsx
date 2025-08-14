import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderButton from "./SliderButton";

function Slider() {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar image */}
          <div className="relative xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt="alt"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text testimonials */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
      {/* slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar image */}
          <div className="relative xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt="alt"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text testimonials */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
      {/* slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar image */}
          <div className="relative xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt="alt"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text testimonials */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider button */}
      <SliderButton />
    </Swiper>
  );
}

export default Slider;
