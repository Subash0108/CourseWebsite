"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AiHeroSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      bgImage: "/bg2.jpg",
      title: "Artificial Intelligence",
      description:
        "Explore the world of AI — from machine learning to neural networks. Build intelligent systems that can think, learn, and adapt.",
      buttonText: "Start AI Course",
    },
    {
      bgImage: "/data.jpg",
      title: "Data & Automation",
      description:
        "Master data analytics, visualization, and automation tools. Turn complex data into powerful business insights and workflows.",
      buttonText: "Learn Data Science",
    },
    {
      bgImage: "/webdev.jpg",
      title: "Web Development",
      description:
        "Design and build stunning, responsive, and full-stack web applications using HTML, CSS, JavaScript, React, and Node.js.",
      buttonText: "Explore Web Dev",
    },
    {
      bgImage: "/mobile.jpg",
      title: "Mobile App Development",
      description:
        "Create powerful Android and iOS apps with React Native or Flutter. Build seamless experiences across devices.",
      buttonText: "Start Mobile Dev",
    },
    {
      bgImage: "/cloud.jpg",
      title: "Cloud",
      description:
        "Learn to deploy and manage applications on AWS, Azure, and GCP. Gain real-world cloud infrastructure skills.",
      buttonText: "Explore Cloud Tech",
    },
    {
      bgImage: "/devops.jpg",
      title: "DevOps & Infrastructure",
      description:
        "Automate, monitor, and deploy applications with Docker, Jenkins, Kubernetes, and CI/CD pipelines for faster delivery.",
      buttonText: "Join DevOps Training",
    },
    {
      bgImage: "/testing.jpg",
      title: "Software Testing & Quality Assurance",
      description:
        "Ensure software quality through manual and automated testing. Learn Selenium, JMeter, and QA best practices.",
      buttonText: "Start Testing Course",
    },
    {
      bgImage: "/design.jpg",
      title: "Design & Creative Technologies",
      description:
        "Unlock your creativity with UI/UX design, motion graphics, and 3D visualization tools for modern digital experiences.",
      buttonText: "Learn Design",
    },
    {
      bgImage: "/internship.jpg",
      title: "Internship & Corporate Programs",
      description:
        "Gain hands-on experience with real-world projects. Learn, build, and grow your career through industry training.",
      buttonText: "Apply for Internship",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % sections.length;
      container.scrollTo({
        left: nextIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, sections.length]);

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-full overflow-x-hidden overflow-y-hidden relative snap-x snap-mandatory"
    >
      {sections.map((section, idx) => (
        <Section
          key={idx}
          bgImage={section.bgImage}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
        />
      ))}
    </div>
  );
}

function Section({ bgImage, title, description, buttonText }) {
  return (
    <section className="flex-shrink-0 w-screen h-screen relative flex items-center justify-center text-white snap-start">
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000617]/80 to-[#011c4f]/90"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex justify-center items-center w-full h-full px-6 sm:px-10 md:px-12"
      >
        <div
          className="bg-[#01213F]/80 backdrop-blur-lg border border-[#014075]/50 shadow-2xl
          rounded-3xl w-[95%] h-[90%] sm:w-[90%] sm:h-[85%] md:w-[85%] md:h-[80%]
          lg:w-[80%] lg:h-[75%] xl:w-[78%] xl:h-[70%]
          flex flex-col justify-center items-start text-left text-white p-8 sm:p-12 md:p-14 lg:p-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-6 max-w-3xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg lg:text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#FFC107] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#ffcf33] transition-all text-base sm:text-lg"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
