import React, { useState } from "react";
import main from "./Images/main-heading.png";
import bg from "./Images/bg.jpg";
import logo from "./Images/NeuroNurturer.png";
import why from "./Images/why-wonder-games-heading-desktop.png";
import hair from "./Images/Special/svg4.svg";
import star from "./Images/Special/svg5.svg";
import whore from "./Images/Special/svg3.svg";
import clinical from "./Images/Special/clinically-proven-excellence.png";
import comm from "./Images/Special/community.png";
import access from "./Images/Special/accessible-skill-development.png";
import icon from "./Images/Icons.png";
import star2 from "./Images/star-alt-4-svgrepo-com.svg";
import child from "./Images/main/child.png";
import one from "./Images/main/hippy.png";
import two from "./Images/main/lego.png";
import three from "./Images/main/qweqweqw.png";
import four from "./Images/main/spring.png";
import children from "./Images/main/children.png";
import memo from "./Images/Games/memorycard.png";
import Alpha from "./Images/Games/Alphabet.png";
import num from "./Images/Games/Numslide.png";
import piano from "./Images/Games/Piano.png";
import paint from "./Images/Games/paint.png";
import bubble from "./Images/Games/NUmbubble.png";
import slide from "./Images/Games/Slide Puzzle.png";

import "./App.css";

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleButtonClick = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };
  return (
    <>
      <>
        <div class="flex justify-between bg-[#F9f9f9] border-b-[1px] h-[10vh] ">
          <div classname="flex mt-3 min-ml-[10px]">
            <img class="mt-1 ml-[50px] w-[12vh] " src={logo} alt="" />
          </div>
          <div className=" mt-[4vh] main drop-shadow-md shadow-black">
            NeuroNurturer
          </div>
          <div class="flex m-2">
            <div class="font-bold text-black drop text-xl m-4 mt-7">
              <a className="h-fit hover:bg-[#F8CB1E] hover:rounded-lg" href="">
                About Us
              </a>
            </div>
            <div className="group inline-block drop text-center">
              <button
                onClick={() => handleButtonClick("dropdown1")}
                className="font-bold hover:bg-[#F8CB1E] hover:rounded-lg text-black text-xl m-4 mt-7"
              >
                Skills we Develop
              </button>
              {openDropdown === "dropdown1" && (
                <div className="absolute mt-2 w-48 text-black bg-white border border-black">
                  <a
                    href="#cog"
                    className="block px-4 py-2 font hover:bg-gray-200"
                  >
                    Cognitive SKills
                  </a>
                  <a
                    href="#edu"
                    className="block px-4 py-2 font hover:bg-gray-200"
                  >
                    Educational Skills
                  </a>
                  <a
                    href="#fun"
                    className="block px-4 py-2 font hover:bg-gray-200"
                  >
                    Interactive Games
                  </a>
                </div>
              )}
            </div>
            <div className="group inline-block drop text-center">
              <button
                onClick={() => handleButtonClick("dropdown2")}
                className="font-bold hover:bg-[#F8CB1E] hover:rounded-lg text-black text-xl m-4 mt-7"
              >
                Who we help
              </button>
              {openDropdown === "dropdown2" && (
                <div className="absolute mt-2 w-48 text-black bg-white border border-black">
                  <a
                    href="#"
                    className="block font px-4 py-2 hover: bg-gray-200"
                  >
                    Attention Deficit Hyperactive Disorder
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font hover:bg-gray-200"
                  >
                    Autism Spectrum Disorder
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 font hover:bg-gray-200"
                  >
                    Dyslexia
                  </a>
                </div>
              )}
            </div>
            <div class="font-bold drop text-black text-xl m-4 mt-7">
              <a
                className="h-[4vh] hover:bg-[#F8CB1E] hover:rounded-lg"
                href=""
              >
                Clinical Advice
              </a>
            </div>
            <div class="font-bold drop hover:bg-[#F8CB1E] hover:rounded-lg h-fit text-black text-xl m-4 mt-7">
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
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        class="h-screen flex flex-col justify-center "
      >
        <div class="flex justify-center mt-[-9vh] bg-transparent">
          <div class="w-[160vh] flex justify-around rounded-[25px] hover:shadow-2xl hover:shadow-black shadow bg-blend-multiply shadow-black h-[70vh] bg-[#F8CB1E]">
            <div className="border- flex flex-col">
              <img className="w-[60vh] h-[60vh]" src={child} />
            </div>
            <div className=" h-[60vh] w-[55vh] rounded-xl mt-[5vh] bg-[#e9d79291] shadow-black shadow-inner">
              <h1 className="cognitive font-bold ml-6 mt-6">Why Choose Us?</h1>
              <div className="px-[5vh] mt-[5vh]">
                <span className="content">
                  Choose us for personalized support tailored to ADHD, ASD, and
                  Dyslexia. Our evidence-based approach, inclusive community,
                  and user-friendly design create a positive impact. We
                  prioritize continuous improvement and encourage parental
                  involvement for a holistic student well-being experience.
                </span>
              </div>
              <div className=" mt-[-35px] flex justify-center">
                <img src={children}></img>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className="flex items-center"></div>
      </div>
      <div
        style={{
          height: "48vh",
          backgroundImage: `url(${bg})`,
        }}
        class="h-screen flex flex-col justify-center "
      ></div>
      <div className="bg-[#F8CB1E]">
        <marquee>
          <div className="move flex ">
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
          </div>
        </marquee>
      </div>
      <div className="flex">
        <img
          class="m-3"
          src={main}
          className="justify-center items-center"
          alt=""
        />
        <div className="flex p-2 flex-col">
          <div className="flex">
            <img src={one} />
            <img src={two} />
          </div>
          <div className="flex">
            <img src={three} />
            <img src={four} />
          </div>
        </div>
      </div>
      <div className="bg-[#F8CB1E]">
        <marquee>
          <div className="move flex ">
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
          </div>
        </marquee>
      </div>
    </>
  );
}
function WhyGames() {
  return (
    <>
      <div
        id="why"
        className="flex flex-col m-[30vh] mb-1 mt-0 w-fit h-fit bg-blend-multiply bg-[#F9f9f9]"
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
            <h1 className=" clinical">
              Clinically Proven
              <br /> Excellence
            </h1>
            <div>
              <p className="clinical2">Select NeuroNurturer for our </p>
              <p className="clinical2">
                clinically validated AR games that offer,
              </p>
              <p className="clinical2">genuine advantages including</p>
              <p className="clinical2">improving balance, bolstering self-</p>
              <p className="clinical2">esteem, and providing practical</p>
              <p className="clinical2">guidance. This results in significant</p>
              <p className="clinical2">improvements for children with</p>
              <p className="clinical2">learning differences.</p>
            </div>
          </div>
          <div className="flex flex-col p-[30px] items-center justify-center">
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
          <div className="flex flex-col p-[30px] items-center justify-center ">
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
      <div className="bg-[#0265FD]">
        <marquee>
          <div className="move flex ">
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
          </div>
        </marquee>
      </div>
    </>
  );
}

