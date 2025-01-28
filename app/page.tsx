"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ArrowRight, Award, Book, Globe, Users } from "lucide-react";

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

const achievements = [
  {
    title: "Medical Device Breakthrough",
    description:
      "EMES members developed a new non-invasive diagnostic tool, improving patient outcomes by 40%",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Sustainable Engineering Innovation",
    description:
      "Our team contributed to the development of eco-friendly materials for construction",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AI in Healthcare",
    description:
      "EMES-led research resulted in more accurate disease prediction models",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Clean Energy Solutions",
    description:
      "We pioneered new techniques in solar energy, increasing efficiency by 25%",
    image: "/placeholder.svg?height=300&width=400",
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

const announcements = [
  {
    title: "Annual Conference 2023",
    description:
      "Join us for our biggest event of the year. Early bird registration now open!",
    date: "October 15-17, 2023",
  },
  {
    title: "New Certification Program",
    description:
      "EMES now offers advanced certifications in Biomedical Engineering.",
    date: "Enrolling for Fall 2023",
  },
  {
    title: "Research Grant Applications",
    description:
      "Apply now for our annual research grants in medical technology.",
    date: "Deadline: August 31, 2023",
  },
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

      {/* Previous Work/Achievements Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Image
                src={achievement.image || "/placeholder.svg"}
                alt={achievement.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
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

      {/* Announcements Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Announcements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="font-bold text-xl mb-2">{announcement.title}</h3>
              <p className="text-gray-600 mb-4">{announcement.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {announcement.date}
                </span>
                <button className="text-blue-600 hover:text-blue-800 flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
