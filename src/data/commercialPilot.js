import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";

const commercialPilot = {
  data: {
    title: "Commercial Pilot",
    url: "/programs/commercial-pilot",
    slug: "commercial-pilot",
    siteTitle:
      "Commercial Helicopter Pilot Training in Dallas, TX | TruFlight Academy",
    siteDescription:
      "Advance your aviation career with TruFlight Academy’s Commercial Pilot Program in Dallas, TX. Gain hands-on experience in Cabri G2 helicopters, log required flight hours, and master advanced maneuvers to fly professionally. Enroll today and start flying for hire!",
    siteKeywords:
      "commercial pilot license Dallas, CPL training Texas, professional pilot training Dallas, career pilot course Dallas, pilot preparation, commercial aviation training Dallas, professional pilot certification, aviation career training Dallas, commercial pilot course, pilot training Dallas, flight training Dallas, pilot school Texas, aviation training Northern Dallas",
    intro:
      "The Commercial Pilot Certificate (CPL) elevates your skills to professional standards, enabling you to receive compensation for flying services. Our CPL program at Truflight Academy focuses on advanced maneuvers, complex aircraft operations, and aviation professionalism, unlocking opportunities in passenger transport, cargo, and specialized aviation fields.",
    description: [
      "Ready to turn your passion into a paycheck? The Commercial Pilot License (CPL) is your ticket to start flying for hire. Whether you’re dreaming of tours, utility work, or building hours toward bigger opportunities, this certification unlocks the professional side of aviation. At TruFlight Academy, our Commercial program is designed to sharpen your skills, expand your knowledge, and prepare you for the responsibilities that come with being a pro pilot.",
      "Through advanced ground and flight training in our Cabri G2 helicopters, you’ll refine your maneuvers, master complex procedures, and gain the confidence to operate at a higher standard. From precision hovering to smooth-as-butter landings, we’ll help you polish every detail. By the time you finish, you won’t just be flying, you’ll be flying like someone who actually gets paid to do it (because you will).",
    ],
    primaryImage:
      "/src/assets/truflight-at-dallas-airport-commercial-pilot.jpg",
    primaryAlt: "Commercial pilot student flying a Cabri G2 helicopter",
    secondaryImage:
      "/src/assets/commercial-pilot-student-at-truflight-academy.jpg",
    secondaryAlt:
      "Commercial pilot student at TruFlight Academy in Dallas, Texas",
    prerequisites: [
      "Hold a current private pilot certificate",
      "Be able to read, speak, write, and understand the English language.",
      "Be at least 18 years old.",
      "Be a U.S. citizen or legal resident.",
    ],
    duration: "3 months, 3-5 times/week",
    steps: [
      {
        title: "Must log at least 150 hours of flight time as a pilot",
        icon: FaListUl,
        description:
          "This includes 100 hours in powered aircraft, of which 50 hours must be in helicopters.",
      },
      {
        title: "100 hours of pilot-in-command flight time",
        icon: FaRegEdit,
        description:
          "This includes 35 hours in helicopters and 10 hours of cross-country flight time.",
      },
      {
        title:
          "20 hours of training on the areas of operation listed in § 61.127(b)(3)",
        icon: FaRegPaperPlane,
        description:
          "This includes at least 5 hours IFR training including, partial panel skills, recovery from unusual flight attitudes, and intercepting and tracking navigational systems. One 2-hour daytime cross country flight of more than 50 nautical miles. One 2-hour nighttime cross country flight of more than 50 nautical miles.",
      },
      {
        title: "3 hours in a helicopter with an authorized instructor",
        icon: MdChecklist,
        description:
          "This must be within 2 months before the date of your practical test.",
      },
      {
        title: "10 hours of solo flight time in a helicopter",
        icon: FaUserCheck,
        description:
          "One cross-country flight with landings at a minimum of three points, with one segment consisting of a straight-line distance of at least 50 nautical miles from the original point of departure",
      },
      {
        title: "5 hours of night VFR flight time",
        icon: MdNightsStay,
        description:
          "This includes 10 takeoffs and landings at an airport, with each landing involving a flight in the traffic pattern.",
      },
    ],
  },
};

export default commercialPilot;
