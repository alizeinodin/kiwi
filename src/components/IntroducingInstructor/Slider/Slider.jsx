import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  const next = useRef(null);
  const pre = useRef(null);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y]}
      className="mySwiper"
      spaceBetween={400}
      cardsEffect={{
        rotate: true,
        perSlideOffset: 4,
        perSlideRotate: 5,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = pre.current;
        swiper.params.navigation.nextEl = next.current;

        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide className="swSlide">
        <div className="slide-content">
          <h3 className="content-title">من کی ام؟</h3>
          <p className="content-description">
            هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده
            مستثنی ‌نیست اما در کل از انتخابم واقعا راضیم. هر کاری سختی و چالش
            های خودشو داره و برنامه نویسی هم از این قاعده مستثنی ‌نیست اما در کل
            از انتخابم واقعا راضیم. هر کاری سختی و چالش های خودشو داره و برنامه
            نویسی هم از این قاعده مستثنی ‌نیست اما در کل از انتخابم واقعا راضیم.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swSlide">
        <div className="slide-content">
          <h3 className="content-title"> چرا؟</h3>
          <p className="content-description">
            هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده
            مستثنی ‌نیست اما در کل از انتخابم واقعا راضیم.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swSlide">
        <div className="slide-content">
          <h3 className="content-title">من کی ام؟</h3>
          <p className="content-description">
            هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده
            مستثنی ‌نیست اما در کل از انتخابم واقعا راضیم.
          </p>
        </div>
      </SwiperSlide>
      <div className="next-pre">
        <svg ref={pre}>
          <path
            opacity="0.4"
            d="M7.12872 6.34863L2.5608 5.94466C1.53567 5.94466 0.704529 6.7839 0.704529 7.81901C0.704529 8.85412 1.53567 9.69336 2.5608 9.69336L7.12872 9.28938C7.93292 9.28938 8.58491 8.63105 8.58491 7.81901C8.58491 7.00561 7.93292 6.34863 7.12872 6.34863"
            fill="currentColor"
          ></path>
          <path
            d="M22.4681 6.42292C22.3967 6.35083 22.13 6.04614 21.8795 5.79314C20.4179 4.20852 16.6016 1.61734 14.6053 0.824345C14.3022 0.697847 13.5357 0.428528 13.1248 0.409485C12.7328 0.409485 12.3583 0.500618 12.0014 0.680164C11.5555 0.931801 11.1999 1.32898 11.0032 1.79689C10.8779 2.12061 10.6812 3.09315 10.6812 3.11084C10.4859 4.17315 10.3795 5.9006 10.3795 7.81032C10.3795 9.62754 10.4859 11.2843 10.6462 12.3643C10.6637 12.3833 10.8604 13.5898 11.0746 14.0033C11.4666 14.7596 12.2331 15.2275 13.0534 15.2275H13.1248C13.6596 15.2098 14.7831 14.7405 14.7831 14.7242C16.673 13.9312 20.399 11.4652 21.897 9.82613C21.897 9.82613 22.3199 9.40447 22.5031 9.14195C22.7887 8.76381 22.9315 8.29591 22.9315 7.828C22.9315 7.30568 22.7712 6.82009 22.4681 6.42292"
            fill="currentColor"
          ></path>
        </svg>

        <svg ref={next}>
          <path
            opacity="0.4"
            d="M16.5073 6.34863L21.0752 5.94466C22.1003 5.94466 22.9315 6.7839 22.9315 7.81901C22.9315 8.85412 22.1003 9.69336 21.0752 9.69336L16.5073 9.28938C15.7031 9.28938 15.0511 8.63105 15.0511 7.81901C15.0511 7.00561 15.7031 6.34863 16.5073 6.34863"
            fill="currentColor"
          ></path>
          <path
            d="M1.16786 6.42292C1.23926 6.35083 1.50598 6.04614 1.75653 5.79314C3.21811 4.20852 7.03437 1.61734 9.03073 0.824345C9.33382 0.697847 10.1003 0.428528 10.5112 0.409485C10.9032 0.409485 11.2776 0.500618 11.6346 0.680164C12.0805 0.931801 12.4361 1.32898 12.6328 1.79689C12.7581 2.12061 12.9548 3.09315 12.9548 3.11084C13.1501 4.17315 13.2565 5.9006 13.2565 7.81032C13.2565 9.62754 13.1501 11.2843 12.9898 12.3643C12.9723 12.3833 12.7756 13.5898 12.5614 14.0033C12.1694 14.7596 11.4029 15.2275 10.5826 15.2275H10.5112C9.97638 15.2098 8.85292 14.7405 8.85292 14.7242C6.96297 13.9312 3.23697 11.4652 1.73902 9.82613C1.73902 9.82613 1.31604 9.40447 1.13284 9.14195C0.84726 8.76381 0.70447 8.29591 0.70447 7.828C0.70447 7.30568 0.864772 6.82009 1.16786 6.42292"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </Swiper>
  );
};

export default Slider;
