import { useState } from 'react'



function Skills() {
  const [lenguajes] = useState([
    "JavaScript", "HTML", "CSS", "SQL", "Python", "C#", "Java", "PostgreSQL"
  ]);

  const [tools] = useState([
    "Git", "Github", "Postman", "Insomnia", "Visual Studio Code", "Unity", "npm", "Chrome DevTools"
  ]);

  const [framework] = useState([
    "React", "React Native", "NodeJS", "Tailwind", "Bootstrap", "ExpressJS", "Vite", "Expo"
  ]);

  const [skill, setSkill] = useState([]);
  return (
    <div>

      <p className="text-center text-2xl mt-3">
        Habilidades
      </p>
      <div className="flex justify-center pl-5 gap-x-10 pt-5 pb-10">
        <ul className="text-center">
          <li className="text-xl text-pinky">Lenguajes</li>
          {
            lenguajes.map(val => (
              <li className="pt-0.5">
                {val}
              </li>
            ))
          }
        </ul>
        <ul className="text-center">
          <li className="text-xl text-pinky">Herramientas</li>
          {
            tools.map(val => (
              <li className="pt-0.5">
                {val}
              </li>
            ))
          }
        </ul>

        <ul className="text-center">
          <li className="text-xl text-pinky">Frameworks</li>
          {
            framework.map(val => (
              <li className="pt-0.5">
                {val}
              </li>
            ))
          }
        </ul>

      </div>
    </div>
  )
}

export default Skills

