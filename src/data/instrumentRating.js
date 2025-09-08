import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const instrumentRating = {
  data: {
    title: "Instrument Pilot",
    url: "/programs/instrument-pilot",
    slug: "instrument-pilot",
    siteTitle: "Helicopter Instrument Rating in Dallas, TX | TruFlight Academy",
    siteDescription:
      "Take your helicopter skills to the next level with an Instrument Rating at TruFlight Academy in Dallas, TX. Master flying in low visibility using only instruments, gain hands-on experience in Cabri G2 helicopters, and prepare for FAA exams. Enroll today!",
    siteKeywords:
      "instrument rating Dallas, IFR training Texas, instrument flight training Dallas, weather flying training Dallas, precision approach training, instrument pilot certification, IFR checkride preparation Dallas, instrument rating course Dallas, advanced pilot training, instrument flight rules training, flight training Dallas, pilot school Dallas, aviation training Northern Dallas",
    intro:
      "Earning an Instrument Rating (IR) enables you to fly in low visibility and adverse weather conditions using instruments. At TruFlight Academy, our IR training emphasizes precision in IFR operations, preparing you for commercial aviation and airline operations.",
    description: [
      "Flying in clear blue skies is fun, but real pilots know the weather doesn’t always cooperate. That’s where your Instrument Rating comes in. With this certification, you’ll learn how to fly confidently using only the helicopter’s instruments, giving you the skills to handle low visibility, clouds, and those less-than-perfect days. At TruFlight Academy, we make sure you’re not just checking a box, you’re becoming a sharper, more capable aviator.",
      "Our Instrument program combines in-depth ground instruction with practical training in our modern Cabri G2 helicopters, equipped with advanced avionics. You’ll gain the ability to navigate safely without visual references, fine-tune your precision flying, and prepare to pass the FAA knowledge and checkride exams. Plus, you’ll earn serious bragging rights, after all, anyone can fly on a sunny day, but it takes a true pro to dance through the clouds.",
    ],
    primaryImage: "/src/assets/truflight-helicopter-interior.avif",
    primaryAlt: "Instrument panel of a Cabri G2 helicopter",
    secondaryImage: "/src/assets/trulflight-cabri-helicopter-in-the-sunset.jpg",
    secondaryAlt: "TruFlight Academy Cabri G2 Helicopter in the Sunset",
    prerequisites: [
      "Hold a current private pilot certificate",
      "Be able to read, speak, write, and understand the English language.",
      "Be at least 17 years old.",
      "Be a U.S. citizen or legal resident.",
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
