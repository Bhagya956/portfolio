import Image from "next/image"

export default function SkillsSection() {
  const techStacks = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "/images/icon/tailwind.png" },
    { name: "Apollo Client", icon: "/images/icon/apollo.png" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Hasura", icon: "/images/icon/hasura.png" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redux", icon: "/images/icon/icons8-redux-48.png" },
    { name: "Mongoose", icon: "/images/icon/icons8-mongoose-48.png" },
  ]

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Firebase", icon: "/images/icon/icons8-firebase-48.png" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Github", icon: "https://www.svgrepo.com/show/217753/github.svg" },
    { name: "NPM", icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/npm_original_wordmark_logo_icon_146402.png" },
    { name: "Netlify", icon: "/images/icon/netlify.png" },
    { name: "Cyclic.sh", icon: "/images/icon/cyclic.png" },
    { name: "Apollo Client", icon: "/images/icon/apollo.png" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ]

  const SkillCard = ({ skill }: { skill: { name: string; icon: string } }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
          <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
        </div>
        <span className="text-gray-700 font-medium text-center">{skill.name}</span>
      </div>
    </div>
  )

  return (
    <section id="skills" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-blue-600 pb-2">My Skills</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Tech Stacks */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Tech Stacks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {techStacks.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools & Libraries */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Tools & Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {tools.map((tool) => (
                <SkillCard key={tool.name} skill={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
