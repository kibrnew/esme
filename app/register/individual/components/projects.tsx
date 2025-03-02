import { useState } from "react"

export default function Projects({ onSubmit, onBack }: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      start: "",
      end: "",
    },
  ])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedProjects = projects.map((proj, i) => {
      if (i === index) {
        return { ...proj, [e.target.name]: e.target.value }
      }
      return proj
    })
    setProjects(updatedProjects)
  }

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", start: "", end: "" }])
  }

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ projects })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {projects.map((proj, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Project {index + 1}</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={proj.title}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={proj.description}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <div className="flex space-x-2">
              <input
                type="date"
                name="start"
                placeholder="Start Date"
                value={proj.start}
                onChange={(e) => handleChange(index, e)}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="date"
                name="end"
                placeholder="End Date"
                value={proj.end}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          {projects.length > 1 && (
            <button type="button" onClick={() => removeProject(index)} className="mt-2 text-red-500">
              Remove Project
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Project
      </button>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Next
        </button>
      </div>
    </form>
  )
}

