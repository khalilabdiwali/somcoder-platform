// import Tijaabo from "./Tijaabo";
const Tijaabo = ({ coursepic, coursename, numberlessons }) => {
    return (
      <div className="text-center bg-slate-900 hover:bg-slate-900 hover:text-white shadow-md rounded-lg px-6 py-8">
        <img className="mx-auto h-16 w-16" src={coursepic} alt="UI/UX Design Courses"></img>
        <h3 className="text-xl text-white font-semibold text-center mt-4">{coursename}</h3>
        <button className="hover:bg-white py-2 px-4 rounded text-lg font-semibold text-teal-600 text-center mx-auto items-center mt-2">{numberlessons}</button>
      </div>
    );
  };
  
const Othercourses = () => {
  const TijaaboData = [
    {
      coursename: 'Python',
      coursepic: 'images/o1.png',
      numberlessons: '25'
    },
    {
      coursename: 'React',
      coursepic: 'images/o2.png',
      numberlessons: '20'
    },
    {
      coursename: 'JavaScript',
      coursepic: 'images/o3.png',
      numberlessons: '30'
    },
    {
      coursename: 'HTML/CSS',
      coursepic: 'images/o4.png',
      numberlessons: '15'
    },
    {
      coursename: 'Node.js',
      coursepic: 'images/o5.png',
      numberlessons: '18'
    },
    {
      coursename: 'MongoDB',
      coursepic: 'images/o6.png',
      numberlessons: '12'
    },    
  ];

  return (
    <div className="container mx-auto py-6">
    <div className="m-9 text-white">
           <h1 className='text-center text-teal-500 font-bold text-lg'>COURSES</h1>
           <h3 className='text-5xl font-semibold text-center'>Browse Our Online Courses</h3>
         </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-4">
        {TijaaboData.map((data, index) => (
          <div key={index} className="px-6 py-8">
            <Tijaabo
              coursename={data.coursename}
              coursepic={data.coursepic}
              numberlessons={`${data.numberlessons} lessons`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Othercourses;