function CognitiveSkills() {
  return (
    <>
      <h1 id="cog" className="clinical ml-[75vh]">
        ---------------------------------------
        <h1 className="cognitive">Cognitive Skils</h1>
        ---------------------------------------
      </h1>
      <div class="flex justify-center mb-6 bg-transparent">
        <div class="w-[160vh] flex justify-around rounded-[25px] shadow bg-blend-multiply hover:shadow-2xl hover:shadow-black shadow-black h-[70vh] bg-[#F8CB1E]">
          <div className="bg-[f9f9f9] flex p-[10vh]">
            <div className="flex flex-col">
              <div>
                <div>
                  <img className="w-[50vh]" src={memo} />
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  href="#"
                  className="w-[10vh] ml-[12vh] border-[2px] font-bold bg-gray rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span className="clinical2 p-6">
                  Memory card games benefit ADHD kids by enhancing focus,
                  attention span, and memory functions. Quick decision-making
                  improves cognitive processing speed, while matching pairs
                  develops vital visual and spatial skills. These games also
                  foster executive functions and social interactions, promoting
                  teamwork and communication. The sense of accomplishment
                  positively impacts self-esteem and motivation for learning.
                  Integrating memory card games into a comprehensive approach
                  tailored to individual needs maximizes their benefits for
                  children with ADHD.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img className="ml-[2vh] w-[50vh]" src={slide} />
              </div>
              <div className="flex flex-col">
                <button
                  id="my"
                  className="w-[10vh] ml-[12vh] border-[2px] font-bold bg-gray rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span className="clinical2 p-6">
                  Side puzzle games offer a concise and effective approach to
                  bolstering cognitive skills in children with ADHD. These games
                  demand focus and attention, contributing to improved
                  concentration and memory functions. Quick problem-solving in
                  the game enhances cognitive processing speed, while the
                  spatial reasoning required for puzzle completion develops
                  crucial visual and spatial skills. Side puzzle games also
                  promote executive functions and social interactions, fostering
                  teamwork and communication. The satisfaction derived from
                  solving puzzles positively influences self-esteem and
                  motivates learning. Integrating side puzzle games into a
                  comprehensive approach tailored to individual needs maximizes
                  their benefits for children with ADHD.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <div>
                  <img className="ml-[5vh] w-[50vh]" src={bubble} />
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  href=""
                  id="my"
                  className="border-[2px] w-[10vh] ml-[20vh] font-bold rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span id="my" className="clinical2 p-6">
                  Numbubble games,focusing on numerical concepts, offer valuable
                  benefits for children with ADHD, ASD, and dyslexia. These
                  games enhance visual and spatial skills, improve focus over
                  time, and provide an alternative path for numeracy skill
                  development for children with dyslexia. The executive
                  functioning skills required in the games are particularly
                  helpful for those with ADHD, while socially interactive
                  features aid children with ASD in practicing social skills.
                  The multisensory learning approach in Numbubble games
                  accommodates diverse learning needs. Overall, the positive
                  reinforcement from successfully engaging with these games
                  contributes to improved self-esteem and motivation for
                  learning. However, personalized support from parents,
                  educators, or therapists is crucial to tailor the gaming
                  experience to each child's specific needs.
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[f9f9f9]"></div>
          <div className="bg-[f9f9f9]"></div>
        </div>
      </div>
      <div className="bg-[#F8CB1E]">
        <marquee>
          <div className="move flex ">
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
            <img className="w-[10vh] h-[9vh]" src={star2} />
            LEARN
            <img className="w-[10vh] h-[9vh]" src={star2} />
            THRIVE
            <img className="w-[10vh] h-[9vh]" src={star2} />
            PLAY
          </div>
        </marquee>
      </div>
    </>
  );
}

