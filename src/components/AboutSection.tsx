import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-blue-600 pb-2">About Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/BhagyaLaxmi_Photo.jpeg"
                alt="Bhagya Laxmi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Learning Is My Passion</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Full Stack Developer</strong> with hands-on experience in the <strong>MERN stack</strong>. At <strong>Farmreach Technologies</strong>, I built <em>production-ready</em>, <em>responsive interfaces</em> using <strong>Next.js</strong>, <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. Integrated REST APIs and implemented over <strong>60+ </strong> GraphQL queries, mutations, and subscriptions using <strong>Apollo Client</strong> and <strong>Hasura</strong> as the GraphQL engine.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600">1+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="text-2xl font-bold text-green-600">5+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
