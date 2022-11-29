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
  const onSubmit = async (data) => {
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
        'f-wF3beyjOeTzJvVs',
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6'>
            <img src={images.ContactUS} className="img-fluid mt-5" />
          </div>
          <div className='col-xl-6'>
            <div className='contactForm'>
              <h2 className="head-text">Contact Us</h2>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
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
                <button className='"btn contactus-button form-control' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(ContactForm, 'app__skills'),
  'contact',
  'app__primarybg',
);