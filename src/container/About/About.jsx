import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './about.css';
import { images } from '../../constants';
// import { urlFor, client } from '../../Client';
import { AppWrap, MotionWrap } from '../../wrapper/index';

const abouts = [
  {
    id: 1,
    title: "Web Development",
    description: "lorem",
    imgurl: images.about01
  },
  {
    id: 2,
    title: "Front End Developer",
    description: "lorem",
    imgurl: images.backend
  },
  {
    id: 3,
    title: "Front End Developer",
    description: "lorem",
    imgurl: images.about01
  },
  {
    id: 3,
    title: "PERN Developer",
    description: "lorem",
    imgurl: images.about01
  }
]

const About = () => {
//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "abouts"]';

//     client.fetch(query).then((data) => {
//       setAbouts(data);
//     });
//   }, []);
  return (
    <div>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.id}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <img src={(about.imgurl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default AppWrap(MotionWrap(About, 'app__about'), 'about' , 'app__whitebg');
