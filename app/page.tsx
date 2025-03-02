"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Award, Book, Globe, Users } from "lucide-react";
import { projects, publications, awards } from "@/utils/dummyData";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroSlides = [
  {
    title: "Innovating for Tomorrow",
    description: "EMES leads the way in engineering and medical innovation",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Building a Sustainable Future",
    description: "Our members are at the forefront of green technology",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Connecting Professionals",
    description:
      "Join our network of over 10,000 engineers and medical professionals",
    image: "/placeholder.svg?height=600&width=1200",
  },
];

const services = [
  { title: "Professional Workshops", icon: Book },
  { title: "Certifications", icon: Award },
  { title: "Networking Events", icon: Users },
  { title: "Global Conferences", icon: Globe },
];

const sponsors = [
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
  "/placeholder.svg?height=100&width=200",
];

export default function Home() {
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const sponsorSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative">
        <Slider {...heroSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[600px]">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Join Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Year: {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              <service.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-xl">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{publication.title}</h3>
                <p className="text-gray-600">Author: {publication.author}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Year: {publication.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <Slider {...sponsorSettings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="px-2">
              <Image
                src={sponsor || "/placeholder.svg"}
                alt={`Sponsor ${index + 1}`}
                width={200}
                height={100}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="font-bold text-xl mb-2">{award.title}</h3>
              <p className="text-gray-600 mb-4">{award.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(award.date_awarded).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
