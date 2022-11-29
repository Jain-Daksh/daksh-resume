// import React, { useState } from 'react'
// import './footer.css';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../Client';
// import { images } from '../../constants';

// const Footer = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { username, email, message } = formData;

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     setLoading(true);

//     const contact = {
//       _type: 'contact',
//       name: formData.username,
//       email: formData.email,
//       message: formData.message,
//     };

//     client.create(contact)
//       .then(() => {
//         setLoading(false);
//         setIsFormSubmitted(true);
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <>
//       <div className='address-display'>
//         <div className="contact-image-div">
//           <img src={images.address_image} alt="address_image" />
//         </div>
//         <div>

//           {!isFormSubmitted ? (
//             <div className="app__footer-form app__flex">
//               <div className="app__flex">
//                 <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
//               </div>
//               <div className="app__flex">
//                 <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
//               </div>
//               <div>
//                 <textarea
//                   className="p-text"
//                   placeholder="Your Message"
//                   value={message}
//                   name="message"
//                   onChange={handleChangeInput}
//                 />
//               </div>
//               <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
//             </div>
//           ) : (
//             <div>
//               <h3 className="head-text">
//                 Thank you for getting in touch!
//               </h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }
// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg',
// );



// import React, { useState } from 'react'
// import './footer.css';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../Client';
// import { images } from '../../constants';
// import axios from 'axios';
// import { useForm } from 'react-hook-form'

// const Footer = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   async function onSubmit(values) {
//     let config = {
//       method: "post",
//       url: 'http://localhost:3000/api/contact',
//       headers: { "Content-Type": "application/json" },
//       data: values
//     };
//     try {
//       const response = await axios(config)
//       console.log(response)
//       if (response.data.status == 200) {
//         console.log('success')
//       }
//     } catch (error) {
//       console.log(error)
//     }

//   }
//   return (
//     <>
//       <section className="form"  id='contactus' onSubmit={handleSubmit(onSubmit)}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 contact-image">
//             <img src={images.contact} className="img-fluid" />
//             </div>
//             <div className="col-md-6">
//             <h2 className="head-text">Lets talk</h2>

//               <form className="form-info">
//                 <div className="mb-3">
//                   <label for="exampleInputName" className="form-label" name="name">Name</label>
//                   <input type="text" {...register('name', {
//                     required: {
//                       value: true,
//                       message: "You must enter your name"
//                     },
//                     minLength: {
//                       value: 2,
//                       message: "name cannot be less than 2"
//                     },
//                     pattern: {
//                       pattern: /^[A-Za-z]+$/

//                     },
//                     maxLength: {
//                       value: 75,
//                       message: "name cannot be more than 75"
//                     },

//                   })} className="form-control" id="exampleInputName" aria-describedby="NameHelp" required />

//                   <span id="nameerror" className="text-danger font-weight-bold" ></span>
//                   {errors.name && <p>Please check the name , name cannot be less than 2 </p>}

//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
//                   <input type="email" {...register("email", {
//                     required: {
//                       value: true,
//                       message: "You must enter your Email"
//                     }, minLength: {
//                       value: 10,
//                       message: "Email cannot be less than 5"
//                     },
//                     pattern: {
//                       pattern: /^[A-Za-z]+$/

//                     },
//                     maxLength: {
//                       value: 75,
//                       message: "Email cannot be more than 75"
//                     },
//                   })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
//                   <span id="emailerror" className="text-danger font-weight-bold" ></span>
//                   {errors.email && <p>Please check the Email</p>}

//                 </div>
//                 <div className="mb-3">
//                   <label for="message" className="form-label" name="message" >Message</label>
//                   <textarea type="text"{...register("message")} className="form-control" id="exampleInputMessage" rows="4" required></textarea>
//                 </div>
//                 <button type="submit" onClick={(e) => { handleSubmit(e) }} className="btn btn-primary form-control">Send Message</button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }
// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg',
// );



import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { images } from '../../constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppWrap, MotionWrap } from '../../wrapper/index';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        'service_audne95',
        'template_wrjablc',
        templateParams,
        process.env.REACT_APP_USER_ID,
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="form ContactForm" id='contactus' onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="container app__wrapper app__flex">
        <div className='row address-display'>
        
        </div>
        <div className="row">
          <div className="col-md-6 contact-image">
            <img src={images.contact} className="img-fluid mt-5" />
          </div>
          <div className='col-6'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
              <h2 className="head-text">Contact Us</h2>
                <div className='formRow'>
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label" name="name">Name</label>
                    <input type="text" {...register('name', {
                      required: { value: true, message: 'Please enter your name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })} className="form-control" id="exampleInputName" aria-describedby="NameHelp" required />

                  </div>
                  {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" name="email" >Email address</label>
                    <input type="email" {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputtext" className="form-label" name="text" >Subject </label>
                  <input type="email" {...register('subject', {
                    required: { value: true, message: 'Please enter a subject' },
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters'
                    }
                  })} className="form-control" id="exampleInputtext" aria-describedby="textHelp" required />
                  {errors.email && (
                    <span className='errorMessage'>Please enter a subject</span>
                  )}
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label" name="message" >Message</label>
                  <textarea type="text"  {...register('message', {
                    required: true
                  })} className="form-control" id="exampleInputMessage" rows="4" required></textarea>
                </div>
                <button className='"btn btn-primary form-control' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
        <div className='container'>
          <div className='row'>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(ContactForm, 'app__skills'),
  'contact',
  'app__primarybg',
);