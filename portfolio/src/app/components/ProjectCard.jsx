import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, videoUrl }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div>
            <div className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link 
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black" />
                    </Link>
                    <Link 
                        href={previewUrl} 
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        onClick={() => setIsVideoOpen(true)}
                        >
                            
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black" />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>

            {isVideoOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-4 max-w-lg w-full">
                        <video controls className="w-full rounded-lg">
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button 
                            onClick={() => setIsVideoOpen(false)} 
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
