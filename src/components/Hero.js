import Heroimg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub,FaFacebookF,FaInstagram,FaLinkedin } from "react-icons/fa";
import img5 from '../assets/IMG-20241228-WA0146.jpg'

export default function Hero() {

  const config = {
    subtitle: 'I’m a Frontend Developer and Designer',
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8 md:py-0">
      
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0">
        <h2 className="text-xl font-semibold text-gray-600">Hi</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          I'm <span className="text-green-500">Ziad Ahamed</span><br />
          a Frontend Developer
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Passionate about building modern, responsive websites with clean design. Skilled in React, Bootstrap, and JavaScript.
        </p>
        <div className="flex py-4 justify-center md:justify-start">
        <a target="_blank" href="https://www.linkedin.com/in/ziad-ahamed-54a0ab244" className="pr-3 text-zinc-600 hover:text-black">
        <FaLinkedin size={40} />
  
  </a>
  <a target="_blank" href="https://github.com/ziadahamed" className="pr-3 text-zinc-600 hover:text-black">
    <FaGithub size={40} />

  </a>
<a href="https://www.facebook.com/" className="pr-3 text-zinc-600 hover:text-black">
    <FaFacebookF size={40} />  
  </a>
  <a href="https://www.instagram.com/_zi_a_d__/?next=%2F" className="pr-3 text-zinc-600 hover:text-black">
    <FaInstagram size={40} />
  </a>
</div>




        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-[#1f2937] text-white px-5 py-2 rounded-md hover:bg-gray-800">
            Hire Me
          </button>
         
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={img5}
          alt="Ziad Ahamed"
          className="w-80 max-w-full h-auto object-cover rounded-xl shadow-xl border-[4px] border-white"
        />
      </div>
    </div>
  )
}
