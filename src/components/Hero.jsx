import React, { useState, useEffect } from "react";
import { PROFILE_DATA } from "../utils/data";

import PROFILE_PIC from "../assets/blue.png";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineBadge } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Hero =() => {

    const {
        name,
        tagLine,
        jobTitle,
        yearsOfExperience,
        projects,
        location,
        email, 
        skills,
    } = PROFILE_DATA;

    
    const texts = [
        "FrontEnd Developer",
        "BackEnd Developer",
        "Mobile Apps Developer",
      ];
    
        const [currentText, setCurrentText] = useState("");
        const [currentTextIndex, setCurrentTextIndex] = useState(0);
        const [charIndex, setCharIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
      
        useEffect(() => {
          const currentFullText = texts[currentTextIndex];
          const typingSpeed = isDeleting ? 50 : 100;
      
          const timeout = setTimeout(() => {
            setCurrentText((prevText) =>
              isDeleting
                ? currentFullText.substring(0, prevText.length - 1)
                : currentFullText.substring(0, prevText.length + 1)
            );
      
            if (!isDeleting && currentText === currentFullText) {
              setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === "") {
              setIsDeleting(false);
              setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
          }, typingSpeed);
      
          return () => clearTimeout(timeout);
        }, [currentText, isDeleting, currentTextIndex, texts]);


    return (
        <section className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto" id="hero">


        <div className="star" style={{ top: '10%', left: '20%', animationDuration: '3s' }}></div>
        <div className="star" style={{ top: '30%', left: '50%', animationDuration: '4s' }}></div>
        <div className="star" style={{ top: '50%', left: '70%', animationDuration: '5s' }}></div>
        <div className="star" style={{ top: '80%', left: '30%', animationDuration: '6s' }}></div>
        <div className="star" style={{ top: '90%', left: '90%', animationDuration: '7s' }}></div>
        <div className="star" style={{ top: '60%', left: '40%', animationDuration: '4.5s' }}></div>
        <div className="star" style={{ top: '15%', left: '10%', animationDuration: '5.5s' }}></div>
        <div className="star" style={{ top: '25%', left: '80%', animationDuration: '3.2s' }}></div>
        <div className="star" style={{ top: '75%', left: '60%', animationDuration: '6.8s' }}></div>

        <div className="planet-saturn">
            <div className="kerikil kerikil-orbit-1"></div>
            <div className="kerikil kerikil-orbit-2"></div>
            <div className="kerikil kerikil-orbit-1" style={{ animationDuration: '6s' }}></div>
            <div className="kerikil kerikil-orbit-2" style={{ animationDuration: '8s' }}></div>
        </div>


        <div className="flex-1 text-center md:text-left z-[1]">
                
        <div className="relative flex items-center justify-center h-10">
            <span className="block min-h-10 h-10 text-sm md:text-base text-blue-200 font-normal overflow-hidden">
            {currentText}
            </span>
        </div>

        <h2 className=" text-3xl mt-3 md:text-5xl md:mt-5">{name} 👋</h2>
        <p className="w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8">
          {tagLine}
        </p>
        <button className="primary-btn">Contact Me</button>
      </div>


            <div className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]">
                <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6">
                    <div className="flex items-center justify-center">
                        <img className="hero-img" src={PROFILE_PIC} alt="img one" />
                    </div>

                <div className="bg-cardbug rounded-md text-center mt-3 p-4">
                    <h5 className="text-sm md:text-base text-white">{name}</h5>
                    <p className="text-slate-500 text-xs md:font-medium mt-1">{jobTitle}</p>
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-1">
                        <HiOutlineLocationMarker />
                    <p className="font-medium">{location}</p>
                    </div>
                </div>

                <InfoTile
                    icon={<FiMail size={20} className="text-sky-400" />}
                    text={email}
                />

                <InfoTile
                    icon={<MdOutlineBadge size={20} className="text-sky-400" />}
                    text={`${yearsOfExperience} Years of Experience`}
                />

                <InfoTile
                    icon={<MdAddTask size={20} className="text-sky-400" />}
                    text={`${projects} Projects`}
                />

                <div className="flex items-center gap-2 flex-wrap my-3">
                    {skills.map((item) => (
                        <div key={item} className="text-[11px] bg-blue-300/30 rounded md:text-xs px-3 py-1">
                            {item}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <a href="https://github.com/nrlsalsabl" target="_blank" rel="noopener noreferrer">
                        <div className="bg-blue-800/30 p-2 rounded">
                            <FaGithub className="text-lg md:text-xl" />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/nurul-salsabila-754a68221/" target="_blank" rel="noopener noreferrer">
                        <div className="bg-blue-800/30 p-2 rounded">
                            <FaLinkedin className="text-lg md:text-xl" />
                        </div>
                    </a>

                    <a href="https://instagram.com/salsqbla_" target="_blank" rel="noopener noreferrer">
                        <div className="bg-blue-800/30 p-2 rounded">
                            <FaInstagram className="text-lg md:text-xl" />
                        </div>
                    </a>
                </div>

                </div>
            </div>

            <div className="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"></div>
            
        </section>
    );
};

const InfoTile = ({icon, text}) =>{
    return (
    <div className="flex items-center gap-4 bg-cardbug p-4 mt-3 rounded-md">
        {icon}
        <p className="text-xs md:text-sm font-normal">{text}</p>
    </div>
    );
};

export default Hero;
