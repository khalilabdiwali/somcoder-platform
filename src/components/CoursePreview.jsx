import React, { useState } from "react";

const courseData = [
  {
    title: "Chapter 1",
    length: "Introduction Lessons",
    lessons: [
      { title: "Basic of html ", time: "10 min", media: true },
      { title: "Vs code install ", time: "15 min", media: false },
      { title: "hello world ", time: "20 min", media: true },
    ],
  },
  {
    title: "Chapter 2",
    length: "Headings",
    lessons: [
      { title: "Lesson 1", time: "10 min", media: true },
      { title: "Lesson 2", time: "15 min", media: false },
    ],
  },
  {
    title: "Chapter 3",
    length: "Lists anchor",
    lessons: [
      { title: "Lesson 1", time: "10 min", media: true },
      { title: "Lesson 2", time: "15 min", media: false },
    ],
  },
  {
    title: "Chapter 4",
    length: "Header Nav",
    lessons: [
      { title: "Lesson 1", time: "10 min", media: true },
      { title: "Lesson 2", time: "15 min", media: false },
    ],
  },
];

const CourseCurriculum = () => {
  const [openChapters, setOpenChapters] = useState([]);

  const handleChapterToggle = (index) => {
    setOpenChapters((prev) => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
    <div className="bg-gray-100 ml-14 w-7/12 rounded-lg min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mt-5 mb-4">Course Curriculum</h2>
        <h1 className="text-center m-5">We’re committed to changing the future of learning for the better and provide the tools and skills to teach what you love.</h1>
        {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        {courseData.map((chapter, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-400 pb-2"
              onClick={() => handleChapterToggle(index)}
            >
              <h3 className="text-2xl font-semibold">
                {chapter.title}:{" "}
                <span className="text-gray-400">{chapter.length}</span>
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform transform ${
                  openChapters.includes(index) ? "rotate-90" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {openChapters.includes(index) && (
              <ul className="list-disc pl-6 mt-2">
                {chapter.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-center my-2">
                    {lesson.media ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm2 9.228V7.772a.5.5 0 0 0-.787-.416l-4.5 3.228a.5.5 0 0 0 0 .832l4.5 3.228a.5.5 0 0 0 .787-.416z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm2 9.228V7.772a.5.5 0 0 0-.787-.416l-4.5 3.228a.5.5 0 0 0 0 .832l4.5 3.228a.5.5 0 0 0 .787-.416z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <p className="text-lg">{lesson.title}</p>
                    <span className="text-gray-500 ml-auto">{lesson.time}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      
    </div>
    
    </>
  );
};

export default CourseCurriculum;