// memory card game,side puzzle,numbubble
function EducationaLSkills() {
  return (
    <>
      <h1 id="edu" className="clinical ml-[75vh]">
        ----------------------------------------------
        <h1 className="cognitive">Educational Skils</h1>
        ----------------------------------------------
      </h1>
      <div class="flex justify-center bg-transparent">
        <div class="w-[160vh] flex justify-around rounded-[25px] shadow bg-blend-multiply hover:shadow-2xl hover:shadow-black shadow-black h-[70vh] bg-[#F8CB1E]">
          <div className="bg-[f9f9f9] flex p-[10vh]">
            <div className="flex flex-col">
              <div><div><img className="w-[50vh]" src={Alpha}/></div></div>
              <div className="flex flex-col">
                <button
                  href="#"
                  className=" w-[10vh] ml-[12vh] border-[2px] font-bold bg-gray rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span className="clinical2 p-6">
                  Number puzzle games offer valuable benefits for children with
                  ADHD, ASD, and dyslexia in terms of education skills. These
                  games enhance numeracy skills, improve cognitive processing,
                  and foster focus and attention. Engaging in spatial
                  arrangements in puzzles helps develop visual and spatial
                  skills, crucial for various educational tasks. The memory
                  aspect of puzzles aids those with dyslexia or memory
                  difficulties. Additionally, these games promote executive
                  functioning, pattern recognition, and provide a structured way
                  to boost self-esteem and motivation for learning. Tailoring
                  puzzle difficulty to individual needs and incorporating them
                  into a comprehensive educational approach maximizes their
                  positive impact on these children.
                </span>
              </div>
            </div>
            <div className=" ml-[2vh] w-[50vh] flex flex-col">
              <div><div><img src={num}/></div></div>
              <div className="flex flex-col">
                <button
                  href=""
                  className="border-[2px] w-[10vh] ml-[18vh] font-bold  rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span className="clinical2 p-6">
                  Side puzzle games offer a concise and effective approach to
                  bolstering cognitive skills in children with ADHD. These games
                  demand focus and attention, contributing to improved
                  concentration and memory functions. Quick problem-solving in
                  the game enhances cognitive processing speed, while the
                  spatial reasoning required for puzzle completion develops
                  crucial visual and spatial skills. Side puzzle games also
                  promote executive functions and social interactions, fostering
                  teamwork and communication.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div><div><img className="ml-[5vh] w-[50vh]" src={bubble}/></div></div>
              <div className="flex flex-col">
                <button
                  href=""
                  className="border-[2px] w-[10vh] ml-[20vh] font-bold rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span id="my" className="clinical2 p-6">
                  Numbubble games,focusing on numerical concepts, offer valuable
                  benefits for children with ADHD, ASD, and dyslexia. These
                  games enhance visual and spatial skills, improve focus over
                  time, and provide an alternative path for numeracy skill
                  development for children with dyslexia. The executive
                  functioning skills required in the games are particularly
                  helpful for those with ADHD, while socially interactive
                  features aid children with ASD in practicing social skills.
                  The multisensory learning approach in Numbubble games
                  accommodates diverse learning needs. Overall, the positive
                  reinforcement from successfully engaging with these games
                  contributes to improved self-esteem and motivation for
                  learning. However, personalized support from parents,
                  educators, or therapists is crucial to tailor the gaming
                  experience to each child's specific needs.
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[f9f9f9]"></div>
          <div className="bg-[f9f9f9]"></div>
        </div>
      </div>
    </>
  );
}
function FunGames() {
  return (
    <>
      <h1 id="fun" className="clinical mt-2 ml-[75vh]">
        --------------------------------------------------
        <h1 className="cognitive">Interactive Games</h1>
        --------------------------------------------------
      </h1>
      <div class="flex justify-center bg-transparent">
        <div class="w-[160vh] flex justify-around rounded-[25px] shadow bg-blend-multiply hover:shadow-2xl hover:shadow-black shadow-black h-[70vh] bg-[#F8CB1E]">
          <div className="bg-[f9f9f9] flex p-[10vh]">
            <div className="flex flex-col">
              <div><div><img src={piano}/></div></div>
              <div className="flex flex-col">
                <button
                  href="#"
                  className=" w-[10vh] ml-[12vh] border-[2px] font-bold bg-gray rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span className="clinical2 p-6">
                  A paint app proves beneficial for children with ADHD, ASD, and
                  dyslexia, offering an engaging and interactive platform. For
                  ASD, it provides a controlled sensory experience, while
                  dyslexic children benefit from visual creativity and
                  self-expression. ADHD children find focus through the
                  interactive nature of the app, enhancing attention. The fine
                  motor skills involved aid those with challenges in this area,
                  and sequential processing supports dyslexic individuals.
                  Overall, the customizable nature of paint apps provides a
                  positive and adaptable space for learning and creative
                  expression.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div><div><img className=" ml-[2vh] w-[50vh]" src={paint}/></div></div>
              <div className="flex flex-col">
                <button
                  href=""
                  className="border-[2px] w-[10vh] ml-[18vh] font-bold  rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span className="clinical2 p-6">
                  Learning the piano is a fun and interactive way for children
                  with ADHD, ASD, and dyslexia to develop essential skills. The
                  structured routine of piano lessons benefits ADHD and ASD,
                  offering stability. Piano playing enhances focus, fine motor
                  skills, and cognitive abilities. It also serves as a creative
                  outlet, boosting confidence and self-esteem. The multisensory
                  experience aids sensory integration, particularly beneficial
                  for children with ASD. Group piano activities provide social
                  interaction opportunities, fostering connections around a
                  shared interest. In summary, the piano offers a holistic
                  approach to skill development for children with diverse needs.
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div><div><img className=" ml-[5vh] w-[50vh]" src={bubble}/></div></div>
              <div className="flex flex-col">
                <button
                  href=""
                  className="border-[2px] w-[10vh] ml-[20vh] font-bold rounded-full br-[10px] border-black"
                >
                  Play Game
                </button>
                <span id="my" className="clinical2 p-6">
                  Numbubble games,focusing on numerical concepts, offer valuable
                  benefits for children with ADHD, ASD, and dyslexia. These
                  games enhance visual and spatial skills, improve focus over
                  time, and provide an alternative path for numeracy skill
                  development for children with dyslexia. The executive
                  functioning skills required in the games are particularly
                  helpful for those with ADHD, while socially interactive
                  features aid children with ASD in practicing social skills.
                
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[f9f9f9]"></div>
          <div className="bg-[f9f9f9]"></div>
        </div>
      </div>
    </>
  );
}

