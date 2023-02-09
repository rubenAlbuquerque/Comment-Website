import React from "react";

const Feed = () => {
    return (
        <div className="col-span-6 rounded-lg ">
            <div name="Storys" className="p-0 flex flex-row items-center">
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">
                        Monkey D. Luffy
                    </h6>
                </div>

                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil2.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Zoro Roronoa</h6>
                </div>
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil3.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Brook</h6>
                </div>
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="nami.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Nami</h6>
                </div>
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil4.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Robin</h6>
                </div>
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil5.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Sanji</h6>
                </div>
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil6.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Usopp Ussop</h6>
                </div>
                <div
                    name="Story"
                    className=" p-2 flex flex-col items-center justify-center mx-1  ">
                    <img
                        src="perfil6.PNG"
                        className="w-14 h-14 items-center rounded-full outline outline-offset-4 
                        outline-4 outline-gray-400 mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        alt="perfil"
                    />
                    <h6 className="text-xs py-2 text-center">Usopp Ussop</h6>
                </div>
            </div>

            <div name="Posts" className="flex flex-col  bg-blue-50">
                <div className="grid grid-cols-12 grid-rows-10 gap-2 bg-red-500">
                    <div className="col-span-4 bg-red-300  row-span-1">
                        {/* bg-slate-200 */}
                        <div
                            name="Post"
                            className="mb-0  rounded-lg row-span-2">
                            {/* profile */}
                            <div
                                name="profilePost"
                                className="flex flex-row items-center justify-between px-3 py-2">
                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src="perfil.PNG"
                                        className="w-14 h-14 items-center rounded-full"
                                    />
                                    <div className="ml-2">
                                        <h2 className="font-semibold">
                                            Monkey D. Luffy
                                        </h2>
                                        <p className="text-xs">
                                            08/02/2021 12:01
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Imagem */}
                            <div name="post" className="">
                                <img
                                    src="perfil.PNG"
                                    className="items-center w-full rounded-md"
                                    alt="perfil"
                                />
                            </div>
                            {/* Acoes */}
                            <div
                                name="postacoes"
                                className="flex flex-row items-center justify-between p-1 ">
                                <div className="flex flex-row">
                                    <div className=" mr-3  transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                name="LikesWho"
                                className="flex flex-row items-center justify-between p-2 ">
                                <div>
                                    <p className="text-xs">
                                        Liked by Zoro and 903 others
                                    </p>
                                </div>
                                <div className="flex flex-row relative ">
                                    <img
                                        src="perfil2.PNG"
                                        className="w-4 h-4 rounded-full relative left-2 z-20"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil5.PNG"
                                        className="w-4 h-4 rounded-full relative left-1 z-10"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil4.PNG"
                                        className="w-4 h-4 rounded-full relative z-0"
                                        alt="perfil"
                                    />
                                </div>
                            </div>
                            {/* Bio */}
                            <div name="postBio" className=" px-2 py-1 ">
                                <p className="text-xs font-semibold">
                                    Monkey D. Luffy&nbsp;
                                    <span className="text-xs font-normal">
                                        Eu sou o luffy e vou ser o rei dos
                                        piratas. sempre que ouviceros o meu nome
                                        ficaras arripiado. &nbsp;
                                    </span>
                                    <span
                                        onClick=""
                                        className="text-xs font-normal cursor-pointer">
                                        ...mais
                                    </span>
                                </p>
                            </div>
                            {/* comentarios */}
                            <div name="postBio" className=" px-2 py-1">
                                <p className="text-xs font-semibold">
                                    Ver todos os comentarios
                                </p>
                            </div>
                            <div
                                name="Barra Comentarios"
                                className=" px-2 w-full">
                                <input
                                    placeholder="Adiciona um comentario..."
                                    className="w-full mb-2 px-1 bg-slate-200 focus:bg-slate-200 focus:outline-none border-b-2 border-black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 bg-blue-500">
                        <div name="Post" className="mb-2  rounded-lg">
                            {/* profile */}
                            <div
                                name="profilePost"
                                className="flex flex-row items-center justify-between px-3 py-2">
                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src="perfil.PNG"
                                        className="w-14 h-14 items-center rounded-full"
                                    />
                                    <div className="ml-2">
                                        <h2 className="font-semibold">
                                            Monkey D. Luffy
                                        </h2>
                                        <p className="text-xs">
                                            08/02/2021 12:01
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Imagem */}
                            <div name="post" className="">
                                <img
                                    src="album.PNG"
                                    className="items-center w-full rounded-md"
                                    alt="perfil"
                                />
                            </div>
                            {/* Acoes */}
                            <div
                                name="postacoes"
                                className="flex flex-row items-center justify-between p-1 ">
                                <div className="flex flex-row">
                                    <div className=" mr-3  transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                name="LikesWho"
                                className="flex flex-row items-center justify-between p-2 ">
                                <div>
                                    <p className="text-xs">
                                        Liked by Zoro and 903 others
                                    </p>
                                </div>
                                <div className="flex flex-row relative ">
                                    <img
                                        src="perfil2.PNG"
                                        className="w-4 h-4 rounded-full relative left-2 z-20"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil5.PNG"
                                        className="w-4 h-4 rounded-full relative left-1 z-10"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil4.PNG"
                                        className="w-4 h-4 rounded-full relative z-0"
                                        alt="perfil"
                                    />
                                </div>
                            </div>
                            {/* Bio */}
                            <div name="postBio" className=" px-2 py-1 ">
                                <p className="text-xs font-semibold">
                                    Monkey D. Luffy&nbsp;
                                    <span className="text-xs font-normal">
                                        Eu sou o luffy e vou ser o rei dos
                                        piratas. sempre que ouviceros o meu nome
                                        ficaras arripiado. &nbsp;
                                    </span>
                                    <span
                                        onClick=""
                                        className="text-xs font-normal cursor-pointer">
                                        ...mais
                                    </span>
                                </p>
                            </div>
                            {/* comentarios */}
                            <div name="postBio" className=" px-2 py-1">
                                <p className="text-xs font-semibold">
                                    Ver todos os comentarios
                                </p>
                            </div>
                            <div
                                name="Barra Comentarios"
                                className=" px-2 w-full">
                                <input
                                    placeholder="Adiciona um comentario..."
                                    className="w-full mb-2 px-1 bg-slate-200 focus:bg-slate-200 focus:outline-none border-b-2 border-black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 ">
                        <div
                            name="Post"
                            className="mb-2 bg-slate-200 rounded-lg">
                            {/* profile */}
                            <div
                                name="profilePost"
                                className="flex flex-row items-center justify-between px-3 py-2">
                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src="perfil.PNG"
                                        className="w-14 h-14 items-center rounded-full"
                                    />
                                    <div className="ml-2">
                                        <h2 className="font-semibold">
                                            Monkey D. Luffy
                                        </h2>
                                        <p className="text-xs">
                                            08/02/2021 12:01
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Imagem */}
                            <div name="post" className="">
                                <img
                                    src="album.PNG"
                                    className="items-center w-full rounded-md"
                                    alt="perfil"
                                />
                            </div>
                            {/* Acoes */}
                            <div
                                name="postacoes"
                                className="flex flex-row items-center justify-between p-1 ">
                                <div className="flex flex-row">
                                    <div className=" mr-3  transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                name="LikesWho"
                                className="flex flex-row items-center justify-between p-2 ">
                                <div>
                                    <p className="text-xs">
                                        Liked by Zoro and 903 others
                                    </p>
                                </div>
                                <div className="flex flex-row relative ">
                                    <img
                                        src="perfil2.PNG"
                                        className="w-4 h-4 rounded-full relative left-2 z-20"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil5.PNG"
                                        className="w-4 h-4 rounded-full relative left-1 z-10"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil4.PNG"
                                        className="w-4 h-4 rounded-full relative z-0"
                                        alt="perfil"
                                    />
                                </div>
                            </div>
                            {/* Bio */}
                            <div name="postBio" className=" px-2 py-1 ">
                                <p className="text-xs font-semibold">
                                    Monkey D. Luffy&nbsp;
                                    <span className="text-xs font-normal">
                                        Eu sou o luffy e vou ser o rei dos
                                        piratas. sempre que ouviceros o meu nome
                                        ficaras arripiado. &nbsp;
                                    </span>
                                    <span
                                        onClick=""
                                        className="text-xs font-normal cursor-pointer">
                                        ...mais
                                    </span>
                                </p>
                            </div>
                            {/* comentarios */}
                            <div name="postBio" className=" px-2 py-1">
                                <p className="text-xs font-semibold">
                                    Ver todos os comentarios
                                </p>
                            </div>
                            <div
                                name="Barra Comentarios"
                                className=" px-2 w-full">
                                <input
                                    placeholder="Adiciona um comentario..."
                                    className="w-full mb-2 px-1 bg-slate-200 focus:bg-slate-200 focus:outline-none border-b-2 border-black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 ">
                        <div
                            name="Post"
                            className="mb-2 bg-slate-200 rounded-lg">
                            {/* profile */}
                            <div
                                name="profilePost"
                                className="flex flex-row items-center justify-between px-3 py-2">
                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src="perfil.PNG"
                                        className="w-14 h-14 items-center rounded-full"
                                    />
                                    <div className="ml-2">
                                        <h2 className="font-semibold">
                                            Monkey D. Luffy
                                        </h2>
                                        <p className="text-xs">
                                            08/02/2021 12:01
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Imagem */}
                            <div name="post" className="">
                                <img
                                    src="album.PNG"
                                    className="items-center w-full rounded-md"
                                    alt="perfil"
                                />
                            </div>
                            {/* Acoes */}
                            <div
                                name="postacoes"
                                className="flex flex-row items-center justify-between p-1 ">
                                <div className="flex flex-row">
                                    <div className=" mr-3  transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                name="LikesWho"
                                className="flex flex-row items-center justify-between p-2 ">
                                <div>
                                    <p className="text-xs">
                                        Liked by Zoro and 903 others
                                    </p>
                                </div>
                                <div className="flex flex-row relative ">
                                    <img
                                        src="perfil2.PNG"
                                        className="w-4 h-4 rounded-full relative left-2 z-20"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil5.PNG"
                                        className="w-4 h-4 rounded-full relative left-1 z-10"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil4.PNG"
                                        className="w-4 h-4 rounded-full relative z-0"
                                        alt="perfil"
                                    />
                                </div>
                            </div>
                            {/* Bio */}
                            <div name="postBio" className=" px-2 py-1 ">
                                <p className="text-xs font-semibold">
                                    Monkey D. Luffy&nbsp;
                                    <span className="text-xs font-normal">
                                        Eu sou o luffy e vou ser o rei dos
                                        piratas. sempre que ouviceros o meu nome
                                        ficaras arripiado. &nbsp;
                                    </span>
                                    <span
                                        onClick=""
                                        className="text-xs font-normal cursor-pointer">
                                        ...mais
                                    </span>
                                </p>
                            </div>
                            {/* comentarios */}
                            <div name="postBio" className=" px-2 py-1">
                                <p className="text-xs font-semibold">
                                    Ver todos os comentarios
                                </p>
                            </div>
                            <div
                                name="Barra Comentarios"
                                className=" px-2 w-full">
                                <input
                                    placeholder="Adiciona um comentario..."
                                    className="w-full mb-2 px-1 bg-slate-200 focus:bg-slate-200 focus:outline-none border-b-2 border-black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 ">
                        <div
                            name="Post"
                            className="mb-2 bg-slate-200 rounded-lg">
                            {/* profile */}
                            <div
                                name="profilePost"
                                className="flex flex-row items-center justify-between px-3 py-2">
                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src="perfil.PNG"
                                        className="w-14 h-14 items-center rounded-full"
                                    />
                                    <div className="ml-2">
                                        <h2 className="font-semibold">
                                            Monkey D. Luffy
                                        </h2>
                                        <p className="text-xs">
                                            08/02/2021 12:01
                                        </p>
                                    </div>
                                </div>
                                <div className="mr-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Imagem */}
                            <div name="post" className="">
                                <img
                                    src="album.PNG"
                                    className="items-center w-full rounded-md"
                                    alt="perfil"
                                />
                            </div>
                            {/* Acoes */}
                            <div
                                name="postacoes"
                                className="flex flex-row items-center justify-between p-1 ">
                                <div className="flex flex-row">
                                    <div className=" mr-3  transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                            />
                                        </svg>
                                    </div>
                                    <div className=" mr-3 transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="transition-transform duration-200 hover:scale-110 hover:text-zinc-500 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                name="LikesWho"
                                className="flex flex-row items-center justify-between p-2 ">
                                <div>
                                    <p className="text-xs">
                                        Liked by Zoro and 903 others
                                    </p>
                                </div>
                                <div className="flex flex-row relative ">
                                    <img
                                        src="perfil2.PNG"
                                        className="w-4 h-4 rounded-full relative left-2 z-20"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil5.PNG"
                                        className="w-4 h-4 rounded-full relative left-1 z-10"
                                        alt="perfil"
                                    />
                                    <img
                                        src="perfil4.PNG"
                                        className="w-4 h-4 rounded-full relative z-0"
                                        alt="perfil"
                                    />
                                </div>
                            </div>
                            {/* Bio */}
                            <div name="postBio" className=" px-2 py-1 ">
                                <p className="text-xs font-semibold">
                                    Monkey D. Luffy&nbsp;
                                    <span className="text-xs font-normal">
                                        Eu sou o luffy e vou ser o rei dos
                                        piratas. sempre que ouviceros o meu nome
                                        ficaras arripiado. &nbsp;
                                    </span>
                                    <span
                                        onClick=""
                                        className="text-xs font-normal cursor-pointer">
                                        ...mais
                                    </span>
                                </p>
                            </div>
                            {/* comentarios */}
                            <div name="postBio" className=" px-2 py-1">
                                <p className="text-xs font-semibold">
                                    Ver todos os comentarios
                                </p>
                            </div>
                            <div
                                name="Barra Comentarios"
                                className=" px-2 w-full">
                                <input
                                    placeholder="Adiciona um comentario..."
                                    className="w-full mb-2 px-1 bg-slate-200 focus:bg-slate-200 focus:outline-none border-b-2 border-black"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
