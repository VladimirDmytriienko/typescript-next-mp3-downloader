"use client"
import axios from "axios";
import { useState } from 'react'
import { youtube_parser } from "../utils/parser";
import Link from "next/link";

async function generatorLink(urlll: string): Promise<string> {
    const youtubeID = youtube_parser(urlll);
    const options = {
        method: 'get',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        headers: {
            'X-RapidAPI-Key': '840bb7bd7amsh6e47bf1e8b33fb6p183936jsn9ae639094dfd',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        },
        params: {
            id: youtubeID
        }
    }

    try {
        const res = await axios(options);
        return res.data.link;
    } catch (err) {
        console.log(err);
        return '';
    }
}

export const Input = () => {
    const [urlll, setUrl] = useState('');
    const [link, setLink] = useState('');

    const handleYouTubeLink = async () => {
        const generatedLink = await generatorLink(urlll);
        setLink(generatedLink);

    };

    return (
        <div className="px-8 py-32">
            {link !== '' ? (
                <Link
                    href={link}
                    className="block w-full p-4 text-center text-purple-500 font-semibold text-lg rounded-lg border border-purple-600 hover:bg-violet-400 hover:text-purple-700"
                >
                    Click to download
                </Link>
            ) : (
                <div className="w-full p-4 text-center text-gray-400 font-semibold text-lg rounded-lg border border-gray-400 bg-gray-100">
                    Download
                </div>
            )}

            <input
                value={urlll}
                placeholder="https://www.youtube.com/..."
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                className="w-full mt-4 mb-8 p-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
            />

            <div className="grid gap-8 items-start justify-center">

                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-0 animate-tilt"></div>
                    <button
                        onClick={urlll !== '' ? handleYouTubeLink : () => alert("Input is empty")}
                        className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                        <span className="flex items-center space-x-5">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-pink-600 -rotate-6" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                            </svg>



                            <span className="pr-6 text-gray-100">Download  &rarr;</span>
                        </span>
                        <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Song fetcher Dmytriienko.Lab</span>
                    </button>
                </div>
            </div>
            {/* <button
                onClick={urlll !== '' ? handleYouTubeLink : () => alert("Input is empty")}
                className="w-full mt-4 p-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700"
            >
                BUTTON
            </button> */}
        </div>

    );
};