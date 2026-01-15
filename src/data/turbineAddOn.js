import { IoMdTime } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const turbineTransition = {
  data: {
    title: "Turbine Transition Add-On",
    subtitle: "NO FAA WRITTEN exam required",
    url: "/add-on/turbine-transition-add-on",
    slug: "turbine-transition-add-on",
    siteTitle:
      "Turbine Transition Add-On Training in Texas | TruFlight Academy",
    siteDescription:
      "Prepare for turbine aircraft operations with TruFlight Academy’s Turbine Transition Add-On program in Texas. Designed for licensed pilots transitioning into turbine aircraft, this course covers turbine systems, engine management, performance planning, and real-world procedures. Call today for details and pricing.",
    siteKeywords:
      "turbine transition training Texas, turbine add on training, turbine aircraft training Texas, PT6 training Texas, jet transition training Texas, advanced pilot training Texas, turbine systems training, turbine engine management, high performance aircraft training, flight training Texas",
    primaryImage:
      "/src/assets/helicopter-more-applications.jpg",
    primaryAlt:
      "Pilot receiving turbine transition instruction at TruFlight Academy",
    secondaryImage:
      "/src/assets/helicopter-police.jpg",
    secondaryAlt:
      "Training aircraft on the ramp at TruFlight Academy in Texas",
    intro:
      "Transitioning into turbine aircraft requires a different mindset, deeper systems knowledge, and disciplined procedures. TruFlight Academy’s Turbine Transition Add-On is designed to help licensed pilots confidently move into turbine operations with structured, practical training.",
    description: [
      "This add-on program is ideal for pilots preparing for their first turbine aircraft, stepping into a new turbine platform, or looking to sharpen their turbine operating skills. Training focuses on turbine engine theory, systems, limitations, and real-world operating procedures that go beyond basic checkout flights.",
      "Through detailed ground instruction and scenario-based flight training (when applicable), you’ll learn proper engine start techniques, power management, performance planning, and abnormal procedures. By the end of the program, you’ll have a clear, repeatable process for operating turbine aircraft safely and professionally.",
    ],
    prerequisites: [
      "CALL FOR DETAILS AND PRICING",
      "Hold a Private Pilot Certificate (or higher)",
      "Hold a current FAA Medical Certificate (as required)",
      "Meet aircraft-specific requirements for turbine training",
    ],
    duration: "Custom scheduling available",
    steps: [
      {
        title:
          "Comprehensive turbine systems and engine theory training",
        icon: IoMdTime,
        description:
          "You’ll receive in-depth instruction on turbine engine operation, aircraft systems, limitations, and normal procedures. This foundation ensures you understand how turbine aircraft differ from piston-powered airplanes.",
      },
      {
        title: "Performance planning and turbine engine management",
        icon: FaRegEdit,
        description:
          "Learn how to properly plan takeoff and landing performance, manage power settings, monitor engine parameters, and operate within temperature and torque limits to protect the engine and improve consistency.",
      },
      {
        title: "Scenario-based turbine operations and flight training",
        icon: FaRegPaperPlane,
        description:
          "Apply what you’ve learned through structured flight profiles and real-world scenarios. Training emphasizes checklist discipline, abnormal indications, and decision-making so you can stay ahead of the aircraft in turbine environments.",
      },
    ],
  },
};

export default turbineTransition;
