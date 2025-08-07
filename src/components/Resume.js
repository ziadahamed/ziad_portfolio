import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link : 'https://drive.google.com/file/d/1_6klQeTX6aInM9oMTM5GE9_xc2d64rFn/view?usp=sharing',
        email : 'ziadahamed17@gmail.com',
        phone : '9894507547',

    }
   

    return <section className='flex flex-col md:flex-row bg-[#1f2937] px-15' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end' data-aos="fade-up">
            <img className='w-[300px]' src={ResumeImg} alt='my-resume'/>
        </div>
        <div className='md:w-1/2 flex justify-center' data-aos="fade-up">
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-green-500 border-b-4 w-[140px] mb-5 font-bold'>Resume</h1>
            <p className='text-white pb-5' >You can view my resume <a href={config.link} className='btn bg-[#1f2937]'>Download</a></p>
            <p className='text-white pb-5' >If you want to discuss more in detail, please contact me </p>
            <p className="py-2 text-white"><span className="font-bold text-white">Email :</span>{config.email}</p>  
              <p className="py-2 text-white"><span className="font-bold text-white">Phone :</span>{config.phone}</p>  
                
            
            </div>
        </div>

        </section>
}