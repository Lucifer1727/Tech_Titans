import React, { useState } from "react";
import main from "./Images/main-heading.png";
import bg from "./Images/bg.jpg";
import logo from "./Images/logo.png";
import why from "./Images/why-wonder-games-heading-desktop.png";
import hair from "./Images/Special/svg4.svg";
import star from "./Images/Special/svg5.svg";
import whore from "./Images/Special/svg3.svg";
import clinical from "./Images/Special/clinically-proven-excellence.png";
import comm from "./Images/Special/community.png";
import access from "./Images/Special/accessible-skill-development.png";
import icon from "./Images/Icons.png";
import "./App.css";

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleButtonClick = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };
  return (
    <>
      <>
        <div class="flex justify-between bg-[#F9f9f9] border-b-[1px] h-[9vh] ">
          <div classname="flex mt-3 min-ml-[10px]">
            <img class="mt-1 ml-[50px]" src={logo} alt="" />
          </div>
          <div class="flex m-2">
            <div class="font-bold text-black drop text-xl m-4 mt-7">
              <a className="h-fit" href="">
                About Us
              </a>
            </div>
            <div className="group inline-block drop text-center">
              <button
                onClick={() => handleButtonClick("dropdown1")}
                className="font-bold text-black text-xl m-4 mt-7"
              >
                Skills we Develop
              </button>
              {openDropdown === "dropdown1" && (
                <div className="absolute mt-2 w-48 text-black bg-white border border-black">
                  <a href="#" className="block px-4 py-2 font hover:bg-gray-200">
                    Cognitive SKills
                  </a>
                  <a href="#" className="block px-4 py-2 font hover:bg-gray-200">
                    Educational Skills
                  </a>
                </div>
              )}
            </div>
            <div className="group inline-block drop text-center">
              <button
                onClick={() => handleButtonClick("dropdown2")}
                className="font-bold text-black text-xl m-4 mt-7"
              >
                Who we help
              </button>
              {openDropdown === "dropdown2" && (
                <div className="absolute mt-2 w-48 text-black bg-white border border-black">
                  <a href="#" className="block font px-4 py-2 hover: bg-gray-200">
                    Attention Deficit Hyperactive Disorder
                  </a>
                  <a href="#" className="block px-4 py-2 font hover:bg-gray-200">
                    Autism Spectrum Disorder
                  </a>
                  <a href="#" className="block px-4 py-2 font hover:bg-gray-200">
                    Dyslexia
                  </a>
                </div>
              )}
            </div>
            <div class="font-bold drop text-black text-xl m-4 mt-7">
              <a className="h-fit" href="">
                Clinical Advice
              </a>
            </div>
            <div class="font-bold drop text-black text-xl m-4 mt-7">
              <a className="h-fit" href="">
                Log In
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

function MainPart() {

  const image = [
    "./Images/Start/discover-wondertree.jpg",
    "./Images/Start/educational-games.jpg",
    "./Images/Start/spectrum-games.jpg",
    "./Images/Start/for-institution-vertical.jpg"
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        class="h-screen flex flex-col justify-center "
      >
        <div class="flex justify-center mt-[60vh] bg-transparent">
          <div class="w-[130vh] flex justify-around rounded-[25px] shadow bg-blend-multiply shadow-black h-[70vh] bg-[#F8CB1E]">
            <div className="flex flex-col">
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            class="m-3"
            src={main}
            className="justify-center items-center"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        class="h-screen flex flex-col justify-center "
      ></div>
    </>
  );
}
function WhyGames() {
  return (
    <>
      <div
        id="why"
        className="flex flex-col m-[30vh] mt-0 w-fit h-fit bg-blend-multiply bg-[#F9f9f9]"
      >
        <div className="flex justify-center items-center">
          <img src={why} alt="" />
        </div>
        <div className="flex m-[10px]">
          <div className="flex flex-col p-[30px]">
            <img src={hair} className="w-[20vh] h-[20vh]" alt="" />
            <img src={star} className="w-[10vh] h-[10vh]" alt="" />
            <img src={whore} className="w-[10vh] h-[10vh]" alt="" />
          </div>
          <div className="flex flex-col p-[30px] items-center justify-center ">
            <img src={clinical} className="" alt="" />
            <h1 className="  clinical">
              Clinically Proven
              <br /> Excellence
            </h1>
            <div>
              <p className="clinical2">Select NeuroNurturer for our </p>
              <p className="clinical2">clinically validated AR games that offer,</p>
              <p className="clinical2">genuine advantages including</p>
              <p className="clinical2">improving balance, bolstering self-</p>
              <p className="clinical2">esteem, and providing practical</p>
              <p className="clinical2">guidance. This results in significant</p>
              <p className="clinical2">improvements for children with</p>
              <p className="clinical2">learning differences.</p>
            </div>
          </div>
          <div className="p-[30px] ">
            <img src={access} className="" alt="" />
            <h1 className="  clinical">
              Accessible Skill
              <br />
              Development
            </h1>
            <div>
              <p className="clinical2">Every child deserves the opportunity</p>
              <p className="clinical2">to unlock their potential. WonderTree</p>
              <p className="clinical2">is dedicated to fostering accessible</p>
              <p className="clinical2">skill development across all</p>
              <p className="clinical2">spectrums, making learning</p>
              <p className="clinical2">enjoyable and inclusive, regardless</p>
              <p className="clinical2">
                of individual abilities or challenges.
              </p>
              <p className="clinical2">learning differences.</p>
            </div>
          </div>
          <div className="p-[30px] ">
            <img src={comm} className="" alt="" />
            <h1 className="  clinical">
              By the community,
              <br />
              For the community
            </h1>
            <div>
              <p className="clinical2">We excel by being community-</p>
              <p className="clinical2">driven, collaboratively developing</p>
              <p className="clinical2">solutions with educators, therapists,</p>
              <p className="clinical2">and parents to ensure that every</p>
              <p className="clinical2">aspect of our platform meets the</p>
              <p className="clinical2">diverse needs of children.</p>
            </div>
          </div>
        </div>
        <img src={icon}></img>
      </div>
    </>
  );
}

function CognitiveSkills() {
  return (
    <>
    <h1 className="clinical ml-[75vh]">---------------------------------------<h1 className="cognitive">Cognitive Skils</h1>---------------------------------------</h1>
      <div class="flex justify-center bg-transparent">
          <div class="w-[160vh] flex justify-around rounded-[25px] shadow bg-blend-multiply shadow-black h-[70vh] bg-[#F8CB1E]">
            <div className="bg-[f9f9f9] flex">
              <div className="flex flex-col">
                
              </div>
            </div>
            <div className="bg-[f9f9f9]"></div>
            <div className="bg-[f9f9f9]"></div>
          </div>
        </div>
    </>
  );
}

function EducationaLSkills() {
  return (
    <>
    <h1 className="clinical mt-[30vh] ml-[75vh]">---------------------------------------<h1 className="cognitive">Educational Skils</h1>---------------------------------------</h1>
      <div class="flex justify-center bg-transparent">
          <div class="w-[160vh] flex justify-around rounded-[25px] shadow bg-blend-multiply shadow-black h-[70vh] bg-[#F8CB1E]">
            <div className="bg-[f9f9f9] flex">
              <div className="flex flex-col">
                
              </div>
            </div>
            <div className="bg-[f9f9f9]"></div>
            <div className="bg-[f9f9f9]"></div>
          </div>
        </div>
    </>
  );
}
export default function App() {
  return (
    <>
      {" "}
      <NavBar></NavBar>
      <MainPart></MainPart>
      <WhyGames></WhyGames>
      <CognitiveSkills></CognitiveSkills>
      <EducationaLSkills></EducationaLSkills>
    </>
  );
}
