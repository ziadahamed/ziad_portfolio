import websiteImg1 from "../assets/ecommerce-websites.jpg";
import img2 from "../assets/food-ecommerce.jpg";
// import img3 from "../assets/website-blog.jpg";
import img4 from "../assets/istockphoto-1456363935-612x612.jpg";
export default function Project() {
    const config = {

       projects : [
        {
            image : img2,
            description : 'Responsive Restaurent Website like Responsive,Built with HTML,CSS,Javascript and Bootstrap ',
            link : 'https://ziadahamed.github.io/foodhub/'
        },

        {
            image : img4,
            description : 'Developed a responsive to-do list web application using ReactJS for front-end functionality and Tailwind CSS for styling',
            link : 'https://ziadahamed.github.io/todo/',
            code : "https://github.com/ziadahamed/todo"
        },
        {
            image : websiteImg1,
            description : 'A Ecommerce Website.Built with MERN Stack.',
            link : ''
        }
       
       ]
    }

    return (
    <section className="flex flex-col py-20 px-5 justify-center bg-white text-white" id="projects" >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-black border-green-500 border-b-4 w-[150px] mb-5 font-bold">Projects</h1>
          <p className=""> These are some of my best projects. I have build these with React,Javascript,Bootstrap and Tailwind.Check them out.</p>
        </div>
      </div>
    <div className="w-full">
    <div className="flex flex-col justify-center md:flex-row px-10 gap-5" >
      {config.projects.map((project,index) => (
      
          <div className="relative" key={index} data-aos="fade-up">
              <img className="h-[200px] w-[400px]" src={project.image}/>
              <div className="project-desc">
                <p className="text-center py-5 px-5">{project.description}</p>
              </div>

              <div className='flex justify-center gap-5'>
                    <div className='py-5 flex justify-center'>
                          <a target='_blank' href={project.link} >
                            <button className='border-2 rounded-3xl w-24 h-10 bg-[#1f2937] text-white '>View</button>
                          </a>
                    </div>
                    <div className='py-5 flex justify-center'>
                          <a target='_blank' href={project.code} >
                            <button className='border-2 rounded-3xl w-24 h-10 bg-green-500 text-white '>Code</button>
                          </a>
                    </div>
              </div>
          </div>
        ))}
    </div>
    </div>
    </section>
  )
}