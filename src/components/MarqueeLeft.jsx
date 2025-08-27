import Marquee from "react-fast-marquee";

const MarqueeRight = ({ children }) => {
  return (
    <>
      <Marquee autoFill={true} children={children}></Marquee>
    </>
  );
};

export default MarqueeRight;
