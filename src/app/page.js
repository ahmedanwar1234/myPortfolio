import About from '@/components/About'
import Contact from '@/components/Contact'
import Cursor from '@/components/Cursro'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import React from 'react'

const page = () => {
  return (
    <div className=' px-2 overflow-hidden  bg-neutral-950   container mx-auto flex  flex-col  items-center'>


  <Header/>
<div className=' h-dvh'>
<Hero/>
</div>
      <About/>
      <Project/>
      <Contact/>
      <Cursor>
        
      </Cursor>
    </div>
    
  )
}

export default page
