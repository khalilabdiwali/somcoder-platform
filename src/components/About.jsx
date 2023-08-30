import React from 'react'
import Prog from './Progress'
function About() {
  return (
    
    <div className="bg-slate-800">
    <div className=" mx-auto p-4 md:p-8 bg-slate-800 text-white "> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          <img src='./images/About.png' alt="My Image" className="w-full h-[615px] mt-7" ></img>
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-2xl md:text-3xl font-bold  mt-5 mb-4 md:mb-7 text-teal-600">
            LEARN ANY THING
          </h1>
          <h1 className="text-lg md:text-6xl font-semibold mb-4 md:mb-7">
            Benefits About Online Learning Expertise
          </h1>
          <div className="mt-7">
           
          <div className="flex flex-col items-center mb-4 hover:bg-teal-600 hover:text-white p-4 rounded-lg">
              <div className="flex items-center">
                  <i className="text-4xl fas fa-book m-2"></i>
                  <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                      Online Courses
                  </h1>
                  <p className="mb-4">
                      A paragraph from παράγραφος 'to write beside' is a
                      self-contained unit of discourse in writing dealing with a
                      particular point or idea.
                  </p>
                  </div>
              </div>
              </div>


          <div className="flex flex-col items-center mb-4 hover:bg-teal-600 hover:text-white p-4 rounded-lg">
              <div className="flex items-center">
              <i className="text-4xl fas fa-certificate m-2"></i>
                  <div>
              <h1 className="text-2xl md:text-3xl font-bold m-2">
                Earn A Certificate
              </h1>
                  <p className="mb-4">
                      A paragraph from παράγραφος 'to write beside' is a
                      self-contained unit of discourse in writing dealing with a
                      particular point or idea.
                                      </p>
                      </div>
                  </div>
                  </div>

              <div className="flex flex-col items-center mb-4 hover:bg-teal-600 hover:text-white p-4 rounded-lg">
              <div className="flex items-center">
              <i className="text-4xl fas fa-user-tie m-2"></i>
                  <div>
              <h1 className="text-2xl md:text-3xl font-bold m-2">
              Learn With Experts
              </h1>
                  <p className="mb-4">
                      A paragraph from παράγραφος 'to write beside' is a
                      self-contained unit of discourse in writing dealing with a
                      particular point or idea.
                  </p>
                  </div>
              </div>
              </div>
           
          </div>
        </div>
      </div>
      
  
      
 </div>
 <Prog/>
    </div>
  )
}

export default About