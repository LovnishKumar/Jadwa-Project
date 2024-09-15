import React from "react";
import Logo from "../assets/logo.png";
import Profile_pic from "../assets/profile.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Slider from "./Slider";

const Navbar = () => {
  return (
    <>
      <div className="w-full shadow-lg">
        <div class="flex  top-0   bg-gray-500">
          <div class="hidden md:flex flex-col align-middle  bg-white">
            <div class="flex  w-52  items-center ps-14  h-full bg-white">
              <span className="fixed z-50 ">
                <img width={"85px"} src={Logo} alt="" />
              </span>
            </div>
          </div>
          <div class="flex flex-col flex-1 justify-between ">
            <div class="flex items-center h-16 bg-white">
              <div class="flex items-center px-4">
                <div>
                  <Menu
                    as="div"
                    className="relative z-10 inline-block text-left "
                  >
                    <div>
                      <MenuButton className="inline-flex justify-between gap-x-1.5 w-56 py-3 rounded-xl text-gray-400 bg-[#fafafb] px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Afterglow
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Option 1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Option 2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Option 3
                          </a>
                        </MenuItem>
                        <form action="/">
                          <MenuItem>
                            <button
                              type="submit"
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                              Option 4
                            </button>
                          </MenuItem>
                        </form>
                      </div>
                    </MenuItems>
                  </Menu>

                  <Menu
                    as="div"
                    className="relative z-10 inline-block text-left "
                  >
                    <div className=" w-56 py-3  text-gray-800 px-3 py-2  text-xs">
                      <span className="inline-flex">
                        <h6 className="me-2 text-gray-400">Scenario</h6>
                        <MenuButton className="box  inline-flex">
                          Default
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="-mr-1 h-5 w-5 text-gray-400"
                          />
                        </MenuButton>
                      </span>
                    </div>

                    <MenuItems
                      transition
                      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-xs text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            Option 1
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>

                
                  <div class="relative flex left-40 z-10 align-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <input
                      class="w-32 z-50 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-none pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none "
                      placeholder="Search...."
                    />
                  </div>
                
                <div className="profile ms-48 z-10 justify-end flex">
                  <div className="profile_pic">
                    <img src={Profile_pic} alt="profile_pic" />
                  </div>
                  <div className="ms-3 text-gray-400">
                    <h4 className="text-gray-700">Robert Fox</h4>
                    <h6 className="text-gray-400">Finance Manager</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
