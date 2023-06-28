import React from 'react'
import Contact from './Contact'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className=" flex items-start justify-between p-10 bg-base-200 text-base-content">
          <div className='flex flex-col gap-4'>  
            <span className="footer-title leading-10">Find Me Here:</span> 
            <div className='flex gap-4 items-center link link-hover'>
              <i className='text-2xl'><FaLinkedin/></i>
              <a href='https://www.linkedin.com/in/julian-naranjo-ramos-026747247/' className=''>LinkedIn</a>
            </div>

            <div className='flex gap-2 items-center link link-hover'>
              <i className='text-2xl'><FaGithub/></i>
              <a href='https://github.com/Juleslazarus'>Github</a>
            </div>

          </div> 
          <div className='contactForm'>
            <span className="footer-title">Contact Me Here:</span> 
            <div className="form-control w-80">
              <form action="https://formsubmit.co/juliannaranjoramos@gmail.com" method="POST" className='flex flex-col gap-4'>
                <label>Full Name</label>
                <input className='p-2 rounded-md input input-outline input-primary' type="text" name="name" placeholder='John Doe' required/>
                <label>Email Address</label>
                <input className='p-2 rounded-md input input-outline input-primary' type="email" name="email" placeholder='Example@domain.com' required/>
                <label>Your Message</label>
                <textarea className='rounded-md border-2 border-primary bg-base-200 resize-y active:bg-primary'></textarea>
                <button className=' rounded-md btn btn-primary btn-outline' type="submit">Send</button>
              </form>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer