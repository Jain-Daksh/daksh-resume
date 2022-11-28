// import './skills.css';
// import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
// import { AppWrap, MotionWrap } from '../../wrapper/index';
// import { urlFor, client } from '../../Client';

// const Skills = () => {
//   return (
//     <div>
//       <h2 className="head-text">Skills & Experiences</h2>
//     </div>
//   )
// }

// export default Skills

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../Client';
// import './skills.css';

// const Skills = () => {
//   const [experiences, setExperiences] = useState([]);
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "experiences"]';
//     const skillsQuery = '*[_type == "skills"]';

//     client.fetch(query).then((data) => {
//       setExperiences(data);
//     });

//     client.fetch(skillsQuery).then((data) => {
//       setSkills(data);
//     });
//   }, []);

//   return (
//     <>
//       <h2 className="head-text">Skills & Experiences</h2>

//       <div className="app__skills-container">
//         <motion.div className="app__skills-list">
//           {skills.map((skill) => (
//             <motion.div
//               whileInView={{ opacity: [0, 1] }}
//               transition={{ duration: 0.5 }}
//               className="app__skills-item app__flex"
//               key={skill.name}
//             >
//               <div
//                 className="app__flex"
//                 style={{ backgroundColor: skill.bgColor }}
//               >
//                 <img src={urlFor(skill.icon)} alt={skill.name} />
//               </div>
//               <p className="p-text">{skill.name}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//         <div className="app__skills-exp">
//           {experiences.map((experience) => (
//             <motion.div
//               className="app__skills-exp-item"
//               key={experience.year}
//             >
//               <div className="app__skills-exp-year">
//                 <p className="bold-text">{experience.year}</p>
//               </div>
//               <motion.div className="app__skills-exp-works">
//                 {experience.works.map((work) => (
//                   <>
//                     <motion.div
//                       whileInView={{ opacity: [0, 1] }}
//                       transition={{ duration: 0.5 }}
//                       className="app__skills-exp-work"
//                       data-tip
//                       data-for={work.name}
//                       key={work.name}
//                     >
//                       <h4 className="bold-text">{work.name}</h4>
//                       <p className="p-text">{work.company}</p>
//                       <p className="p-text">{work.desc}</p>

//                     </motion.div>
//                     {/* <ReactTooltip
//                       id={work.name}
//                       effect="solid"
//                       arrowColor="#fff"
//                       className="skills-tooltip"
//                     >
//                       {work.desc}
//                     </ReactTooltip> */}

//                   </>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Skills, 'app__skills'),
//   'skills',
//   'app__whitebg',
// );

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../Client';
import './skills.css';
import { images } from '../../constants';



const Skills = () => {

  const skillSet = [
    {
      "id": "1",
      "icon": images.html,
      "name": "HTML"
    },
    {
      "id": "2",
      "icon": images.css,
      "name": "CSS"
    },
    {
      "id": "3",
      "icon": images.javascript,
      "name": "JavaScript"
    },
    {
      "id": "4",
      "icon": images.postgres,
      "name": "PostgreSql"
    },
    {
      "id": "5",
      "icon": images.mysql,
      "name": "MySql"
    },
    {
      "id": "6",
      "icon": images.react,
      "name": "React JS"
    },
    {
      "id": "7",
      "icon": images.node,
      "name": "Node JS"
    },
    {
      "id": "8",
      "icon": images.Nextjs,
      "name": "Next JS"
    },
    {
      "id": "9",
      "icon": images.git,
      "name": "GIT"
    }
    // {
    //   "id":"",
    //   "icon": "",
    //   "name":""
    // },
  ]

  const experiencess = [
    {
      "year": "2021",
      "id": "1",
      "name": "Intern",
      "company": "Alvrio Labs",
      "desc": "Worked as intern in alvrio labs as full stack developer"
    },
    // {
    //   "id":"",
    //   "name":"",
    //   "company":"",
    //   "desc":""
    // }
  ]

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {
            skillSet.map((value, id) => (
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={value.id}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: value.bgColor }}
                  >
                    <img src={value.icon} alt={value.name} />
                  </div>
                  <p className="p-text">{value.name}</p>
                </motion.div>
              </>
            ))
          }
        </motion.div>
        <div className="app__skills-exp">
          {
            experiencess.map((experience, id) => (
              <>
                <motion.div
                  className="app__skills-exp-item"
                  key={experience.year}
                >
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{experience.year}</p>
                  </div>


                  <motion.div className="app__skills-exp-works">

                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={experience.name}
                        key={experience.id}
                      >
                        <h4 className="bold-text">{experience.name}</h4>
                        <p className="p-text">{experience.company}</p>
                        <p className="p-text">{experience.desc}</p>

                      </motion.div>
                   
                  </>

                </motion.div>
                </motion.div>
              </>

            ))
          }
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);