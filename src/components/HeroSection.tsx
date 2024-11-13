import { useEffect, useState } from 'react';
import Projects from './Categories';
import Skills from './Skills';

export default function HeroSection() {
  const roles = ["Wily", "Developer", "Ingeniero", "Programador"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = `soy ${roles[i]}`;

      setText(prevText =>
        isDeleting ? fullText.substring(0, prevText.length - 1) : fullText.substring(0, prevText.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, isDeleting]);

  return (
    <>
    
      <section className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-950 to-gray-950 p-4">

        <div className="flex-1 lg:w-1/4 p-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-200 p-10">Hola, {text}</h1>
          <p className="text-gray-300 text-lg">Soy ingeniero de sistemas de la UNMSM, full stack Developer</p>
        </div>

        <div className=" lg:w-2/4 min-h-fit flex items-center justify-center">
          <Projects />
        </div>

        <div className="flex lg:w-1/4 p-4 lex items-center justify-center lg:justify-end">
          <div className="bg-gray-950 rounded-lg p-4 w-full max-w-xs">
            <Skills />
          </div>
        </div>
      </section>



    </>

  );
}
