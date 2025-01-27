import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <Image
          src="/mountain.jpg"
          alt="Nepal mountain landscape"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-[20s] scale-100 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex items-center justify-center">
          <div className="text-center text-white space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Empowering Nepal
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-gray-200">
              Together, we can make a difference
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
            >
              Donate Now
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We are dedicated to improving the lives of Nepali communities through sustainable development, education,
            and healthcare initiatives.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Impact Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${i}`}
                    alt={`Project ${i}`}
                    width={400}
                    height={200}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Project Title {i}</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project and its impact on the community.
                  </p>
                  <Link 
                    href={`/projects/${i}`} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "10,000+", label: "Lives Impacted", icon: "❤️" },
              { number: "50+", label: "Projects Completed", icon: "🎯" },
              { number: "100+", label: "Volunteers", icon: "🤝" },
              { number: "20+", label: "Years of Service", icon: "⭐" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-5xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.number}
                </p>
                <p className="text-xl text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Your support can help us create lasting change in Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-full transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

