import { IoMdTime } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const privatePilot = {
  data: {
    title: "Private Pilot",
    url: "/programs/private-pilot",
    slug: "private-pilot",
    siteTitle:
      "Private Pilot License Training in Ogden, Utah | TruFlight Academy",
    siteDescription:
      "Earn your Private Pilot License in as little as 3 months at TruFlight Academy in Ogden, UT. Learn to fly with expert CFIs in a structured, affordable program with Cessna aircraft and personalized instruction.",
    siteKeywords:
      "private pilot license Utah, PPL training Salt Lake City, student pilot course Ogden, beginner flight training Utah, recreational pilot license, private pilot certification Utah, learn to fly private pilot, flight training for beginners Utah, private pilot ground school, Utah private pilot course, flight training Ogden, pilot school Salt Lake City, aviation training Northern Utah, discovery flight Utah",
    primaryImage: "/src/assets/private-pilot-training-at-truflight.jpg",
    primaryAlt:
      "Student of the Private Pilot Flight Training Program at TruFlight Academy",
    secondaryImage: "/src/assets/trulflight-helicopter-in-dallas-airport.jpg",
    secondaryAlt: "Ground school at TruFlight Academy in Ogden, Utah",
    intro:
      "The Private Pilot License (PPL) is your first step toward professional training and qualifies you to fly for personal or recreational purposes. At TruFlight Academy, our Private Pilot course integrates flight training and ground instruction through a structured syllabus, accelerating your learning and laying the foundation for future advanced ratings and certifications.",
    description: [
      "The Private Pilot License (PPL) is the first step in your journey to becoming a pilot. Whether you're looking to fly for personal enjoyment or pursue a career in aviation, the PPL is the foundation of your training. At TruFlight Academy, our comprehensive program is designed to provide you with the knowledge and skills needed to become a safe and proficient pilot.",
      "Our PPL program combines ground instruction with flight training to give you a well-rounded education in aviation. With a focus on safety, professionalism, and individual attention, our program prepares you to pass the FAA written and practical exams and earn your pilot's license. Whether you're a beginner or an experienced pilot looking to advance your skills, our program is tailored to meet your needs and help you achieve your goals.",
    ],
    prerequisites: [
      "Be able to read, speak, write, and understand the English language.",
      "Be at least 17 years old.",
      "Be a U.S. citizen or legal resident.",
    ],
    duration: "3 months, 2-3 times/week",
    steps: [
      {
        title:
          "40 hours minimum of flight time, which must include 30 hours of flight instruction",
        icon: IoMdTime,
        description:
          "During your flight training, you'll work closely with a Certified Flight Instructor (CFI) to develop your flying skills. Your CFI will guide you through each step of the process, ensuring that you build confidence and proficiency in the cockpit.",
      },
      {
        title: "3 hours of cross-country flight training in a helicopter",
        icon: FaRegEdit,
        description:
          "Cross-country flight training is an essential part of your private pilot training. You'll learn how to plan and execute flights to destinations away from your home airport, including navigation, communication, and weather considerations. This experience will help you develop the skills needed to fly safely and confidently in a variety of conditions.",
      },
      {
        title: "10 hours of solo flight time in a helicopter",
        icon: FaRegPaperPlane,
        description:
          "Solo flight time is a critical component of your private pilot training. During this time, you'll have the opportunity to practice and refine your flying skills on your own, building confidence and independence in the cockpit. Your CFI will provide guidance and support throughout the process, ensuring that you are prepared for solo flight.",
      },
    ],
  },
};

export default privatePilot;
