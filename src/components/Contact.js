import { FaGithub,FaFacebookF,FaInstagram,FaLinkedin } from "react-icons/fa";
export default function Contact() {
  

    return <section className='flex text-white flex-col bg-green-500 px-5 py-20' id="contact">
        
        <div className=' flex flex-col items-center' data-aos="fade-up">

            <h1 className='text-4xl text-white border-[#1f2937] border-b-4 w-[140px] mb-5 font-bold'>Contact</h1>
            <div className="flex py-4">
            <a target="_blank" href="https://www.linkedin.com/in/ziad-ahamed-54a0ab244" className="pr-3 text-zinc-600 hover:text-black">
                <FaLinkedin size={40} />
              </a>
             
              <a target="_blank" href="https://github.com/" className="pr-3 text-zinc-600 hover:text-black">
                <FaGithub size={40} />
              </a>
              <a href="https://www.facebook.com/" className="pr-3 text-zinc-600 hover:text-black">
                <FaFacebookF size={40} />
              </a>
             
              <a href="https://www.instagram.com/_zi_a_d__/?next=%2F" className="pr-3 text-zinc-600 hover:text-black">
                <FaInstagram size={40} />
              </a>
              </div>
         
              
              <p className='text-white'>&copy; 2025 All Rights Reserved. Made By <br /><span className='flex justify-center'>Ziad Ahamed. </span> </p> 
              <p className='text-white'>Privacy Policy Terms and Conditions<br /><span className='flex justify-center'></span> </p>
            </div>
        

        </section>
}