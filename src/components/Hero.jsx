import React, { useState } from "react";
function Hero() {
  return (
  
    <div className="bg-slate-800 h-screen">

      <section class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:px-8 lg:px-16 xl:px-20">
  <div class="flex flex-col justify-center p-4 md:p-10">
    <h2 class="text-lg md:text-xl font-bold m-4 text-white">WELCOME TO SOMCODERS</h2>
    <h2 class="text-5xl md:text-5xl font-bold m-4 text-white">Best Online Education<br />Expertise</h2>
    <p class="text-lg md:text-xl font-semibold m-4 text-white">Far far away behind the world mountains, far from the countries Somalia <br />and Consonantia, there live the blind texts.</p>
    <div class="flex">
      <button class="bg-teal-700 hover:bg-teal-900 m-3 px-5 py-3 font-semibold text-white">
        GET STARTED NOW <i class="fas fa-long-arrow-alt-right"></i>
      </button>
      <button class="bg-white m-3 px-5 py-3 font-semibold text-teal-500">
        VIEW COURSE <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </div>
  </div>
  <div class="flex justify-center hidden md:block">
    <img src="images/elearning.png" alt="" class="w-full md:max-w-none"/>
  </div>
</section>
    </div>
    
  );
}

export default Hero;