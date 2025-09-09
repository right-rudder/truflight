import { IoMdTime } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const cfi = {
  data: {
    title: "Certified Flight Instructor (CFI)",
    url: "/programs/certified-flight-instructor",
    slug: "certified-flight-instructor",
    siteTitle:
      "Certified Flight Instructor (CFI) Training in Dallas, Texas | TruFlight Academy",
    siteDescription:
      "Earn your Certified Flight Instructor (CFI) certificate with TruFlight Academy near Dallas, Texas. Learn advanced teaching skills, prepare for your written exam, and build flight hours while training the next generation of pilots.",
    siteKeywords:
      "cfi training Texas, certified flight instructor Dallas, helicopter instructor license, flight instructor certificate Texas, become a CFI Dallas, teach helicopter training Texas, flight instructor school North Texas, rotorcraft CFI training",
    primaryImage:
      "/src/assets/certified-flight-instructor-truflight-academy.jpg",
    primaryAlt:
      "Certified Flight Instructor (CFI) Training at TruFlight Academy in Dallas, Texas",
    secondaryImage: "/src/assets/helicopter-flight-instructor-truflight.jpg",
    secondaryAlt:
      "TruFlight Academy Helicopter Flight Instructor in Dallas, Texas",
    intro:
      "The Certified Flight Instructor (CFI) certificate is your gateway to teaching others how to fly while building valuable flight hours. At TruFlight Academy, our CFI program equips you with the instructional skills, knowledge, and confidence to guide the next generation of helicopter pilots.",
    description: [
      "Becoming a Certified Flight Instructor (CFI) isn’t just about teaching others, it’s about mastering your own skills at the highest level. At TruFlight Academy, our CFI program is designed to prepare you to share your passion for flying while sharpening your own abilities as a professional pilot. The best part? Once you earn your CFI, all previously held pilot certificates (fixed-wing or rotary) are reinstated, so your hard-earned experience never goes to waste.",
      "Through focused ground instruction and hands-on flight training, you’ll learn how to communicate complex concepts, demonstrate maneuvers with precision, and mentor the next generation of helicopter pilots. Along the way, you’ll gain valuable PIC hours, expand your career opportunities, and discover that teaching is one of the most rewarding ways to fly. After all, the only thing better than flying helicopters is teaching someone else how to do it (and watching them realize it’s even more fun than they imagined).",
    ],
    prerequisites: [
      "Hold a Commercial Pilot Certificate (Helicopter).",
      "Be able to read, speak, write, and understand the English language.",
      "Be at least 18 years old.",
      "Hold a current 3rd Class (or higher) FAA Medical Certificate",
    ],
    duration: "2-3 months, depending on training schedule",
    steps: [
      {
        title: "Ground school focused on teaching methods and FAA regulations",
        icon: IoMdTime,
        description:
          "Learn advanced aeronautical knowledge and develop effective teaching techniques. You’ll prepare for both the FAA CFI written exam and the practical test.",
      },
      {
        title: "Flight training in instructional maneuvers",
        icon: FaRegEdit,
        description:
          "You’ll learn how to demonstrate and teach all flight maneuvers to students, while refining your own flying skills under the supervision of an experienced instructor.",
      },
      {
        title: "Prepare for the CFI checkride",
        icon: FaRegPaperPlane,
        description:
          "Your training culminates in the FAA CFI practical test, where you’ll demonstrate both flying and teaching proficiency. Passing earns you your CFI certificate and the ability to instruct new pilots.",
      },
    ],
  },
};

export default cfi;
