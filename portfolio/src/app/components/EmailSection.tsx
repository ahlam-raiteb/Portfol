import React from"react"
import GithubIcon from "../../../public/github-Icon.svg"
import LinkdinIcon from "../../../public/linkdin-Icon.svg"
import Link from "next/link"
import Image from "next/image"
const EmailSection = () => {
    return (
        <section className="flex grit md:grid-cols-2 my-12 md:my-12 p-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full w-80 h-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2  -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm currently looking for new opportinities, my inbox is always open.
                    whether you hav a question or just want to say hi, I'll try my best to
                    get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href='github.com'>
                        <Image 
                            src={GithubIcon}
                            alt="Github Icon"
                        />
                    </Link>
                    <Link href='linkdin.com'>
                        <Image 
                            src={LinkdinIcon}
                            alt="Linkdin Icon"
                        />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col">
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="text-white block mb-2 text-sm font-medium " >
                                Your email
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="Email@google.com"
                            />
                        </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium " >Subject</label>
                        <input 
                            type="text" 
                            id="subject"
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="Just saying hi"
                            />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="message" className="text-white block text-sm mb-2 font-medium " >Message</label>
                        <textarea
                            name="message" 
                            id="message"
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="let's talk about ..."
                            />
                    </div>
                    <button type = "submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rouded-lg w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection