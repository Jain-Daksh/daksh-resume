// import './testimonial.css';
// import React, { useState, useEffect } from 'react';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../Client';

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [testimonials, setTestimonials] = useState([]);
//   const [brands, setBrands] = useState([]);

//   const handleClick = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const query = '*[_type == "testimonials"]';
//     const brandsQuery = '*[_type == "brands"]';

//     client.fetch(query).then((data) => {
//       setTestimonials(data);
//     });

//     client.fetch(brandsQuery).then((data) => {
//       setBrands(data);
//     });
//   }, []);

//   return (
//     <>
//     <h2 className="head-text">Testimonials</h2>
//       {testimonials.length && (
//         <>
//           <div className="app__testimonial-item app__flex">
//             <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
//             <div className="app__testimonial-content">
//               <p className="p-text">{testimonials[currentIndex].feedback}</p>
//               <div>
//                 <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
//                 <h5 className="p-text">{testimonials[currentIndex].company}</h5>
//               </div>
//             </div>
//           </div>

//           <div className="app__testimonial-btns app__flex">
//             <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
//               <HiChevronLeft />
//             </div>

//             <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
//               <HiChevronRight />
//             </div>
//           </div>
//         </>
//       )}

//       <div className="app__testimonial-brands app__flex">
//         {brands.map((brand) => (
//           <motion.div
//             whileInView={{ opacity: [0, 1] }}
//             transition={{ duration: 0.5, type: 'tween' }}
//             key={brand._id}
//           >
//             <img src={urlFor(brand.imgUrl)} alt={brand.name} />
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Testimonial, 'app__testimonial'),
//   'testimonial',
//   'app__primarybg',
// );




// import './testimonial.css';
// import React, { useState, useEffect } from 'react';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../Client';
// import { images } from '../../constants';

// const Testimonial = () => {

  
//   const [currentIndex, setCurrentIndex] = useState(0);
//    const [testimonials, setTestimonials] = useState([]);
//    const [brands, setBrands] = useState([]);

//   const handleClick = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const query = '*[_type == "testimonial"]';
//     const brandsQuery = '*[_type == "brands"]';

//     client.fetch(query).then((data) => {
//       setTestimonials(data);
//     });

//     client.fetch(brandsQuery).then((data) => {
//       setBrands(data);
//     });
//   }, []);

//   // return (
//   //   <>
//   //   <h2 className="head-text">Testimonials</h2>
//   //     {testimonial.length && (
//   //       testimonial.map((value,id) => (
//   //         <>
//   //         <div className="app__testimonial-item app__flex">
//   //           <img src={(value.image)} alt={value.name} />
//   //           <div className="app__testimonial-content">
//   //             <p className="p-text">{value.feedback}</p>
//   //             <div>
//   //               <h4 className="bold-text">{value.name}</h4>
//   //               <h5 className="p-text">{value.company}</h5>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         <div className="app__testimonial-btns app__flex">
//   //           <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? value.length - 1 : currentIndex - 1)}>
//   //             <HiChevronLeft />
//   //           </div>

//   //           <div className="app__flex" onClick={() => handleClick(currentIndex === value.length - 1 ? 0 : currentIndex + 1)}>
//   //             <HiChevronRight />
//   //           </div>
//   //         </div> 
//   //         {/* */}
//   //       </>
//   //       ))

//   //     )}

//   //     {/* <div className="app__testimonial-brands app__flex">
//   //       {brands.map((brand) => (
//   //         <motion.div
//   //           whileInView={{ opacity: [0, 1] }}
//   //           transition={{ duration: 0.5, type: 'tween' }}
//   //           key={brand._id}
//   //         >
//   //           <img src={urlFor(brand.imgUrl)} alt={brand.name} />
//   //         </motion.div>
//   //       ))}
//   //     </div> */}
//   //   </>
//   // );
//   return (
//     <>
//       <h2 className="head-text">Testimonials</h2>
//       {testimonials.length && (
//         <>
//           <div className="app__testimonial-item app__flex">
//             <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
//             <div className="app__testimonial-content">
//               <p className="p-text">{testimonials[currentIndex].feedback}</p>
//               <div>
//                 <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
//                 <h5 className="p-text">{testimonials[currentIndex].company}</h5>
//               </div>
//             </div>
//           </div>

//           <div className="app__testimonial-btns app__flex">
//             <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
//               <HiChevronLeft />
//             </div>

//             <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
//               <HiChevronRight />
//             </div>
//           </div>
//         </>
//       )}

//       <div className="app__testimonial-brands app__flex">
//         {brands.map((brand) => (
//           <motion.div
//             whileInView={{ opacity: [0, 1] }}
//             transition={{ duration: 0.5, type: 'tween' }}
//             key={brand._id}
//           >
//             <img src={urlFor(brand.imgUrl)} alt={brand.name} />
//           </motion.div>
//         ))}
//       </div>
//     </>
//   )
// };

// export default AppWrap(
//   MotionWrap(Testimonial, 'app__testimonial'),
//   'testimonial',
//   'app__primarybg',
// );

// const testimonial = [
//   {
//     "id": "",
//     "image": images.Nextjs,
//     "feedback": "da",
//     "name": "",
//     "company": ""
//   },
//   {
//     "id": "",
//     "image": images.Nextjs,
//     "feedback": "dak",
//     "name": "",
//     "company": ""
//   }
// ]



import './testimonial.css';
import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../Client';
import { images } from '../../constants';
const Testimonial = () => {


  const testimonial = [
    {
      "id": "",
      "image": images.Nextjs,
      "feedback": "da",
      "name": "",
      "company": ""
    },
    {
      "id": "",
      "image": images.Nextjs,
      "feedback": "dak",
      "name": "",
      "company": ""
    }
  ]


  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
    <h2 className="head-text">Testimonials</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);



