import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePollHorizontal,
  faChartLine,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div className="w-48 h-screen shadow-lg ">
      <div className=" bg-white shadow-lg left-7 p-4 h-screen align-baseline">
        <div className="slider fixed  top-16  bg-white flex-col flex-1  font-semibold  p-auto gap-10">
          <div class="">
            <nav class="flex-1 px-2 py-4 bg-white">
              <a
                href="#"
                class="flex whitespace-break-spaces items-center px-3 py-2 text-gray-400 hover:text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.15 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.5"
                  />
                </svg>  Dashboard
              </a>
              <a
                href="#"
                class="flex whitespace-break-spaces  items-center px-4 py-2 mt-2 text-gray-400 hover:text-indigo-500"
              >
                <FontAwesomeIcon
                  className="text-base "
                  icon={faSquarePollHorizontal}
                />{" "}  Blogs
              </a>
              <a
                href="#"
                class="flex whitespace-break-spaces items-center px-4 py-2 mt-2 text-gray-400 hover:text-indigo-500"
              >
                <FontAwesomeIcon
                  className="text-base "
                  icon={faSquarePollHorizontal}
                  rotation={270}
                />{" "}   Finances
              </a>
              <a
                href="#"
                class="flex whitespace-break-spaces items-center px-4 py-2 mt-2 text-gray-400 hover:text-indigo-500"
              >
                <FontAwesomeIcon className="text-base " icon={faChartLine} />{" "}   Pitches
              </a>
            </nav>
          </div>
          <div className="slider-bot z-20 bg-white">
            <nav class="fixed block bottom-0 px-2 py-4 bg-white">
              <a
                href="#"
                class="flex whitespace-break-spaces items-center px-4 py-2 mt-2 text-gray-400 hover:text-indigo-500"
              >
                <FontAwesomeIcon className="text-base" icon={faGear} />   Settings
              </a>
              <a
                href="#"
                class="flex whitespace-break-spaces items-center px-4 py-2 mt-2 text-gray-400 hover:text-indigo-500"
              >
                <FontAwesomeIcon
                  className="text-base"
                  icon={faArrowRightFromBracket}
                  rotation={180}
                />{" "}   Log out
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
