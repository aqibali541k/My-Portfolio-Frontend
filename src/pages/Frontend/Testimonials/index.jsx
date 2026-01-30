import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Dory Z.",
    country: "Canada",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "And who cares about the end result. Kudos to Aqib! I applaud you sir!",
  },
  {
    id: 2,
    name: "Mark P.",
    country: "United States",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Aqib is a gentleman, well knowledgeable, Outstanding work my friend!",
  },
  {
    id: 3,
    name: "Brittany R.",
    country: "United Kingdom",
    image: "https://i.pravatar.cc/100?img=47",
    review: "Perfect as usual! Aqib has quickly become my go-to developer.",
  },
  {
    id: 4,
    name: "Ali K.",
    country: "Pakistan",
    image: "https://i.pravatar.cc/100?img=18",
    review:
      "One of the most skilled and passionate MERN developers I've worked with.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          What Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
                  bg-white
                  rounded-3xl
                  shadow-md
                  hover:shadow-xl
                  transition
                  p-6
                  h-full
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-100"
                />

                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h3>

                <span className="text-sm text-gray-500 italic">
                  {item.country}
                </span>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
