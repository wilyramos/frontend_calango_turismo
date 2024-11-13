import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGit, FaDatabase, FaGithub } from 'react-icons/fa';

const skills = {
    frontend: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <FaReact /> } // Reusing React icon for Next.js as an example
    ],
    backend: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <FaReact /> }, // Reusing React icon for Express as an example
        { name: 'MongoDB', icon: <FaDatabase /> },
        { name: 'MySQL', icon: <FaDatabase /> } // Reusing Database icon for MySQL as an example
    ],
    deployment: [
        { name: 'Git', icon: <FaGit /> },
        { name: 'Github', icon: <FaGithub />},
        { name: 'Docker', icon: <FaDocker /> },
        
    ],
    

};

export default function Skills() {

    return (
        <>
            <section id="skills" className="w-full py-2 text-white ">
                <div className="container mx-auto px-2">
                    <div className="grid grid-cols-1 gap-2 text-center">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-gray-800 rounded-xl p-4 shadow-md">
                                <h2 className="text-lg font-bold mb-4">{category}</h2>
                                <div className="flex flex-wrap gap-4 text-lg font-light">
                                    {items.map((skill) => (
                                        <div key={skill.name} className="flex items-center text-light">
                                            <span className="text-3xl mr-2 ">{skill.icon}</span>

                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
