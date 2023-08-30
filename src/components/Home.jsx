import React from 'react'
import Courses from './Courses'
import Hero from './Hero'
import About from './About'
// import CourseCurriculum from './CoursePreview'
function Home() {
  return (
    <div >
      <Hero />
      <About />
      {/* <CourseCurriculum/> */}
      <Courses />
    </div>
  )
}

export default Home