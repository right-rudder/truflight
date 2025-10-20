import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const instrumentRating = {
  data: {
    title: "Instrument Helicopter Add-On",
    subtitle: "NO FAA WRITTEN exam required",
    url: "/add-on/instrument-helicopter-add-on",
    slug: "instrument-helicopter-add-on",
    siteTitle:
      "Instrument Helicopter Add-On Training in Dallas, TX | TruFlight Academy",
    siteDescription:
      "Take your instrument flying skills to the next level with TruFlight Academy’s Instrument Helicopter Add-On program in Dallas, TX. Designed for instrument-rated pilots, this course teaches helicopter-specific procedures, advanced navigation, and precision flying in instrument conditions. Enroll today and master the skies!",
    siteKeywords:
      "helicopter school, rotory wing add on, instrument rating Dallas, IFR training Texas, instrument flight training Dallas, weather flying training Dallas, precision approach training, instrument pilot certification, IFR checkride preparation Dallas, instrument rating course Dallas, advanced pilot training, instrument flight rules training, flight training Dallas, pilot school Dallas, aviation training Northern Dallas",
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
      "Already hold an Instrument (or higher) Pilot Certificate",
      "Hold a current 3rd Class (or higher) FAA Medical Certificate",
      "10 hours* of IFR cross-country in a helicopter",
      "15 hours* total instrument time in helicopters",
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
