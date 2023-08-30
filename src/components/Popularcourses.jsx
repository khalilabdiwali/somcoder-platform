import PaymentPage from './PaymentPage'
import { Link } from "react-router-dom";
const PopularCourse = ({ coursepic, coursename,lectpic ,lecname, numberlessons,coursefee,enrolnow }) => {
    return (
        
        <div class="cursor-pointer border-1 hover:bg-slate-900 hover:translate-y-3 text-white rounded-lg shadow-md p-4  transition duration-500 ease-in-out">
          <img class="w-full h-auto mb-4 md:mb-0 md:mr-4 md:max-w-none md:max-h-none md:w-[50px] md:h-[50px]" src={coursepic} alt="Introduction Python" />
          <h2 class="text-2xl mr-0 ml-0 mt-5 font-bold text-center md:text-left mb-2">{coursename}</h2>
          <div class="flex items-center mb-2">
            <i class="fas fa-star text-yellow-500 mr-1"></i>
            <i class="fas fa-star text-yellow-500 mr-1"></i>
            <i class="fas fa-star text-yellow-500 mr-1"></i>
            <i class="fas fa-star text-yellow-500 mr-1"></i>
            <i class="fas fa-star text-yellow-500 mr-1"></i>
            <label class="text-gray-600">(5.0)</label>
          </div>
          <div class="flex items-center mb-2">
            <img class="rounded-full w-6 h-6 mr-2" src={lectpic} alt="Khalil Abdiwali" />
            <h3 class="text-sm font-medium">{lecname}</h3>
          </div>
          <h4 class="text-sm font-medium mb-2">{numberlessons}</h4>
          <h2 class="text-xl font-bold mb-2">{coursefee}</h2>
          <button class="text-teal-600 hover:text-white hover:bg-teal-600  border-teal-500 border-2  font-bold py-2 px-4 w-full rounded mt-4"><Link to="/PaymentPage">{enrolnow}</Link></button>
          </div>
         
    );
  };
  
const Popular = () => {
  const PopularData = [
    {
      coursename: 'Inroduction Python',
      coursepic: 'images/o2.png',
      lectpic:'images/k1.png',
      lecname:'Khalil Abdiwali',
      numberlessons: '50 lectures (160 hrs)',
      coursefee:'$100 All courses / $15 per month',
      enrolnow:'Enroll Now'
    },
    {
        coursename: 'Flutter ',
        coursepic: 'images/o3.png',
        lectpic:'images/feysal2.jpeg',
        lecname:'Feysal Abdi',
        numberlessons: '70 lectures (160 hrs)',
        coursefee:'$120 All courses / $15 per month',
        enrolnow:'Enroll Now'
      },
      {
        coursename: 'Advanced React ',
        coursepic: 'images/o4.png',
        lectpic:'images/sade.jpeg',
        lecname:'Mohamed Abdirisaq',
        numberlessons: '30 lectures (160 hrs)',
        coursefee:'$200 All courses / $15 per month',
        enrolnow:'Enroll Now'
      },
      {
        coursename: 'HTML&CSS ',
        coursepic: 'images/o5.png',
        lectpic:'images/abdixakim.jpeg',
        lecname:'Abdixakim Adan',
        numberlessons: '40 lectures (160 hrs)',
        coursefee:'$150 All courses / $15 per month',
        enrolnow:'Enroll Now'
      },
      {
        coursename: 'Advanced Java ',
        coursepic: 'images/o6.png',
        lectpic:'images/usaame.jpeg',
        lecname:'Usame Mohamud',
        numberlessons: '70 lectures (160 hrs)',
        coursefee:'$250 All courses / $15 per month',
        enrolnow:'Enroll Now'
      },
      {
        coursename: 'Adavanced C Sharp ',
        coursepic: 'images/o12.png',
        lectpic:'images/t1.jpg',
        lecname:'Ismail jamal',
        numberlessons: '20 lectures (160 hrs)',
        coursefee:'$120 All courses / $15 per month',
        enrolnow:'Enroll Now'
      },
  
  ];

  return (
    <div className="container mx-auto py-6">
    <h1 class="text-center font-semibold text-4xl text-white p-3 mb-8">Explore Our Popular Online Courses</h1>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {PopularData.map((data, index) => (
          <div key={index} className="px-6 py-8">
            <PopularCourse
              coursename={data.coursename}
              coursepic={data.coursepic}
              lectpic={data.lectpic}
              lecname={data.lecname}
              numberlessons={`${data.numberlessons} lessons`}
              coursefee={data.coursefee}
              enrolnow={data.enrolnow}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular;