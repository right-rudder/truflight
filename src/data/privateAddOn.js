import { IoMdTime } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const privatePilot = {
  data: {
    title: "Private Helicopter Add-On",
    subtitle: "NO FAA WRITTEN exam required",
    url: "/add-on/private-helicopter-add-on",
    slug: "private-helicopter-add-on",
    siteTitle:
      "Private Helicopter Add-On Training in Dallas, TX | TruFlight Academy",
    siteDescription:
      "Expand your pilot skills with TruFlight Academy’s Private Helicopter Add-On program in Dallas, TX. Designed for licensed private pilots, this course teaches rotorcraft fundamentals, hovering, takeoffs, landings, and more in Cabri G2 helicopters. Enroll today and take the controls!",
    siteKeywords:
      "helicopter school, rotory wing add on, private pilot license Texas, PPL training Dallas, student pilot course Dallas, beginner flight training Texas, recreational pilot license, private pilot certification Texas, learn to fly private pilot, flight training for beginners Texas, private pilot ground school, Texas private pilot course, flight training Dallas, pilot school Salt Lake City, aviation training Northern Texas, discovery flight Texas",
    primaryImage:
      "/src/assets/truflight-instructor-with-student-on-helicopter.jpg",
    primaryAlt:
      "Student of the Private Pilot Flight Training Program at TruFlight Academy",
    secondaryImage:
      "/src/assets/truflight-student-finishing-helicopter-program.jpg",
    secondaryAlt: "TruFlight Academy Helicopter at Dallas Airport",
    intro:
      "The Private Pilot License (PPL) is your first step toward professional training and qualifies you to fly for personal or recreational purposes. At TruFlight Academy, our Private Pilot course integrates flight training and ground instruction through a structured syllabus, accelerating your learning and laying the foundation for future advanced ratings and certifications.",
    description: [
      "Already a licensed pilot but want to add some rotorcraft flair to your logbook? Our Private Helicopter Add-On program is built for fixed-wing pilots (or anyone with a private certificate) who want to expand into non-commercial helicopter flying. With just a private pilot certificate and a current third-class FAA medical, you’re ready to take the controls and earn your helicopter rating.",
      "Through a mix of classroom sessions and hands-on training in our Cabri G2 helicopters, you’ll cover everything from rotor aerodynamics and systems to performance, weight and balance. In the air, you’ll practice hovering, takeoffs, landings, and other fundamental maneuvers that make helicopter flying both challenging and exhilarating. By the end, you won’t just know how to fly a helicopter, you’ll know how to make it look easy.",
    ],
    prerequisites: [
      "NO FAA WRITTEN exam required",
      "Already hold a Private (or higher) Pilot Certificate",
      "Hold a current 3rd Class (or higher) FAA Medical Certificate",
      "Complete 20 hours* dual instruction",
      "Complete 10 hours of Solo Flight Time",
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
