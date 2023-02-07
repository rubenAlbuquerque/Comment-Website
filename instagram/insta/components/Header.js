import Image from "next/image";
import React from "react";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
// import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
    return (
        // <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        //     <div class="container flex flex-wrap items-center justify-between mx-auto">
        //         <a href="https://flowbite.com/" class="flex items-center">
        //             <img
        //                 src="https://flowbite.com/docs/images/logo.svg"
        //                 class="h-6 mr-3 sm:h-9"
        //                 alt="Flowbite Logo"
        //             />
        //             <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        //                 Network
        //             </span>
        //         </a>
        //         <div class="flex md:order-1">
        //             <div class="relative hidden md:block">
        //                 <input
        //                     type="text"
        //                     id="search-navbar"
        //                     class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50
        //                         focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        //                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //                     placeholder="Search..."
        //                 />
        //             </div>
        //         </div>
        //         <div
        //             class="items-center justify-between w-full md:flex md:w-auto md:order-2"
        //             id="navbar-search">
        //             <ul
        //                 class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg
        //             bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
        //             md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                 <li>
        //                     <a
        //                         href="#"
        //                         class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
        //                         aria-current="page">
        //                         Home
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        //                         Video
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        //                         Notifications
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#"
        //                         class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        //                         Messages
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" class="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="h-6 mr-3 sm:h-10"
                        alt="Flowbite Logo"
                    />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-multi-level"
                    type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-multi-level"
                    aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-multi-level">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                                aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Dropdown{" "}
                                <svg
                                    class="w-4 h-4 ml-1"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>

                            <div
                                id="dropdownNavbar"
                                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul
                                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                                    aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li aria-labelledby="dropdownNavbarLink">
                                        <button
                                            id="doubleDropdownButton"
                                            data-dropdown-toggle="doubleDropdown"
                                            data-dropdown-placement="right-start"
                                            type="button"
                                            class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dropdown
                                            <svg
                                                aria-hidden="true"
                                                class="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                        <div
                                            id="doubleDropdown"
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul
                                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                        Overview
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                        My downloads
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                        Billing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                        Rewards
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Earnings
                                        </a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav className="flex items-center justify-between p-4 bg-gray-800">
        //     <div className="flex items-center">
        //         <img
        //             src="https://flowbite.com/docs/images/logo.svg"
        //             class="h-6 mr-3 sm:h-9"
        //             alt="Flowbite Logo"
        //         />
        //         <h1 className="text-white font-medium">Network</h1>
        //     </div>

        //     <form className="w-64 mx-auto">
        //         <input
        //             type="text"
        //             placeholder="Pesquisar"
        //             className="w-full p-2 bg-gray-700 rounded-full text-white"
        //         />
        //     </form>

        //     <div className="flex">
        //         <a
        //             href="#"
        //             className="px-4 py-2 text-white hover:bg-gray-700 rounded">
        //             <i className="fas fa-home"></i>
        //         </a>
        //         <a
        //             href="#"
        //             className="px-4 py-2 text-white hover:bg-gray-700 rounded">
        //             <i className="fas fa-video"></i>
        //         </a>
        //         <a
        //             href="#"
        //             className="px-4 py-2 text-white hover:bg-gray-700 rounded">
        //             <i className="fas fa-bell"></i>
        //         </a>
        //         <a
        //             href="#"
        //             className="px-4 py-2 text-white hover:bg-gray-700 rounded">
        //             <i className="fas fa-envelope"></i>
        //         </a>
        //         <a
        //             href="#"
        //             className="px-4 py-2 text-white hover:bg-gray-700 rounded">
        //             <i className="fas fa-user"></i>
        //         </a>
        //     </div>
        // </nav>
    );
}
