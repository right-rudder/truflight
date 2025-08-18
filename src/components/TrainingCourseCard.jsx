import { FaArrowRight } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const TrainingCourseCard = ({
  name,
  duration,
  description,
  button,
  href,
  image,
}) => {
  return (
    <div className="shadow-primary-500/30 flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="h-62 min-h-62">
        <img
          src={image.src}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-5 p-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-bold">{name}</h2>
          <p className="flex items-baseline gap-2 font-semibold">
            <MdAccessTime className="text-primary-500 size-6 translate-y-1" />
            <span>{duration}</span>
          </p>
          <hr className="text-gray-300" />
          <p className="paragraph text-accent-400 text-base font-medium tracking-wide">
            {description}
          </p>
        </div>

        <a
          href={href}
          className="btn-secondary text-primary-500! border-primary-500! group flex border-t px-5! whitespace-nowrap hover:text-white!"
        >
          Enroll Now
          <FaArrowRight className="text-primary-500 duration-500 group-hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default TrainingCourseCard;
