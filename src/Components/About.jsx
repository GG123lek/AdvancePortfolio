import Aboutimage from '../assets/gafarpictures2025.webp'
import ScrollReveal from '../Components/ScrollReveal'

function About() {
  const skills = [
    { name: 'React JS', width: 'w-11/12' },
    { name: 'JAVASCRIPT', width: 'w-11/12' },
    { name: 'HTML & CSS', width: 'w-12/12' },
    { name: 'Tailwind Css', width: 'w-11/12' },
    { name: 'API Integration', width: 'w-12/12' },
    { name: 'Figma', width: 'w-12/12' }
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '3+', label: 'Project Completed' },
    { value: '6+', label: 'Happy Clients' }
  ];

  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <ScrollReveal direction="up">
         <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        </ScrollReveal>
        
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          {/* Image with scale animation */}
          <ScrollReveal direction="scale" delay={0.2}>
            <img src={Aboutimage} alt=''
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
          </ScrollReveal>
          
          <div className='flex-1'>
            {/* Description text */}
            <ScrollReveal direction="right" delay={0.3}>
             <p className='text-lg mb-8'>
                   I am passionate front-end developer with a focus on building
                advance and responsive web applications. with a strong foundation
                in advance frontend skills., I strive to create seamless and efficient
                user experiences.
            </p>
            </ScrollReveal>
            
            {/* Skills section */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className='space-y-4'> 
                {skills.map((skill, index) => (
                  <ScrollReveal 
                    key={index} 
                    direction="right" 
                    delay={0.5 + (index * 0.1)}
                  >
                    <div className='flex items-center'>
                      <label className='w-2/12'>{skill.name}</label>
                      <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                         transform transition-transform duration-300 hover:scale-105 ${skill.width}`}>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
            
            {/* Stats section */}
            <ScrollReveal direction="up" delay={0.8}>
              <div className='mt-12 flex justify-between text-center'>
                {stats.map((stat, index) => (
                  <ScrollReveal 
                    key={index} 
                    direction="up" 
                    delay={1.0 + (index * 0.1)}
                  >
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        {stat.value}
                      </h3>
                      <p>{stat.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About