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
        <div className="w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
            {link !== '' ? (
                <Link
                    href={link}
                    className="block w-full p-4 text-center text-orange-500 font-semibold text-lg rounded-lg border border-orange-500 hover:bg-orange-100 hover:text-orange-700"
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
                className="w-full mt-4 p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
            />

            <button
                onClick={urlll !== '' ? handleYouTubeLink : () => alert("Input is empty")}
                className="w-full mt-4 p-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700"
            >
                BUTTON
            </button>
        </div>

    );
};