import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <div id='contact' className='  w-full mt-20'>
      <div>
        <div className='  flex flex-col  items-center  gap-4'>
    <h2 className=' max-md:text-[14px]'>
        GET TO KNOW ME
    </h2>
    <h1  className=' text-4xl md:text-5xl'>Contact Me</h1>
</div>



{/* card */}
<div  className=' w-full gap-5  mt-20 flex flex-col items-center border-[0.5px] border-gray-600 rounded-2xl p-5'>

  <div className='flex  w-full justify-center items-center gap-6'>

  {/* Mail button */}
  <a
    href="mailto:yourmail@example.com"
    className=' w-full bg-[rgba(0,0,0,0)] border border-gray-600 px-6 py-2 rounded-4xl flex items-center gap-2'
  >
    <MdEmail size={24} />
    <span>Email</span>
  </a>

  {/* WhatsApp button */}
  <a
    href="https://wa.me/201234567890" // ← استبدل برقمك
    target="_blank"
    rel="noopener noreferrer"
    className='border w-full  border-gray-600 px-6 py-2 rounded-4xl flex items-center gap-2'
  >
    <FaWhatsapp size={24} color="#25D366" />
    <span>WhatsApp</span>
  </a>

</div>

    <p>Or send a message</p>

    <form action="" className=' gap-5 w-full  flex flex-col'>
        <input className=' outline-none border-[0.5px] border-gray-600 p-2 rounded-2xl' type="email" placeholder='Your Email' />
<textarea
  className='h-32 w-full outline-none border border-gray-600 p-2 rounded-2xl resize-none'
  placeholder='Your Message'
/>        <button className='  border-gray-600 rounded-2xl border-[0.5px] w-full py-2'>Send Message</button>
    </form>

</div>
      </div>
    </div>
  )
}

export default Contact
