
import main from "./Images/main-heading.png";
import bg from "./Images/bg.jpg"; 
import logo from "./Images/logo.png";
import why from "./Images/why-wonder-games-heading-desktop.png"
import hair from "./Images/Special/svg4.svg"
import star from "./Images/Special/svg5.svg"
import whore from "./Images/Special/svg3.svg"
import clinical from "./Images/Special/clinically-proven-excellence.png"
import comm from "./Images/Special/community.png"
import access from "./Images/Special/accessible-skill-development.png"
import './App.css';












function NavBar() { 
  return (
    <>
      <>
        <div class="flex justify-between bg-[#F8CB1E] border-b-[1px] h-[9vh] border-[#211D21]">
        <div classname="flex mt-3 min-ml-[10px]">
          <img class="mt-1 ml-[50px]" src={logo} alt="" />
          </div>
          <div class="flex m-2">
            <div class=" hover:text-[f9f9f9] flex font-bold text-[#211D21] font-['Josefin Sans', sans-serif] text-[1.7em] m-4 mt-7 subpixel-antialiased">
              <a className="h-fit" href="">About us</a>
            </div>
            <div class=" hover:text-[f9f9f9] font-bold flex text-[#211D21]  text-[1.7em] m-4 mt-7  subpixel-antialiased">
             <a className="h-fit" href=""> Skills we develop</a>
            </div>
            <div class=" <a>hover:text-[f9f9f9] font-bold flex text-[#211D21]  text-[1.7em] m-4 mt-7  subpixel-antialiased">
              <a className="h-fit" href="">Who we help</a>
            </div>
            <div class=" hover:text-[f9f9f9] font-bold flex text-[#211D21] text-[1.7em] m-4 mt-7  subpixel-antialiased">
              <a className="h-fit" href="">Clinical Advice</a> 
            </div>
            <div class=" hover:text-[f9f9f9] font-bold flex text-[#211D21] text-[1.7em] m-4 mt-7  subpixel-antialiased">
              <a className="h-fit" href="">About Us</a>
            </div>
            <div class=" hover:text-[f9f9f9] font-bold flex text-[#211D21] text-[1.7em] m-4 mt-7 mr-12 subpixel-antialiased">
              <a className="h-fit" href="">Log In</a>
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
      <div style={{
        backgroundImage: `url(${bg})`,
      }} class="h-screen flex flex-col justify-center ">
        
        
        <div class="bg-transparent pb-[35px] mt-[60vh]  relative flex justify-center">
          <div class="w-fit h-fit bg-transparent flex justify-around px-[35px]">
            <div class="text-center w-[104.93] px-[20px] py-[10px] leading-6 shadow bg-blend-multiply shadow-black text- rounded-lg font-bold bg-[#F8CB1E] min-h-full">
              Cognitive Learning
            </div>
            <div class="text-center w-[104.93] mx-[15px]  px-[20px] py-[10px] shadow bg-blend-multiply shadow-black leading-6 font-bold text-[#211D21] rounded-lg bg-[#F8CB1E] h-fit">
              Educational Learning
            </div>
            <div class="text-center w-[104.93] mx-[15px]  px-[20px] py-[10px] shadow bg-blend-multiply shadow-black leading-6 font-bold text-[#211D21] rounded-lg bg-[#F8CB1E] h-fit">
              Educational Learning
            </div>
            <div class="text-center w-[104.93] mx-[15px]  px-[20px] py-[10px] shadow bg-blend-multiply shadow-black leading-6 font-bold text-[#211D21] rounded-lg bg-[#F8CB1E] h-fit">
              Educational Learning
            </div>
            <div class="text-center w-[104.93] mx-[15px]  px-[20px] py-[10px] shadow bg-blend-multiply shadow-black leading-6 font-bold text-[#211D21] rounded-lg bg-[#F8CB1E] h-fit">
              Educational Learning
            </div>
            <div class="text-center w-[104.93] mx-[15px]  px-[20px] py-[10px] shadow bg-blend-multiply shadow-black leading-6 font-bold text-[#211D21] rounded-lg bg-[#F8CB1E] h-fit">
              Educational Learning
            </div>
            <div class="text-center w-[104.93] px-[20px] py-[10px] leading-6 shadow bg-blend-multiply shadow-black font-bold text-[#211D21] rounded-lg bg-[#F8CB1E] h-fit">
              Parental Teach
            </div>
          </div>
        </div>
        <div class="flex justify-center bg-transparent">
          <div class="w-[130vh] flex justify-around rounded-[25px] shadow bg-blend-multiply shadow-black h-[70vh] bg-[#F8CB1E]">
          </div>
        </div>
        <div className="flex">
        <img class="m-3" src={main} className="justify-center" alt="" />
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${bg})`,
      }} class="h-screen flex flex-col justify-center "></div>
    </>
  );
}
function WhyGames()
{
  return(
    <>
    <div className="flex flex-col m-[30vh] mt-0 w-fit h-fit bg-blend-multiply bg-[#F9f9f9]">
      <div className="flex justify-center items-center">
        <img src={why} alt=""/>
      </div>
      <div className="flex m-[10px]">
        <div className="flex flex-col p-[30px]">
          <img src={hair} className="w-[20vh] h-[20vh]" alt=""/>
          <img src={star} className="w-[10vh] h-[10vh]" alt=""/>
          <img src={whore} className="w-[10vh] h-[10vh]" alt=""/>
        </div>
        <div className="flex flex-col p-[30px] items-center justify-center ">
        <img src={clinical} className="" alt=""/>
        <h1 className="  clinical">Clinically Proven<br/> Excellence</h1>
        <div>
           <p className="clinical2">Select WonderTree for our clinically</p>
           <p className="clinical2">validated AR games that offer</p>
           <p className="clinical2">genuine advantages, including</p>
           <p className="clinical2">improving balance, bolstering self-</p>
           <p className="clinical2">esteem, and providing practical</p>
           <p className="clinical2">guidance. This results in significant</p>
           <p className="clinical2">improvements for children with</p>
           <p className="clinical2">learning differences.</p>
        </div>
        </div>
        <div className="p-[30px] ">
        <img src={access} className="" alt=""/>
        <h1 className="  clinical">Accessible Skill<br/>Development</h1>
        <div>
           <p className="clinical2">Every child deserves the opportunity</p>
           <p className="clinical2">to unlock their potential. WonderTree</p>
           <p className="clinical2">is dedicated to fostering accessible</p>
           <p className="clinical2">skill development across all</p>
           <p className="clinical2">spectrums, making learning</p>
           <p className="clinical2">enjoyable and inclusive, regardless</p>
           <p className="clinical2">of individual abilities or challenges.</p>
           <p className="clinical2">learning differences.</p>
        </div>
        </div>
        <div className="p-[30px] ">
        <img src={comm} className="" alt=""/>
        <h1 className="  clinical">By the community,<br/>For the community</h1>
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
    </>
  );
}
