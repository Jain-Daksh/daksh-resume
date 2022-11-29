// import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import { motion } from 'framer-motion';
// import { AppWrap, MotionWrap } from '../../wrapper/index';
// import { urlFor, client } from '../../Client';
// import { images } from '../../constants';

// import './work.css';
// const MyWork = [
//   {
//     "id":1,
//     "img":images.about01,
//     "name":"a",
//     "title":"a",
//     "description":"a",
//     "tags":"a",
//     "projectLink":"a",
//     "codeLink":"github",
//     category: "diploma",
//   },
//   {
//     "id":2,
//     "img":images.about02,
//     "name":"Web App",
//     "title":"work2",
//     "description":"work2",
//     "tags":"Web App",
//     "projectLink":"a"
//   },
//   {
//     "id":3,
//     "img":images.about03,
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":"",
//     "projectLink":"a"
//   },
//   {
//     "id":4,
//     "img":"",
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":"",
//     "projectLink":"a"
//   },
//   {
//     "id":5,
//     "img":"",
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":"",
//     "projectLink":"a"
//   },
//   {
//     "id":6,
//     "img":"",
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":"",
//     "projectLink":"a"
//   },
//   {
//     "id":7,
//     "img":"",
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":"",
//     "projectLink":"a"
//   },
//   {
//     "id":8,
//     "img":"",
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":""
//   },
//   {
//     "id":9,
//     "img":"",
//     "name":"",
//     "title":"",
//     "description":"",
//     "tags":""
//   },

// ]

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   // const [filterWork, setFilterWork] = useState([]);
//   const [filterWork, setFilterWork] = useState(MyWork);

//   const [activeFilter, setActiveFilter] = useState('All');
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

//   // useEffect(() => {
//   //   const query = '*[_type == "works"]';

