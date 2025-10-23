"use client";

import { useState } from "react";
import Link from "next/link";

export default function CoursesServicesSection() {
  const [selectedCourse, setSelectedCourse] = useState("All");

  const courses = [
    {
      category: "Artificial Intelligence, Data & Automation",
      items: [
        { 
          id: "01", 
          title: "Artificial Intelligence & Machine Learning with Python", 
          desc: "Learn AI algorithms and Python tools to build intelligent systems.",
          link: "/aiml"
        },
        { 
          id: "02", 
          title: "Data Science & Analytics with Python", 
          desc: "Analyze and visualize data to extract actionable insights.",
          link: "/datascience" 
        },
        { 
          id: "03", 
          title: "Python for Development & Automation", 
          desc: "Automate tasks and develop applications using Python.",
          link: "/python" 
        },
      ],
    },
    {
      category: "Web Development",
      items: [
        { 
          id: "04", 
          title: "Full Stack Web Development (MERN / MEAN)", 
          desc: "Build end-to-end web applications with modern JS frameworks.",
          link: "/fullstack" 
        },
        { 
          id: "05", 
          title: "Full Stack Java Development (Spring Boot + React / Angular)", 
          desc: "Develop enterprise-grade applications using Java & front-end frameworks.",
          link: "/java" 
        },
        { 
          id: "06", 
          title: "Full Stack Python Development (Django / Flask + React)", 
          desc: "Create robust web apps using Python backend and React frontend.",
          link: "/pythonfullstack" 
        },
        { 
          id: "07", 
          title: "Frontend Development (HTML, CSS, JavaScript, React)", 
          desc: "Design responsive and interactive user interfaces.",
          link: "/frontend" 
        },
        { 
          id: "08", 
          title: "Backend Development (Node.js, Express, MongoDB / MySQL)", 
          desc: "Build scalable server-side applications and APIs.",
          link: "/backend" 
        },
      ],
    },
    {
      category: "Mobile App Development",
      items: [
        { id: "09", title: "Flutter App Development", desc: "Create cross-platform mobile apps using Flutter.", link: "/flutter" },
        { id: "10", title: "React Native App Development", desc: "Build mobile apps for iOS & Android using React Native.", link: "/react" },
        { id: "11", title: "Swift App Development (iOS)", desc: "Develop native iOS apps with Swift programming.", link: "/swiftapp" },
        { id: "12", title: "Kotlin App Development (Android)", desc: "Develop native Android apps using Kotlin.", link: "/kotlinapp" },
      ],
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      items: [
        { id: "13", title: "DevOps Engineer Program", desc: "Learn CI/CD, Docker, and modern DevOps practices.", link: "/courses/devops" },
        { id: "14", title: "Cloud Computing Fundamentals", desc: "Understand cloud services and architecture for scalable apps.", link: "/courses/cloud-fundamentals" },
        { id: "15", title: "Docker, Kubernetes & CI/CD Tools", desc: "Manage containerized applications and automate deployment pipelines.", link: "/courses/docker-k8s" },
      ],
    },
    {
      category: "Software Testing & Quality Assurance",
      items: [
        { id: "16", title: "Manual & Automation Testing", desc: "Ensure software quality with manual and automated tests.", link: "/courses/manual-automation-testing" },
        { id: "17", title: "Selenium & API Testing (Advanced QA)", desc: "Automate web and API testing with industry-standard tools.", link: "/courses/selenium-api" },
      ],
    },
    {
      category: "Design & Creative Technologies",
      items: [
        { id: "18", title: "UI/UX Design Fundamentals (Figma & Adobe XD)", desc: "Design engaging interfaces and enhance user experiences.", link: "/courses/ui-ux" },
        { id: "19", title: "Graphic Design (Photoshop, Illustrator, Canva Pro)", desc: "Create visual content for digital and print media.", link: "/courses/graphic-design" },
      ],
    },
    {
      category: "Internship & Corporate Programs",
      items: [
        { id: "20", title: "Real-Time Project Internship (Web/App/AI)", desc: "Work on live projects to gain practical experience.", link: "/courses/internship" },
        { id: "21", title: "Corporate Upskilling (Custom Modules)", desc: "Enhance your skills with industry-oriented programs.", link: "/courses/corporate-upskilling" },
      ],
    },
  ];

  const topBarItems = ["All", ...courses.map((c) => c.category)];

  const filteredCourses =
    selectedCourse === "All"
      ? courses.flatMap((c) => c.items)
      : courses.find((c) => c.category === selectedCourse)?.items || [];

  return (
    <section className="bg-gradient-to-b from-[#000617] to-[#011c4f] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="text-green-400 text-sm uppercase tracking-wider mb-2">▶ WHAT WE DO</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">All Courses</h2>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {topBarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedCourse(item)}
              className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 ${
                selectedCourse === item
                  ? "bg-green-400 text-black"
                  : "bg-[#0b1638]/60 hover:bg-[#0f245c]"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-[#0b1638]/60 text-white rounded-lg shadow-lg p-6 flex flex-col gap-4 hover:bg-[#0f245c] transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-white">{course.title}</h4>
            <p className="text-sm text-gray-300">{course.desc}</p>

            <div className="flex gap-4 mt-2">
              <Link
                href={course.link}
                className="bg-transparent border border-green-400 text-green-400 font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-green-400 hover:text-black inline-block text-center"
              >
                Learn More
              </Link>

              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-yellow-500">
                Enroll Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
