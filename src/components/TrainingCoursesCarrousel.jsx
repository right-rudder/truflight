import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrainingCourseCard from "./TrainingCourseCard";
import privatePilotImage from "../assets/private-pilot-at-truflight-academy-dallas.avif";
import instrumentRatingImage from "../assets/instrument-rating-truflight-academy.avif";
import commercialPilotImage from "../assets/commercial-pilot-at-truflight-academy-dallas.avif";
import slingLoadImage from "../assets/sling-load-training-truflight-academy-dallas.avif";

const TrainingCoursesCarrousel = () => {
  const courses = [
    {
      name: "Private Pilot",
      duration: "As little as 6 weeks",
      description:
        "The private pilot certificate is the first certification you will receive as a pilot.  You will be granted the privileges of flying a helicopter as the pilot in command and can fly passengers.",
      button: "Become a private pilot",
      href: "/enrollment-form",
      image: privatePilotImage,
    },
    {
      name: "Instrument Pilot",
      duration: "As little as 6 weeks",
      description:
        "Being an instrument rated pilot means that you've received training to fly a helicopter with sole reference to the flight instruments.  This allows you to safely navigate more challenging weather and makes you a sharper pilot.",
      button: "Become instrument rated",
      href: "/enrollment-form",
      image: instrumentRatingImage,
    },
    {
      name: "Commercial Pilot",
      duration: "As little as 6 weeks",
      description:
        "Obtaining a commercial pilot certificate allows you to fly for compensation or hire. Start your pilot career and gain flight experience while getting paid to fly.",
      button: "Start your pilot career",
      href: "/enrollment-form",
      image: commercialPilotImage,
    },
    {
      name: "External Load Training",
      duration: "As little as 6 weeks",
      description:
        "Learn how to safely and effectively transport cargo using a helicopter.  External load training is essential for pilots who want to work in utility, firefighting, or search and rescue operations.",
      button: "Become a CFI",
      href: "/enrollment-form",
      image: slingLoadImage,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper px-1!"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <TrainingCourseCard {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TrainingCoursesCarrousel;
