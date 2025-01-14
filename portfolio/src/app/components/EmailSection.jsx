"use client";
import React , {useState} from"react"
import GithubIcon from "../../../public/github-Icon.svg"
import LinkdinIcon from "../../../public/linkdin-Icon.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers : {
                'Content-Type' :  'application/json',
            },
            body:JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData  = await response.json();
        console.log(resData);


        if (response.status === 200){
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    };

    return (
        <section  id="contact" class="flex grit md:grid-cols-2 my-12 md:my-12 p-24 gap-4 relative w-full">
            <div class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full w-80 h-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2  -translate-1/2"></div>
                <div class="z-10">
                    <h5 class="text-xl font-bold text-black my-2">Let s Connect</h5>
                    <p class="text-[#ADB7BE] mb-4 max-w-md">
                        {" "}
                        I m currently looking for new opportinities, my inbox is always open.
                        whether you hav a question or just want to say hi, I ll try my best to
                        get back to you!
                    </p>
                    <div class="socials flex flex-row gap-2">
                        <Link href='https://github.com/araiteb1'>
                            <Image 
                                src={GithubIcon}
                                alt="Github Icon"
                            />
                        </Link>
                        <Link href='https://www.linkedin.com/in/ahlam-raiteb-30166a278'>
                            <Image 
                                src={LinkdinIcon}
                                alt="Linkdin Icon"
                            />
                        </Link>
                </div>
            </div>
            <div>
                <form class="flex flex-col lg:w-[500px]" onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label 
                            htmlFor="email" 
                            class="text-black block mb-2 text-sm font-medium w-[80px]" >
                                Your email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email"
                            required
                            class="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="Email@google.com"
                            />
                        </div>
                    <div class="mb-6">
                        <label htmlFor="subject" class="text-black block text-sm mb-2 font-medium " >Subject</label>
                        <input 
                            name = "subject"
                            type="text" 
                            id="subject"
                            required
                            class="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="Just saying hi"
                            />
                    </div>
                    <div class="mb-6">
                    <label htmlFor="message" class="text-black block text-sm mb-2 font-medium " >Message</label>
                        <textarea
                            name="message" 
                            id="message"
                            required
                            class="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="let's talk about ..."
                            />
                    </div>
                    <button type = "submit" class="bg-purple-500 hover:bg-purple-600 text-black font-medium py-2.5 px-5 rouded-lg w-full">
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p class="text-green-500 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    );
};

export default EmailSection