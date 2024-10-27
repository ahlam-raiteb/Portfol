"use client";
import React, { useTransition , useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const Tab_DATA= [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul  class="list-disc pl-2">
                <li>Node.js</li>
                <li>Django</li>
                <li>JavaScript/TypeScript</li>
                <li>React.js/Next.js</li>
                <li>C/C++</li>
            </ul>
        )
    },
    {
        title:"Education",
        id: "education",
        content:(
            <ul  class="list-disc pl-2">
                <li>ENS casablanca education maths</li>
                <li>1337</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "certifications",
        content:(
            <ul  class="list-disc pl-2">
                <li>ENS casablanca education maths</li>
                <li>1337</li>
            </ul>
        )
    },

]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() =>{
            setTab(id);
        });
    }
    return(
        <section id="about" class="flex text-black">
            <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    alt ="profile"
                    src="/images/about.jpeg" width={600} height={600} />
                <div class="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 class="text-4xl font-bold text-black mb-4">About Me</h2>
                    <p class="text-base lg:text-lg">
                        I am a developer and UI designer passionate about coding. 
                        I nm looking to improve my knowledge and skills, 
                        and I am always open to updating my ideas. 
                        I am a student who adapts well to any situation, 
                        and my transition from mathematics to computer science is a good example.
                    </p>
                    <div class="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}>
                                {" "}Skills {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}>
                                {" "}Education {" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}>
                                {" "}Certifications {" "}
                        </TabButton>
                    </div>
                    <div class="mt-8">{Tab_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
}
export default AboutSection;