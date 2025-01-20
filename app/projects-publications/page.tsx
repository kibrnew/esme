'use client'

import { useState, useEffect } from 'react'

interface Project {
  title: string
  description: string
  duration: string
}

interface Publication {
  title: string
  journal: string
  date: string
}

export default function ProjectsPublications() {
  const [projects, setProjects] = useState<Project[]>([])
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    // TODO: Fetch projects and publications from API
    // For now, we'll use mock data
    const mockProjects: Project[] = [
      { title: "AI in Healthcare", description: "Developing AI solutions for early disease detection", duration: "2022-2024" },
      { title: "Sustainable Energy", description: "Research on renewable energy sources", duration: "2021-2023" },
    ]

    const mockPublications: Publication[] = [
      { title: "Machine Learning Applications in Climate Change", journal: "Journal of Environmental Science", date: "2023-05-15" },
      { title: "Advancements in Quantum Computing", journal: "Quantum Physics Review", date: "2022-11-30" },
    ]

    setProjects(mockProjects)
    setPublications(mockPublications)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects and Publications</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Ongoing Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500">Duration: {project.duration}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Publications</h2>
        {publications.map((publication, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{publication.title}</h3>
            <p className="text-gray-600">{publication.journal}</p>
            <p className="text-sm text-gray-500">Published on: {publication.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

