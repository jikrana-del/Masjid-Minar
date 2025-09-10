import React, { useEffect, useState } from 'react'
import style from '../../css/Contact.module.css'
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

function Contact() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [secsessMessage, setSecsessMessage] = useState(false);

  useEffect(() => {
    setFirstNumber(Math.floor(Math.random() * 30) + 1)
    setLastNumber(Math.floor(Math.random() * 9) + 1)

  }, [])

  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
    captcha: '',
  })

  const HendelSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (parseInt(formData.captcha) !== firstNumber + lastNumber) {
      newErrors.captcha = 'Captcha is incorrect'
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return;
    }
    setSecsessMessage(true)
  }
  const HendelChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors({ ...errors, [e.target.name]: '' });
  }


  return (

    <>

      <section>
        <section className={`${style.hero_contact}`}>
          <div className={`${style.contain}  max-width flex`}>
            <h5>Looking For Best Masjid Minar</h5>
            <h1>Let's Connect</h1>
            <p>Looking to enhance your masjid with beautifully crafted minars, Gumbads, or custom Islamic architectural elements? We are here to help!</p>
          </div>
        </section>
        <section className={`${style.contain_section} max-width`}>

          {!secsessMessage ? <section className={`${style.form_section}`}>
            <form onSubmit={(e) => HendelSubmit(e)} >
              <h3> <strong>Get in Touch</strong></h3>
              <p>Please fill out and submit the form below. Our team will be in touch with you promptly.
              </p>
              <div className={`${style.input_contain}`}>
                <div>
                  <input type="text"
                    name="firstName"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={HendelChange}
                    autoComplete="off"
                    style={{ border: `${errors.firstName ? '1px solid red' : ''}` }}
                  />
                  {errors.firstName && <p className={style.errors}>{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={HendelChange}
                    autoComplete="off"
                    style={{ border: `${errors.lastName ? '1px solid red' : ''}` }}

                  />
                  {errors.lastName && <p className={style.errors}>{errors.lastName}</p>}
                </div>

              </div>
              <div className={`${style.input_contain}`}>
                <div>
                  <input
                    type="number"
                    name="contactNumber"
                    placeholder='Contact Number'
                    value={formData.contactNumber}
                    onChange={HendelChange}
                    autoComplete="off"
                    style={{ border: `${errors.contactNumber ? '1px solid red' : ''}` }}

                  />
                  {errors.contactNumber && <p className={style.errors}>{errors.contactNumber}</p>}

                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={HendelChange}
                    autoComplete="off"
                    style={{ border: `${errors.email ? '1px solid red' : ''}` }}

                  />
                  {errors.email && <p className={style.errors}>{errors.email}</p>}
                </div>

              </div>
              <div>
                <div>
                  <textarea
                    placeholder='Message'
                    name="message"
                    value={formData.message}
                    onChange={HendelChange}
                    autoComplete="off"
                    style={{ border: `${errors.message ? '1px solid red' : ''}` }}

                  />
                  {errors.message && <p className={style.errors}>{errors.message}</p>}
                </div>

              </div>
              <div className={`${style.input_contain}`}>
                <div>
                  <div>
                    <strong>{firstNumber} + {lastNumber} = </strong>

                    <span ><input
                      type="text"
                      max={50}
                      name="captcha"
                      id='number'
                      value={formData.captcha}
                      onChange={HendelChange}
                      autoComplete='off'
                      style={{ border: `${errors.captcha ? '1px solid red' : ''}` }}

                    /></span>
                    {errors.captcha && <p className={style.errors}>{errors.captcha}</p>}

                  </div>

                </div>
                <div><button type='submit'>SEND INQUIRY</button></div>
              </div>
            </form>
          </section> : (
            <section className={`${style.form_section}`}>
              <form>
                <h3> <strong>Get in Touch</strong></h3>
                <p>Please fill out and submit the form below. Our team will be in touch with you promptly.</p>
                <p>Thank you for reaching out to us. We will get back to tou shortly.</p>
                  <button type='submit'><FaAngleLeft /> Go back to form</button> 
              </form>
            </section>

          )




          }
          <section>
            <div className={` ${style.address_contain}`}>
              <h2>Harmain Minar</h2>
              <p>Specialize in high-quality masjid minar manufacturing with a commitment to traditional design and lasting durability.</p>
              <p> <strong>Address : </strong> <span>Western Express Highway Vasai East - 401208 Mumbai (Maharashtra-India)</span></p>
              <p><strong>Contacts : </strong> 98812 90998 / 98608 36033 / 99605 77866</p>
              <p> <strong>Email : </strong> <span>dauvahanif786@gmail.com</span></p>
            </div>
          </section>
        </section>


        <section>

          <div style={{width:"90%",
           
            
          height:"400px",
            margin:"0 auto",
            borderRadius:"5px",
            overflow:"hidden",
            boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
          }}>
            <iframe
            style={{width:"100%",
              height:"100%"

            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.458937171459!2d72.87329527419377!3d19.435770140581624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a98315f7224b%3A0x3cad3abca0691728!2sHARMAIN%20PRECAST%20INDUSTRIES%20-%20Readymade%20Masjid%20Minar%2C%20RCC%20Masjid%20Minar!5e0!3m2!1sen!2sin!4v1755912526730!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.458937171459!2d72.87329527419377!3d19.435770140581624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a98315f7224b%3A0x3cad3abca0691728!2sHARMAIN%20PRECAST%20INDUSTRIES%20-%20Readymade%20Masjid%20Minar%2C%20RCC%20Masjid%20Minar!5e0!3m2!1sen!2sin!4v1755912526730!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </section>
      </section>
    </>
  )
}

export default Contact