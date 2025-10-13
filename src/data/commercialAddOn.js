import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";

const commercialPilot = {
  data: {
    title: "Commercial Helicopter Add-On",
    subtitle: "NO FAA WRITTEN exam required",
    url: "/add-on/commercial-helicopter-add-on",
    slug: "commercial-helicopter-add-on",
    siteTitle:
      "Commercial Helicopter Add-On Training in Dallas, TX | TruFlight Academy",
    siteDescription:
      "Expand your aviation career with TruFlight Academy’s Commercial Helicopter Add-On program in Dallas, TX. Designed for instrument-rated pilots, this course transitions you from fixed-wing to rotorcraft, teaching advanced maneuvers, helicopter systems, and IFR cross-country skills. Enroll today and take your commercial flying to new heights!",
    siteKeywords:
      "commercial pilot license Dallas, CPL training Texas, professional pilot training Dallas, career pilot course Dallas, pilot preparation, commercial aviation training Dallas, professional pilot certification, aviation career training Dallas, commercial pilot course, pilot training Dallas, flight training Dallas, pilot school Texas, aviation training Northern Dallas",
    intro:
      "The Commercial Pilot Certificate (CPL) elevates your skills to professional standards, enabling you to receive compensation for flying services. Our CPL program at Truflight Academy focuses on advanced maneuvers, complex aircraft operations, and aviation professionalism, unlocking opportunities in passenger transport, cargo, and specialized aviation fields.",
    description: [
      "Are you a commercial pilot ready to take your skills to the skies in a helicopter? Our Commercial Helicopter Add-On program is the perfect way to upgrade your license and broaden your career opportunities. Based in Dallas, Texas, TruFlight Academy offers one of the most comprehensive add-on programs in the region, designed to transition you smoothly from fixed-wing to rotorcraft flying.",
      "With ground and in-flight instruction tailored to your experience, you’ll master everything from helicopter aerodynamics to advanced maneuvers in our modern Cabri G2 aircraft. As long as you hold a valid commercial pilot certificate and a current FAA medical (third-class or higher), you’re ready to start. Think of it as adding a whole new dimension to your aviation skills, because flying sideways and backwards isn’t just cool, it’s commercial.",
    ],
    primaryImage:
      "/src/assets/commercial-helicopter-flight-training-truflight.jpg",
    primaryAlt:
      "Commercial Helicopter Flight Training at TruFlight Academy in Dallas, Texas",
    secondaryImage: "/src/assets/commercial-flight-truflight-academy.jpg",
    secondaryAlt:
      "Commercial Flight Training at TruFlight Academy in Dallas, Texas",
    prerequisites: [
      "NO FAA WRITTEN exam required",
      "Already hold a Commercial (or higher) Pilot Certificate",
      "Hold a current 3rd Class (or higher) FAA Medical Certificate",
      "10 hours* of IFR cross-country in a helicopter",
      "15 hours* total instrument time in helicopters",
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