//   //   client.fetch(query).then((data) => {
//   //     setWorks(data);
//   //     setFilterWork(data);
//   //   });
//   // }, []);

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === 'All') {
//         setFilterWork(works);
//       } else {
//         setFilterWork(works.filter((work) => work.tags.includes(item)));
//       }
//     }, 500);
//   };
//   /*remove */
//   const filterResult = (catItem) => {
//     const result = filterWork.filter((curDate) => {
//         return curDate.category === catItem;
//     });
//     setFilterWork(result);
// }
//   return (
//     <div>
//       <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
//       <div className="app__work-filter">
//         {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
//           <div
//             key={index}
//             onClick={() => handleWorkFilter(item)}
//             className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab"
//             role="tablist">


//             <li className="nav-item me-2 me-sm-5 list" data-filter="all">
//               <button className="nav-link mb-2 mb-md-0 active button-list" id="course-pills-tab-1" data-bs-toggle="pill"
//                 data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1"
//                 aria-selected="false" onClick={() => setFilterWork(filterWork)}>All</button>
//             </li>

//             <li className="nav-item me-2 me-sm-5 list" data-filter="development">
//               <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-2" data-bs-toggle="pill"
//                 data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2"
//                 aria-selected="false" onClick={() => filterResult('diploma')}> Diploma </button>
//             </li>

//             <li className="nav-item me-2 me-sm-5 list">
//               <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-3" data-bs-toggle="pill"
//                 data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3"
//                 aria-selected="false" onClick={() => filterResult('graduate')}> Graduate </button>
//             </li>

//             <li className="nav-item me-2 me-sm-5">
//               <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-4" data-bs-toggle="pill"
//                 data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4"
//                 aria-selected="false" onClick={() => filterResult('postGraduate')}>Post Graduate </button>
//             </li>

//             <li className="nav-item me-2 me-sm-5">
//               <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-5" data-bs-toggle="pill"
//                 data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5"
//                 aria-selected="false" onClick={() => filterResult('superSpeciality')}> Super Speciality</button>
//             </li>
//           </ul>
//       <motion.div
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {/* {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div
//               className="app__work-img app__flex"
//             >
//               <img src={urlFor(work.imgUrl)} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">

//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillEye />
//                   </motion.div>
//                 </a>
//                 <a href={work.codeLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillGithub />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text">{work.title}</h4>
//               <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

//               <div className="app__work-tag app__flex">
//                 <p className="p-text">{work.tags[0]}</p>
//               </div>
//             </div>
//           </div>
//         ))} */}
//          {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div
//               className="app__work-img app__flex"
//             >
//               <img src={(work.img)} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">

//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillEye />
//                   </motion.div>
//                 </a>
//                 <a href={work.codeLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillGithub />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text">{work.title}</h4>
//               <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

//               <div className="app__work-tag app__flex">
//                 <p className="p-text">{work.tags[0]}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }
// export default AppWrap(Work, 'work');



// import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import { motion } from 'framer-motion';
// import { AppWrap, MotionWrap } from '../../wrapper/index';
// import { urlFor, client } from '../../Client';
// import { images } from '../../constants';

// import './work.css';
// const MyWork = [
//   {
//     "id": 1,
//     "img": images.about01,
//     "name": "a",
//     "title": "a",
//     "description": "a",
//     "tags": "a",
//     "projectLink": "a",
//     "codeLink": "github",
//     category: "diploma",
//   },
//   {
//     "id": 2,
//     "img": images.about02,
//     "name": "Web App",
//     "title": "work2",
//     "description": "work2",
//     "tags": "Web App",
//     "projectLink": "a"
//   },
//   {
//     "id": 3,
//     "img": images.about03,
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": "",
//     "projectLink": "a"
//   },
//   {
//     "id": 4,
//     "img": "",
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": "",
//     "projectLink": "a"
//   },
//   {
//     "id": 5,
//     "img": "",
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": "",
//     "projectLink": "a"
//   },
//   {
//     "id": 6,
//     "img": "",
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": "",
//     "projectLink": "a"
//   },
//   {
//     "id": 7,
//     "img": "",
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": "",
//     "projectLink": "a"
//   },
//   {
//     "id": 8,
//     "img": "",
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": ""
//   },
//   {
//     "id": 9,
//     "img": "",
//     "name": "",
//     "title": "",
//     "description": "",
//     "tags": ""
//   },

// ]

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   // const [filterWork, setFilterWork] = useState([]);
//   const [filterWork, setFilterWork] = useState(MyWork);

//   const [activeFilter, setActiveFilter] = useState('All');
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

//   // useEffect(() => {
//   //   const query = '*[_type == "works"]';

//   //   client.fetch(query).then((data) => {
//   //     setWorks(data);
//   //     setFilterWork(data);
//   //   });
//   // }, []);

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === 'All') {
//         setFilterWork(works);
//       } else {
//         setFilterWork(works.filter((work) => work.tags.includes(item)));
//       }
//     }, 500);
//   };
//   /*remove */
//   const filterResult = (catItem) => {
//     const result = filterWork.filter((curDate) => {
//       return curDate.category === catItem;
//     });
//     setFilterWork(result);
//   }
//   return (
//     <div>
//       <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
//       <div className="">
//         <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab"
//         role="tablist">
//         <li className="nav-item me-2 me-sm-5 list" data-filter="all">
//           <button className="nav-link mb-2 mb-md-0 active button-list" id="course-pills-tab-1" data-bs-toggle="pill"
//             data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1"
//             aria-selected="false" onClick={() => setFilterWork(filterWork)}>All</button>
//         </li>

//         <li className="nav-item me-2 me-sm-5 list" data-filter="development">
//           <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-2" data-bs-toggle="pill"
//             data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2"
//             aria-selected="false" onClick={() => filterResult('diploma')}> Diploma </button>
//         </li>

//         <li className="nav-item me-2 me-sm-5 list">
//           <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-3" data-bs-toggle="pill"
//             data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3"
//             aria-selected="false" onClick={() => filterResult('graduate')}> Graduate </button>
//         </li>

//         <li className="nav-item me-2 me-sm-5">
//           <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-4" data-bs-toggle="pill"
//             data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4"
//             aria-selected="false" onClick={() => filterResult('postGraduate')}>Post Graduate </button>
//         </li>

//         <li className="nav-item me-2 me-sm-5">
//           <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-5" data-bs-toggle="pill"
//             data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5"
//             aria-selected="false" onClick={() => filterResult('superSpeciality')}> Super Speciality</button>
//         </li>
//       </ul>
//         </div>
//       <motion.div
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div
//               className="app__work-img app__flex"
//             >
//               <img src={(work.img)} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">

//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillEye />
//                   </motion.div>
//                 </a>
//                 <a href={work.codeLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillGithub />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text">{work.title}</h4>
//               <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

//               <div className="app__work-tag app__flex">
//                 <p className="p-text">{work.tags[0]}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }
// export default AppWrap(Work, 'work');



///working code  


// import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper/index';
// import { urlFor, client } from '../../Client';
// import './work.css';

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   const [filterWork, setFilterWork] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

//   useEffect(() => {
//     const query = '*[_type == "works"]';

//     client.fetch(query).then((data) => {
//       setWorks(data);
//       setFilterWork(data);
//     });
//   }, []);

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === 'All') {
//         setFilterWork(works);
//       } else {
//         setFilterWork(works.filter((work) => work.tags.includes(item)));
//       }
//     }, 500);
//   };

//   return (
//     <>
//       <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

//       <div className="app__work-filter">
//         {['Web App', 'Node JS', 'React JS', 'All'].map((item, index) => (
//           <div
//             key={index}
//             onClick={() => handleWorkFilter(item)}
//             className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       <motion.div
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div
//               className="app__work-img app__flex"
//             >
//               <img src={urlFor(work.imgUrl)} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">

//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.90] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                   >
//                     <AiFillEye />
//                   </motion.div>
//                 </a>

//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text">{work.title}</h4>
//               <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

//               <div className="app__work-tag app__flex">
//                 <p className="p-text">{work.tags[0]}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Work, 'app__works'),
//   'work',
//   'app__primarybg',
// );









/////test



import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper/index';
import { urlFor, client } from '../../Client';
import './work.css';
import { images } from '../../constants';

const courses = [
  {
    "id": "1",
    "Title": "Gurukul College of Pharmacy",
    "Description": "",
    "Project_Link": `https://gurukulpharma.com/`,
    "ImageUrl": images.gurukul,
    category: 'react'
  },
  {
    "id": "2",
    "Title": "Mahalaxmi Borewell",
    "Description": "",
    "Project_Link": `https://mahalaxmiborewell.in/`,
    "ImageUrl": images.Mahalaxmi,
    category: ""
  },
  {
    "id": "3",
    "Title": "Vinayak Steel Furniture",
    "Description": "",
    "Project_Link": `https://www.vinayaksteelfurniture.com/`,
    "ImageUrl": images.vinakya,
    category: ""
  },
  {
    "id": "4",
    "Title": "Jaisalmer Desert Safari",
    "Description": "",
    "Project_Link": `https://hotel-camp-website.vercel.app/`,
    "ImageUrl": images.hotelCamp ,
    category: ""
  },
  {
    "id": "5",
    "Title": "Lakshya Academy",
    "Description": "",
    "Project_Link": `https://la-website-beta.vercel.app/`,
    "ImageUrl": images.laWebsite,
    category: ""
  },
  {
    "id": "6",
    "Title": "Alvrio",
    "Description": "",
    "Project_Link": `https://beta.alvrio.io/`,
    "ImageUrl": images.alvrio,
    category: "web_app"
  },
  // {
  //   "id": "7",
  //   "Title": "",
  //   "Description": "",
  //   "Project_Link": ``,
  //   "ImageUrl": "",
  //   category: ""
  // },
  // {
  //   "id":"",
  //   "Title":"",
  //   "Description":"",
  //   "Project_Link":"",
  //   "ImageUrl":"",
  //   category:""
  // },
]
const Work = () => {
  const [data, setData] = useState(courses);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const filterResult = (catItem) => {
    const result = courses.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  }
  return (
    <section>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
      <div className='app__work-filter'>
        <div className={`app__work-filter-item app__flex p-text ${activeFilter === filterResult ? 'item-active' : ''}`} data-filter="all" onClick={() => setData(courses)}>
          All
        </div>
        <div className={`app__work-filter-item app__flex p-text ${activeFilter === filterResult ? 'item-active' : ''}`} data-filter="all" onClick={() => filterResult('web_app')}>
          Web App
        </div>
        <div className={`app__work-filter-item app__flex p-text ${activeFilter === filterResult ? 'item-active' : ''}`} data-filter="all" onClick={() => filterResult('react')}>
          React JS
        </div>
        <div className={`app__work-filter-item app__flex p-text ${activeFilter === filterResult ? 'item-active' : ''}`} data-filter="all" onClick={() => filterResult('node')}>
          Node JS
        </div>
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {
          courses.map((work, id) => (
            <>
              <div className="app__work-item app__flex" key={id}>
                <div
                  className="app__work-img app__flex"
                >
                  <img src={work.ImageUrl} alt={work.name} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="app__work-hover app__flex"
                  >
                    <a href={work.Project_Link} target="_blank" rel="noreferrer">

                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.90] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>

                  </motion.div>

                </div>
                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{work.Title}</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>{work.Description}</p>


                </div>
              </div>

            </>
          ))
        }
      </motion.div>

    </section>

  //   <section className="courses section1">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col text-courses mx-auto text-center">
  //         <h2 className="mb-5 text-center heading"> Most Popular
  //           Courses</h2>
  //         <p className="paragraph mb-4">Choose from hundreds of courses from specialist organizations</p>
  //       </div>
  //     </div>
      // <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab"
      //   role="tablist">


      //   <li className="nav-item me-2 me-sm-5 list" data-filter="all">
      //     <button className="nav-link mb-2 mb-md-0 active button-list" id="course-pills-tab-1" data-bs-toggle="pill"
      //       data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1"
      //       aria-selected="false" onClick={() => setData(courses)}>All</button>
      //   </li>

      //   <li className="nav-item me-2 me-sm-5 list" data-filter="development">
      //     <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-2" data-bs-toggle="pill"
      //       data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2"
      //       aria-selected="false" onClick={() => filterResult('diploma')}> Diploma </button>
      //   </li>

      //   <li className="nav-item me-2 me-sm-5 list">
      //     <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-3" data-bs-toggle="pill"
      //       data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3"
      //       aria-selected="false" onClick={() => filterResult('graduate')}> Graduate </button>
      //   </li>

      //   <li className="nav-item me-2 me-sm-5">
      //     <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-4" data-bs-toggle="pill"
      //       data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4"
      //       aria-selected="false" onClick={() => filterResult('postGraduate')}>Post Graduate </button>
      //   </li>

      //   <li className="nav-item me-2 me-sm-5">
      //     <button className="nav-link mb-2 mb-md-0 button-list" id="course-pills-tab-5" data-bs-toggle="pill"
      //       data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5"
      //       aria-selected="false" onClick={() => filterResult('superSpeciality')}> Super Speciality</button>
      //   </li>
      // </ul>
  //     <div className="tab-content">
  //       <div className="row mx-1 course-gap ">
  //         {
  //           data.map((work ,id ) => (
                
  //             <div className="col-sm-12 col-lg-4 col-xl-4 col-md-6 ">
  //               <div className="card courses-card" >
  //                 <img key={id.id} src={work.ImageUrl} className="card-img-top"  layout="responsive" />
  //                 <div className="card-body">
  //                   <h5 className="card-title" >
  //                     {work.Title}
  //                   </h5>
  //                   <p className="card-text card-para d-flex justify-content-start"> {work}</p>

  //                 </div>
  //               </div>
  //             </div>
  //           ))
  //         }
  //       </div>
  //     </div>
  //   </div>
  // </section>
  )

};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);