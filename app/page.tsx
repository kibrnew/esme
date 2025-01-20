import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to ESME
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Empowering scientific and medical excellence through collaboration and innovation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <Link href="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                Join Us
              </Link>
              <Link href="/projects-publications" className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10">
                Explore Projects
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Scientific collaboration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Individual Memberships',
                  description: 'Join our community of leading scientists and medical professionals.',
                },
                {
                  name: 'Institutional Memberships',
                  description: 'Connect your organization with cutting-edge research and collaboration opportunities.',
                },
                {
                  name: 'Professional Networking',
                  description: 'Build relationships with peers and experts in your field.',
                },
                {
                  name: 'Resource Sharing',
                  description: 'Access a wealth of scientific resources and publications.',
                },
              ].map((service) => (
                <div key={service.name} className="relative">
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{service.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Recent Achievements
          </h2>
          <div className="mt-6 prose prose-blue text-gray-500 mx-auto">
            <p>
              Our members have made significant contributions in various fields, including:
            </p>
            <ul>
              <li>Breakthrough research in renewable energy technologies</li>
              <li>Innovative AI applications in healthcare diagnostics</li>
              <li>Advancements in quantum computing algorithms</li>
              <li>Novel treatments for neurodegenerative diseases</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

