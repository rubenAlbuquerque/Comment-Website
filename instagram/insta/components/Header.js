import Image from "next/image";
import React from "react";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => setImageLoaded(!imageLoaded);

    const [isOpen, setIsopen] = useState(false);

    // atribuir string a src
    const src = "perfil.PNG";
    return (
        <nav className="bg-gray-800">
            <div className="flex items-center justify-between p-2 mx-20">
                <div className="flex items-center  p-1">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-6 mr-3 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <h1 className="text-white font-semibold text-lg">
                        Network
                    </h1>
                </div>

                <form className="w-5/12  relative flex items-center ">
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="w-full px-5 bg-gray-700 rounded-full text-white"
                    />
                    <div className="absolute pointer-events-none right-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-white">
                            <path
                                fillRule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </form>

                <div className="flex p-1">
                    <a
                        href="/"
                        className="px-4 py-2  text-white hover:bg-gray-700 rounded-lg transition-transform duration-500 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 text-white hover:bg-gray-700 rounded-lg transition-transform duration-500 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-7">
                            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 text-white hover:bg-gray-700 rounded-lg transition-transform duration-500 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-7">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 text-white hover:bg-gray-700 rounded-lg transition-transform duration-500 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-7">
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        onClick={() => setIsopen((prev) => !prev)}
                        className="px-4 py-1 transition-transform duration-500 hover:scale-125">
                        {src && (
                            <img
                                className="h-9 rounded-full"
                                src={src}
                                onLoad={handleImageLoad}
                            />
                        )}
                    </a>
                </div>
            </div>

            {isOpen && (
                <div
                    className="z-10 text-gray-200 dark:divide-gray-600 dark:bg-gray-700 absolute right-10 rounded-lg mt-0 
                                shadow w-44 ">
                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg  border-b-2 border-slate-800">
                        <h4>Monkey D. Luffy</h4>
                        <h4>Monkey@gmail.com</h4>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg">
                        <h4>Profile</h4>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg">
                        <h4>Amigos Chegados</h4>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg border-b-2 border-slate-800 ">
                        <h4>Guadados</h4>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg">
                        <h4>Sign out</h4>
                    </div>
                </div>
            )}
        </nav>
    );
}
