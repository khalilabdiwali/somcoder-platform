import React from 'react'

const Pricing = () => {
    const myImage =   "images/pricing.jpg";
   
    
  return (
    <div>
    <div class="max-w-6xl mx-auto m-20 " >
            
  <h1 className='text-center font-bold text-white text-3xl'>CHOOSE A PLAIN</h1>

    <div class="flex flex-col shadow-lg rounded-lg md:flex-row px-2 mt-10 md:px-0">
        <div class="w-full md:w-1/3 h-30 text-white   rounded-lg hover:bg-teal-700  shadow hover:shadow-xl transition duration-100 ease-in-out px-6 md:mr-4  md:mb-0">
            <h3 class="text-white text-center font-bold mt-8 text-lg">Basic</h3>
            <p class="text-white text-center   mt-1"><span class="font-bold text-center  text-white text-4xl">$29</span> /Month</p>
            <p class="text-sm text-white text-center  mt-2">per user, per month</p>
            <div class="text-sm font-semibold py-5 text-white mt-4">
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>$10 per user, per month</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span> Up to 50 users</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>Limited course offerings</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>Limited features</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span> Email support</p>
            </div>
            <button class="w-full text-white border border-white rounded-full hover:bg-slate-900 hover:text-white hover:shadow-xl transition duration-150 ease-in-out font-bold py-4 mt-4">Start Free</button>
        </div>
        <div class="w-full md:w-1/3   rounded-lg text-white bg-teal-700 shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            {/* <h3  className="bg-green-500 text-center  text-white px-5 text-2xl mt-3 py-2 mt-3 rounded-full ml-20 mr-20">Best Value</h3> */}
            <h3 class="text-lg text-white text-center font-semibold mt-2">Standard</h3>
            <p class="text-sm text-white text-center font-semibold  mt-2">per user, per month</p>
   
            <p class="mt-1"><span class="font-bold text-white text-4xl">$99</span> /Month</p>
            <p class="text-sm text-white opacity-75 mt-2">per user, per month.</p>
            <div class="text-sm font-semibold  text-white mt-4">
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>$25 per user, per month</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>Up to 500 users</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>More course offerings</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>More features, such as quizzes and assignments</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span> Email and phone support</p>
            </div>
            <button class="w-full text-slate-900 font-bold bg-white border border-green-500 rounded-full hover:bg-slate-900 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Start Standard</button>
        </div>
        <div class="w-full md:w-1/3 hover:bg-teal-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6  md:mb-0">
            <h3 class="text-white text-center font-bold text-lg">Platinum</h3>
            <p class="text-white text-center mt-1"><span class="font-bold text-center text-white text-4xl">$79</span> /Month</p>
            <p class="text-sm text-white opacity-75 text-center  mt-2">2 user, per month.</p>
            <div class="text-sm font-semibold py-5 text-white mt-4">
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>Custom pricing based on needs</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span> Customizable course offerings</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>Advanced features, such as integrations </p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span>Personal Help Support</p>
                <p class="my-2"><span class="fa fa-check-circle mr-2 ml-1"></span> Unlimited users</p>
            </div>
            <button class="w-full text-white  border border-white rounded-full hover:bg-slate-800 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 font-bold mt-4">Start Platinum</button>
        </div>
    </div>
    </div>
    <h1 className='text-center font-bold text-white '>FAQS QUESTIONS</h1>
    <div class="max-w-6xl mx-auto mt-10">
  <details class="border rounded-lg shadow-md mb-4">
    <summary class="bg-teal-500 cursor-pointer text-white font-semibold py-3 px-5">What types of courses are offered on your e-learning website?</summary>
    <div class="px-5 py-3 text-white">
      Our e-learning website offers a wide variety of courses in different subjects, including business, technology, art, language, and more. We work with top instructors and experts to provide engaging, high-quality content that meets the needs of both individuals and organizations.
    </div>
  </details>

  <details class="border rounded-lg shadow-md mb-4">
    <summary class="bg-teal-500 cursor-pointer text-white font-semibold py-3 px-5">How do I access my courses?</summary>
    <div class="px-5 py-3 text-white">
      Once you sign up and enroll in a course, you can access it through your account dashboard. From there, you can view course materials, watch video lectures, participate in discussions, and complete assignments and quizzes.
    </div>
  </details>

  <details class="border rounded-lg shadow-md mb-4">
    <summary class="bg-teal-500 cursor-pointer text-white font-semibold py-3 px-5">What kind of support do you offer to students?</summary>
    <div class="px-5 py-3 text-white">
      We offer a variety of support options to our students, including email and phone support, as well as access to a knowledge base and community forums. Our support team is available to help with any technical or content-related issues you may encounter while taking our courses.
    </div>
  </details>

  <details class="border rounded-lg shadow-md mb-4">
    <summary class="bg-teal-500 cursor-pointer text-white font-semibold py-3 px-5">Do you offer certificates for completing courses?</summary>
    <div class="px-5 py-3 text-white">
      Yes, we offer certificates of completion for many of our courses. These certificates can be used to demonstrate your skills and knowledge to employers or other stakeholders. To earn a certificate, you must complete all required coursework and assessments for a given course.
    </div>
  </details>

  <details class="border rounded-lg shadow-md mb-4">
    <summary class="bg-teal-500 cursor-pointer text-white font-semibold py-3 px-5">Can I access the course materials offline?</summary>
    <div class="px-5 py-3 text-white">
      While our courses are designed to be accessed online, some course materials can be downloaded and saved for offline viewing. This includes lecture notes, slides, and other supplementary materials. However, in order to complete assignments and quizzes, you will need to be connected to the internet.
    </div>
  </details>
</div>
    </div>
  )
}

export default Pricing