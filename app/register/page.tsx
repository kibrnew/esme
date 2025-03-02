import Link from "next/link";
import Image from "next/image";

export default function Register() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8 text-center">
          Join EMES
        </h1>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Individual Membership"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Individual Membership
              </h2>
              <p className="text-gray-600 mb-4">
                Join as a professional in the scientific or medical field.
              </p>
              <Link
                href="/register/individual"
                className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Register as Individual
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Institutional Membership"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Institutional Membership
              </h2>
              <p className="text-gray-600 mb-4">
                Register your organization for collaborative opportunities.
              </p>
              <Link
                href="/register/institution"
                className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Register as Institution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
