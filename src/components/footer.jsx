import React from 'react'

function footer() {
  return (
    <div>
         <div className='mt-7'>
         <section className="bg-slate-900 py-7">
  <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
    <div className="left md:w-1/2 lg:w-2/3">
      <h1 className="text-4xl md:text-3xl text-white font-bold mb-4 md:mb-8">
        Newsletter - Stay tuned and get the latest updates
      </h1>
      <span className="text-lg md:text-xl text-white mb-4 md:mb-8 block">
        Far far away, behind the word mountains
      </span>
    </div>
    <div className="right md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
      <div className="flex items-center rounded-md bg-white">
        <input
          type="text"
          placeholder="Enter email address"
          className="py-3 px-4 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button className="bg-slate-400 text-white py-3 px-6 rounded-r-md hover:bg-slate-500 transition-colors">
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</section>
     <div class="bg-slate-800 py-4 px-6 md:px-16">
     
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
    {/* <!-- Logo --> */}
    <div class="col-span-1 md:col-span-2 flex items-center">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-4xl font-bold text-white">SOMCODERS</h1>
        <span class="text-teal-600">ONLINE EDUCATION &amp; LEARNING</span>
        <p class="mt-3 text-sm text-white md:text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        <div className="flex  p-4 md:p-8 items-center mr-4 md:mr-10">
        <i className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center  text-white bg-teal-600 p-2 md:p-3 m-2 rounded-full bg-teal-100 fab fa-facebook-f icon"></i>
        <i className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center  text-white bg-teal-600 p-2 md:p-3 m-2 rounded-full bg-teal-100 fab fa-instagram icon"></i>
        <i className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center  text-white bg-teal-600 p-2 md:p-3 m-2 rounded-full bg-teal-100 fab fa-twitter icon"></i>
        </div>
      </div>
    </div>

    {/* <!-- Links --> */}
    <div class="col-span-1 md:col-span-1">
      <ul class="flex flex-col space-y-2">
        <li class="text-lg font-medium text-white mb-2 md:mb-4">Explore</li>
        <li><a href="#" class="text-white hover:text-teal-600">About us</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Services</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Courses</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Blog</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Contact us</a></li>
      </ul>
    </div>

    {/* <!-- Contact --> */}
    {/* <div class="col-span-1 md:col-span-1 flex items-center">
      <i class="fas fa-phone text-teal-600 mr-3"></i>
      <h2 class="text-white">6277272</h2>
    </div> */}

    {/* <!-- Quick Links --> */}
    <div class="col-span-1 md:col-span-1">
      <ul class="flex flex-col space-y-2">
        <li class="text-lg font-medium text-white mb-2 md:mb-4">Quick Links</li>
        <li><a href="#" class="text-white hover:text-teal-600">Feedback</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Privacy</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Terms&amp;conditions</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Pricing</a></li>
        <li><a href="#" class="text-white hover:text-teal-600">Contact us</a></li>
      </ul>
    </div>
  
  </div>
</div>
     </div>
     <footer>
      <p className='text-center p-7 bg-slate-900 text-white'>&copy; 2023 All rights reserved by Somcoders</p>
     </footer>
    </div>
  )
}

export default footer