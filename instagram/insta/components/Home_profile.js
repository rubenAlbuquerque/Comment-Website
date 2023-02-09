import React from "react";

export default function Home_profile() {
    return (
        <div className="col-span-2 bg-slate-200 rounded-lg">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mt-2 ml-2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
                <img
                    src="perfil.PNG"
                    className="w-28 h-28 rounded-full outline outline-offset-4 outline-4 outline-gray-400 
                    transition-transform duration-500 hover:scale-105 cursor-pointer"
                    alt="perfil"
                />
                <h1 className="font-semibold text-lg pt-2 pb-0">
                    Monkey D. Luffy
                </h1>
                <h2 className="text-lg pb-2">King Of The Pirates</h2>
                <button className="bg-slate-700 text-white font-semibold rounded-lg px-8 py-2 mt-1">
                    Edit
                </button>
            </div>
            <div className="flex flex-row items-center mt-5 mx-10 justify-between">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black inline font-semibold text-xl">
                        10
                    </h1>
                    <p>Publicações</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black inline font-semibold text-xl">
                        5M
                    </h1>
                    <p>Followers</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black inline font-semibold text-xl">
                        4m
                    </h1>
                    <p>Followings</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 mx-5">
                <p>
                    Text da miha buibliografica pessao ou profissional. Text da
                    miha buibliografica pessao ou profissional. Text da miha
                    buibliografica pessao ou profissional Text da miha
                    buibliografica pessao ou profissional Text da miha
                    buibliografica pessao ou profissional Text da miha
                    buibliografica pessao ou profissional Text da miha Text da
                    miha buibliografica pessao ou profissional
                </p>
                <button
                    className="bg-gradient-to-r from-red-300 via-orange-600 to-red-600
                text-white rounded-lg shadow-md px-28 py-2 my-4 transition-transform duration-500 hover:scale-110">
                    {" "}
                    Create Post
                </button>
            </div>
        </div>
    );
}
