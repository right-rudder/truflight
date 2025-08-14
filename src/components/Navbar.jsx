import { navbarLinks } from "../data/navbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaHelicopter } from "react-icons/fa";
import { INSTAGRAM_URL, PHONE_NUMBER, YELP_URL } from "../consts.ts";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
    if (!openMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    setNavbar(window.scrollY >= 60);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    let selected =
      menuItem?.submenu?.some(
        (item) =>
          item.link === pathname ||
          item.link + "/" === pathname ||
          item.subsubmenu?.some(
            (subItem) =>
              subItem.link === pathname || subItem.link + "/" === pathname,
          ),
      ) ||
      menuItem?.subsubmenu?.some(
        (item) => item.link === pathname || item.link + "/" === pathname,
      ) ||
      menuItem.link === pathname ||
      menuItem.link + "/" === pathname;
    return selected;
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleItemClick = (index) => {
    if (hoveredIndex == index) {
      setHoveredIndex(null);
      setSubHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleSubItemClick = (event, subIndex) => {
    event.stopPropagation();
    if (subHoveredIndex == subIndex) setSubHoveredIndex(null);
    else setSubHoveredIndex(subIndex);
  };

  return (
    <nav className="fixed top-0 z-50 h-0 w-full tracking-wider">
      <div
        className={`${navBar || openMobile ? "from-blue-700 to-blue-900" : "from-transparent to-transparent"} ${showNavbar ? "-translate-y-28" : ""} bg-gradient-to-br duration-300`}
      >
        <div className="mx-auto max-w-[90rem] px-5">
          <div
            className={`relative flex h-24 items-center justify-between transition-all`}
            id="navbar"
          >
            <a href="/" className={`${navBar ? "w-48" : "w-48"} duration-200`}>
              <img
                src="/src/assets/truflight-logo.avif"
                alt="Blitz Aviation Logo"
                loading="eager"
                decoding="async"
                fetchPriority="auto"
                width="397"
                height="128"
                className="h-full w-full object-contain"
              ></img>
            </a>

            <div className="flex items-center justify-between gap-8">
              <div className="hidden flex-1 items-center gap-8 lg:flex">
                <ul className="flex items-center gap-10">
                  {navbarLinks.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        isActive(item, pathname)
                          ? "underline decoration-blue-800 decoration-2 underline-offset-[10px]"
                          : ""
                      } group relative last:no-underline`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          className="group-last:btn-primary decoration-primary-500 py-12 font-extrabold tracking-tight whitespace-nowrap decoration-2 underline-offset-[10px] duration-300 hover:underline group-last:hover:no-underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="decoration-primary-500 cursor-default py-12 font-extrabold tracking-tight whitespace-nowrap decoration-2 underline-offset-[10px] duration-300 hover:underline">
                          {item.name}
                        </span>
                      )}
                      {item.submenu && item.submenu.length > 0 && (
                        <ul
                          className={`bg-accent-500 absolute top-[36px] left-0 z-10 overflow-hidden rounded whitespace-nowrap text-white duration-300 ${
                            hoveredIndex === index
                              ? "h-auto w-auto opacity-100"
                              : "h-0 w-0 overflow-hidden opacity-0"
                          }`}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${
                                isActive(subitem, pathname)
                                  ? "bg-blue-800 text-white"
                                  : ""
                              } hover:bg-primary-500 relative duration-300 hover:text-white`}
                              onMouseEnter={() => setSubHoveredIndex(subIndex)}
                              onMouseLeave={() => setSubHoveredIndex(null)}
                            >
                              {subitem.link ? (
                                <a
                                  className="block px-4 py-2 font-bold tracking-tight"
                                  href={subitem.link}
                                >
                                  {subitem.name}
                                </a>
                              ) : (
                                <span className="block cursor-default p-3">
                                  {subitem.name}
                                </span>
                              )}

                              {subitem.subsubmenu &&
                                subitem.subsubmenu.length > 0 && (
                                  <ul
                                    className={`absolute top-0 left-full z-20 bg-black whitespace-nowrap duration-500 ${
                                      subHoveredIndex === subIndex
                                        ? "h-auto w-auto opacity-100"
                                        : "h-0 w-0 overflow-hidden opacity-0"
                                    }`}
                                  >
                                    {subitem.subsubmenu.map(
                                      (subsubitem, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className={`${
                                            isActive(subsubitem, pathname)
                                              ? "bg-blue-800"
                                              : ""
                                          } relative hover:bg-blue-800/90`}
                                        >
                                          <a
                                            href={subsubitem.link}
                                            className="block p-3"
                                          >
                                            {subsubitem.name}
                                          </a>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden flex-1 justify-end lg:flex">
                <a
                  href="#contactUs"
                  className="bg-primary-500 group flex items-center gap-3 rounded-full px-9 py-3 font-semibold tracking-tight text-white uppercase shadow-lg shadow-gray-300 duration-500 hover:bg-white hover:text-black"
                >
                  <FaHelicopter className="duration-300 group-hover:-translate-y-1" />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded p-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} h-6 w-6 text-white`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile ? "max-h-screen" : "max-h-0 delay-300"
        } absolute top-0 z-50 h-screen w-full overflow-x-hidden bg-black duration-300 ease-in-out lg:hidden`}
        id="mobile-menu"
      >
        <div className="flex justify-end py-6 pr-[26px] pl-5">
          <svg
            className={`h-6 w-6 cursor-pointer text-white`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            aria-hidden="true"
            id="hamburger-icon"
            onClick={handleHamburgerClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <a href="/" className="mx-auto block size-24">
          <img
            src="/src/assets/truflight-logo.avif"
            alt="Blitz Aviation Logo"
            loading="eager"
            decoding="async"
            fetchPriority="auto"
            width="397"
            height="128"
            className="h-full w-full object-contain"
          ></img>
        </a>

        {/* <div
          className={`absolute w-full h-32 bg-white top-16 z-30 duration-300  ${
            openMobile ? "translate-x-0 delay-300" : "-translate-x-full "
          }`}
        ></div> */}

        <ul className="mt-5 flex flex-col px-4 pt-2 pb-3">
          {navbarLinks.map((item, index) => (
            <li
              key={index}
              className="group relative"
              onClick={() => handleItemClick(index)}
            >
              {item.link ? (
                <a
                  href={item.link}
                  className="block border-blue-800 p-4 text-lg font-semibold whitespace-nowrap text-white duration-300 group-last:mx-5 group-last:mt-4 group-last:rounded-full group-last:bg-blue-800 group-last:px-8 group-last:py-4 group-last:text-center"
                >
                  {item.name}
                </a>
              ) : (
                <div className="flex w-full cursor-pointer justify-between border-blue-800 p-4 text-lg font-semibold whitespace-nowrap text-white duration-300">
                  <p>{item.name}</p>
                  <div
                    className={`pointer-events-none p-1 duration-300 ${
                      hoveredIndex === index
                        ? "-rotate-90 bg-white"
                        : "rotate-90 bg-blue-500"
                    } `}
                  >
                    <IoIosArrowForward
                      className={`${
                        hoveredIndex === index ? "text-blue-500" : "text-white"
                      } size-5`}
                    />
                  </div>
                </div>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <ul
                  className={`left-0 z-10 ml-5 overflow-hidden bg-black whitespace-nowrap text-white duration-500 ${
                    hoveredIndex === index ? "max-h-[28rem]" : "max-h-0"
                  }`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative"
                      onClick={(event) => handleSubItemClick(event, subIndex)}
                    >
                      {subitem.link ? (
                        <a
                          className="block p-5 font-semibold"
                          href={subitem.link}
                        >
                          {subitem.name}
                        </a>
                      ) : (
                        <div className="flex w-full cursor-pointer justify-between border-blue-800 p-5 text-lg font-semibold whitespace-nowrap text-white duration-300">
                          <p>{subitem.name}</p>
                          <div
                            className={`pointer-events-none rounded-full p-1 duration-300 ${
                              subHoveredIndex === subIndex
                                ? "rotate-90 bg-white"
                                : "-rotate-90 bg-blue-500"
                            } `}
                          >
                            <IoIosArrowForward
                              className={`${
                                subHoveredIndex === subIndex
                                  ? "text-blue-500"
                                  : "text-white"
                              } size-5`}
                            />
                          </div>
                        </div>
                      )}

                      {subitem.subsubmenu && subitem.subsubmenu.length > 0 && (
                        <ul
                          className={`left-full z-20 ml-8 overflow-hidden bg-black whitespace-nowrap duration-500 ${
                            subHoveredIndex === subIndex
                              ? "max-h-32"
                              : "max-h-0"
                          }`}
                        >
                          {subitem.subsubmenu.map((subsubitem, subsubIndex) => (
                            <li key={subsubIndex} className="relative">
                              <a
                                href={subsubitem.link}
                                className="block p-5 font-semibold"
                              >
                                {subsubitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="group relative">
            <a
              href="/about/our-story#contactUs"
              className="block border-blue-800 p-5 text-lg font-semibold whitespace-nowrap text-white duration-300 group-last:mx-5 group-last:mt-4 group-last:bg-blue-800 group-last:px-8 group-last:py-4 group-last:text-center"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-3 overflow-hidden p-5 px-10 text-white">
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-fit rounded-full border border-white bg-white p-2"
              aria-label="Call Blitz Aviation"
            >
              <FaPhone className="size-3 text-blue-500" />
            </a>
            <a href={`tel:${PHONE_NUMBER}`} aria-label="Call Blitz Aviation">
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="mt-2 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={YELP_URL} target="_blank">
              <span className="sr-only">Yelp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6 text-blue-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.12 12.496a8 8 0 0 0-.103 1.899c.053.801.08 1.202.47 1.467c.388.265.831.118 1.716-.176l.81-.27c1.967-.652 2.95-.979 2.986-1.639s-.905-1.093-2.788-1.96l-.777-.36c-.848-.39-1.272-.585-1.688-.365s-.486.615-.626 1.404m14.203-.178l-.472.114c-2.228.544-3.343.816-3.738.27c-.396-.545.275-1.429 1.617-3.195l.282-.37c.566-.746.85-1.119 1.337-1.136c.488-.018.755.282 1.289.882q.503.565.882 1.216c.4.685.599 1.027.405 1.451s-.663.538-1.602.768M17.94 19.1q.317-.42.581-.885c.379-.667.568-1 .438-1.444l-.017-.054c-.152-.434-.547-.579-1.336-.869c-2.057-.755-3.085-1.133-3.47-.595l-.043.065c-.344.571.287 1.553 1.549 3.517c.484.753.726 1.13 1.142 1.163l.052.002c.417.005.646-.297 1.104-.9m-5.94.977v-.298c0-2.341 0-3.512-.585-3.744c-.585-.231-1.234.683-2.53 2.51l-.167.234c-.531.75-.797 1.124-.697 1.593c.1.47.43.64 1.09.977q.556.285 1.157.458c.704.203 1.056.304 1.394.007c.338-.296.338-.776.338-1.737m0-16.195v2.682c0 2.813 0 4.22-.777 4.415c-.778.196-1.573-1.01-3.163-3.421L6.633 5.394c-.486-.738-.73-1.106-.597-1.513c.132-.406.507-.574 1.257-.908a12 12 0 0 1 2.601-.819c.88-.169 1.321-.253 1.714.037c.392.29.392.757.392 1.69"
                  color="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
