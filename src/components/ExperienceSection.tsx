"use client"

import Image from "next/image"

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "FARMINSTA",
      type: "Full-time",
      duration: "Sep 2024 - Present",
      period: "11 mos",
      location: "Hyderabad, India",
      logo: "/images/fi.png",
      logoColor: "bg-green-100",
    },
    {
      id: 2,
      title: "Campus Business Manager",
      company: "PrepBytes",
      type: "Internship",
      duration: "Sep 2021 - Nov 2021",
      period: "3 mos",
      location: "Remote",
      logo: "/images/pb.jpg",
      logoColor: "bg-blue-100",
    },
    {
      id: 3,
      title: "Student Partner",
      company: "Internshala",
      type: "Internship",
      duration: "Sep 2021 - Oct 2021",
      period: "2 mos",
      location: "Remote",
      logo: "/images/is.jpg",
      logoColor: "bg-cyan-100",
    },
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            <span className="border-b-4 border-blue-600 pb-2">Experience</span>
          </h2>
        </div>

        {/* Compact Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience Items */}
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className={``}>
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium w-fit">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 text-sm">
                    <span className="font-medium">{exp.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
