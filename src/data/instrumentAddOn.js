import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const instrumentRating = {
  data: {
    title: "Instrument Helicopter Add-On",
    url: "/add-on/instrument-helicopter-add-on",
    slug: "instrument-helicopter-add-on",
    siteTitle: "Instrument Helicopter Add-On | TruFlight Academy - Dallas, TX",
    siteDescription:
      "Master instrument flying with TruFlight Academy's 2-month IFR training program in Dallas, Texas. Learn to navigate in all weather conditions with advanced avionics and gain the skills needed for a professional flying career.",
    siteKeywords:
      "instrument rating Dallas, IFR training Texas, instrument flight training Dallas, weather flying training Dallas, precision approach training, instrument pilot certification, IFR checkride preparation Dallas, instrument rating course Dallas, advanced pilot training, instrument flight rules training, flight training Dallas, pilot school Dallas, aviation training Northern Dallas",
    intro:
      "Earning an Instrument Rating (IR) enables you to fly in low visibility and adverse weather conditions using instruments. At TruFlight Academy, our IR training emphasizes precision in IFR operations, preparing you for commercial aviation and airline operations.",
    description: [
      "Already instrument-rated in fixed-wing but want to bring that precision into the rotorcraft world? Our Instrument Helicopter Add-On program is designed to give you the specialized knowledge and skills you need to safely and confidently fly helicopters in instrument conditions. All you need is your instrument certificate, a current FAA medical (third-class or higher), and the drive to take your helicopter flying to the next level.",
      "In this course, you’ll dive into helicopter-specific instrument procedures, regulations, and airspace requirements, while sharpening your navigation skills with GPS, VOR, and ILS systems. You’ll also learn advanced weather strategies and decision-making tailored for helicopter operations. By the time you finish, you’ll be equipped to handle the clouds, the gauges, and everything in between, because in a helicopter, precision isn’t just important, it’s essential.",
    ],
    primaryImage: "/src/assets/truflight-helicopter-dawn-takeoff.jpg",
    primaryAlt: "TruFlight Academy Helicopter Dawn Takeoff at Dallas Airport",
    secondaryImage: "/src/assets/cabri-panel-truflight.jpg",
    secondaryAlt: "Cabri G2 helicopter instrument panel at TruFlight Academy",
    prerequisites: [
      "NO FAA WRITTEN exam required",
      "Already hold a Commercial (or higher) Pilot Certificate",
      "Hold a current 3rd Class (or higher) FAA Medical Certificate",
      "Complete 50 hours* Dual Instruction",
      "Complete 35 hours of PIC in a helicopter",
    ],
    duration: "2 months, 3-5 times/week",
    steps: [
      {
        title: "50 hours of cross-country flight time as pilot in command",
        icon: FaRegEdit,
        description:
          "To earn your Instrument Rating, you need to have at least 50 hours of cross-country flight time as the pilot in command (PIC). Of those hours, at least 10 must be in helicopters for an instrument-helicopter rating.",
      },
      {
        title:
          "Have a total of 40 hours of actual or simulated instrument time",
        icon: FaRegPaperPlane,
        description:
          "This time should include at least 15 hours of instrument flight training from an authorized instructor in the aircraft type for your rating and instrument training specific to helicopters on cross-country flight procedures that includes at least one cross-country.",
      },
    ],
  },
};

export default instrumentRating;
