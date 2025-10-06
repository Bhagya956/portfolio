"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import React from "react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Expence Tracker",
      description:
        "Expense Tracker App is an interactive and user-friendly tool that helps users manage their income and track expenses in real time. It offers dynamic calculations, spending categorization, and clear graphical insights to make budgeting simple and effective. The app is fully responsive and deployed via GitHub Pages.",
      image: "/images/expensetracker.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Bhagya956/ExpenseTrackerApp",
      liveUrl: "https://bhagya956.github.io/ExpenseTrackerApp/",
    },
    {
      id: 2,
      title: "Advanced Chat App",
      description:
        "Currently Building",
      image: "/images/alcazar.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Shubham10320/Travel-website",
      liveUrl: "https://alcazartravelling.netlify.app/html/index.html",
    },
    {
      id: 3,
      title: "Gemini App",
      description:
        "Need to check and correct it",
      image: "/images/oestin.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/kumod1164/Oestin_CW",
      liveUrl: "https://64dcecef4c77132933378ad2--silver-piroshki-29b668.netlify.app/index.html",
    },
  ]

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank")
  }

  const getTechStackColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "html":
        return "bg-orange-500"
      case "css":
        return "bg-blue-500"
      case "javascript":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-blue-600 pb-2">My Projects</span>
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTechStackColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>

                  <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleLinkClick(project.githubUrl)}
                      className="flex items-center gap-3 px-6 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-gray-800 hover:bg-gray-700"
                    >
                      <Github size={20} />
                      GitHub
                    </button>
                    <button
                      onClick={() => handleLinkClick(project.liveUrl)}
                      className="flex items-center gap-3 px-6 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-green-700 hover:bg-greem-700"
                    >
                      <ExternalLink size={20} />
                      View Live
                    </button>
                  </div>
                </div>
              </div>
              {index !== projects.length - 1 && (
                <hr className="my-12 border-t-2 border-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
