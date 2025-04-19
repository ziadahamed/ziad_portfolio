import AboutImg from '../assets/about.png';
import gif from '../assets/2be1ce_864567900845418ebfd61e297637464d~mv2.gif';

export default function About() {
  const config = {
    line1:
      'Hi, My Name is Ziad Ahamed. I am a Frontend Developer with a passion for creating beautiful and functional web applications.',
    line2:
      'I have experience in HTML, CSS, JavaScript, and React. I love to learn new technologies and improve my skills. In my free time, I enjoy playing Badminton and spending time with my family and friends.',
    line3: 'In backend I know Node.js, Python, and MySQL.',
  };

  return (
    <section className="flex flex-col md:flex-row items-center bg-[#1f2937] px-6 md:px-20 py-20 gap-10" id="about">
      {/* Left - Image */}
      <div className="md:w-1/2 flex justify-center">
  <img
    src={gif}
    alt="About"
    className="w-72 md:w-96 h-auto object-cover rounded-xl shadow-2xl"

  />
</div>


      {/* Right - Text */}
      <div className="md:w-1/2 text-white space-y-5">
        <h2 className="text-4xl font-bold border-b-4 border-green-500 w-fit mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">{config.line1}</p>
        <p className="text-lg leading-relaxed">{config.line2}</p>
        <p className="text-lg leading-relaxed">{config.line3}</p>
      </div>
    </section>
  );
}
