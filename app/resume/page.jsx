"use client";

import {
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
    FaNode,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
    title: "About me",
    desription: 
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printing and typesetting industry.",
info: [
    {
     fieldName: "Name",
     fieldValue: "Rahul Singh"
    },
    {
     fieldName: "Phone",
     fieldValue: "(+91) 76072 81340)"
    },
    {
     fieldName: "Experience",
     fieldValue: "1+ Years"
    },
    {
     fieldName: "Instagram",
     fieldValue: "im._rsr_"
    },
    {
     fieldName: "Nationality",
     fieldValue: "Indian"
    },
    {
     fieldName: "Email",
     fieldValue: "rahul@auraindia.xyz"
    },
    {
     fieldName: "Freelance",
     fieldValue: "Available"
    },
    {
     fieldName: "Languages",
     fieldValue: "English, Hindi",
    },
],
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printing and typesetting industry.",
    items: [
        {
            company: "PaperBook",
            position: "Co Founder",
            duration: "2 Years - Present",
        },
        {
            company: "AuraIndia",
            position: "Co Founder",
            duration: "1 Years - Present",
        },
        {
            company: "Hitech Group",
            position: "Intern",
            duration: "Summer 2022 ",
        },
        {
            company: "E-commerce Startup",
            position: "Graphic Design",
            duration: "2021",
        },
        {
            company: "PaperBook",
            position: "Co Founder",
            duration: "2 Years - Present",
        },
        {
            company: "AuraIndia",
            position: "Co Founder",
            duration: "1 Years - Present",
        },
        {
            company: "Hitech Group",
            position: "Intern",
            duration: "Summer 2022 ",
        },
        {
            company: "E-commerce Startup",
            position: "Graphic Design",
            duration: "2021",
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printing and typesetting industry.",
    items: [
        {
            institution: "LinkedIn Learning",
            degree: "Data Analysis",
            duration: "2024",
        },
        {
            institution: "W3schools",
            degree: "SQL Tutorial",
            duration: "2024",
        },
        {
            institution: "Online Course Platform",
            degree: "Advance Excel",
            duration: "2023",
        },
        {
            institution: "Online Course",
            degree: "Front-End Development",
            duration: "2022",
        },
        {
            institution: "Amity University",
            degree: " Bachelor of Commerce Honors ",
            duration: "2020-2023",
        },
        {
            institution: "The Aryan International School",
            degree: " Commerce ",
            duration: "2018-2020"
        },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    description:
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printing and typesetting industry.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaNode />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
      <motion.div 
         initial={{opacity: 0}} 
         animate={{
           opacity: 1, 
           transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
         }}

         className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                               {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index)=> {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.position}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                               {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index)=> {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.degree}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}
                                </p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index)=> {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232325] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    {/* about */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.decription}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index)=> {
                                    return( <li 
                                      key={index} 
                                      className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
          </div>
      </motion.div>
    );
};

export default Resume;