function Foot() {
  return (
    <>
      <div className="bg-[#ffffff] mt-[5vh0] pt-[3vh] px-[15vh] shadow-md shadow-black w-[100%]">
        <div className="flex mx-[40vh] mt-[10vh]">
          <div className="flex items-center p-[2vh] justify-center flex-col">
            <img className="w-[18vh] h-[14vh]" src={logo} />
            <span className="font-semibold cognitive2">
              Redefining special education through <br></br>immersive, AR
              powered games that inspire progress and engagement.
            </span>
          </div>
          <div className="clinical2 flex flex-col px-5">
            <h1 className="text-[18px]">Quick Links</h1>
            <h1 className="mt-5 footer_font">Home</h1>
            <h1 className="footer_font">About Us</h1>
          </div>
          <div className="clinical2 flex flex-col px-5">
            <h1 className="text-[18px]">Skills we Develop</h1>
            <a href="#cog">
              <h1 href="cog" className="footer_font mt-5">
                Cognitive Skills
              </h1>
            </a>
            <a href="#edu">
              <h1 className="footer_font">Educational Skills</h1>
            </a>
            <a href="#fun">
              <h1 className="footer_font">Fun & Interactive Games</h1>
            </a>
          </div>
          <div className="clinical2 flex flex-col px-5">
            <h1 className="text-[18px]">Who we help</h1>
            <h1 className="footer_font mt-5">
              Attention Deficit Hyperactive Disorder
            </h1>
            <h1 className="footer_font">Educational Skills</h1>
            <h1 className="footer_font">Fun & Interactive Games</h1>
          </div>
        </div>
      </div>
    </>
  );
}

// arrange the num puzzle
// color the picture,piano
export default function App() {
  return (
    <>
      {" "}
      <NavBar></NavBar>
      <MainPart></MainPart>
      <WhyGames></WhyGames>
      <CognitiveSkills></CognitiveSkills>
      <EducationaLSkills></EducationaLSkills>
      <FunGames></FunGames>
      <Foot></Foot>
    </>
  );
}
