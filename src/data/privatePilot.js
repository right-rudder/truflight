import { IoMdTime } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const privatePilot = {
  data: {
    title: "Private Pilot",
    url: "/programs/private-pilot",
    slug: "private-pilot",
    siteTitle:
      "Private Pilot License Training in Dallas, Texas | TruFlight Academy",
    siteDescription:
      "Earn your Private Pilot License in as little as 3 months at TruFlight Academy in Dallas, TX. Learn to fly with expert CFIs in a structured, affordable program with Cessna aircraft and personalized instruction.",
    siteKeywords:
      "private pilot license Texas, PPL training Dallas, student pilot course Dallas, beginner flight training Texas, recreational pilot license, private pilot certification Texas, learn to fly private pilot, flight training for beginners Texas, private pilot ground school, Texas private pilot course, flight training Dallas, pilot school Salt Lake City, aviation training Northern Texas, discovery flight Texas",
    primaryImage: "/src/assets/private-pilot-training-at-truflight.jpg",
    primaryAlt:
      "Student of the Private Pilot Flight Training Program at TruFlight Academy",
    secondaryImage: "/src/assets/trulflight-helicopter-in-dallas-airport.jpg",
    secondaryAlt: "TruFlight Academy Helicopter at Dallas Airport",
    intro:
      "The Private Pilot License (PPL) is your first step toward professional training and qualifies you to fly for personal or recreational purposes. At TruFlight Academy, our Private Pilot course integrates flight training and ground instruction through a structured syllabus, accelerating your learning and laying the foundation for future advanced ratings and certifications.",
    description: [
      "The Private Pilot License (PPL) is your all-access pass to the skies. Whether you dream of flying for the sheer thrill of it or as the first step toward a professional aviation career, the PPL lays the foundation for everything that comes next. At TruFlight Academy, we’ll equip you with the knowledge, skills, and confidence to take command of a helicopter safely and skillfully.",
      "Our PPL program blends engaging ground school with hands-on flight training in our modern Cabri G2 helicopters. You’ll learn the fundamentals of aviation, master flight maneuvers, and prepare to ace the FAA written and practical exams. And don’t worry, we keep the atmosphere professional but fun (because who said safety and good humor can’t share the cockpit?). Whether you’re starting fresh or leveling up your flying skills, our instructors are here to guide your journey from student to licensed pilot.",
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
