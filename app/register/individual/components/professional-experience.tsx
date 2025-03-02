import { useState } from "react"

export default function ProfessionalExperience({
  onSubmit,
  onBack,
}: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [experiences, setExperiences] = useState([
    {
      organization: "",
      position: "",
      key_responsibilities: "",
      start_time: "",
      end_time: "",
    },
  ])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [e.target.name]: e.target.value }
      }
      return exp
    })
    setExperiences(updatedExperiences)
  }

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        organization: "",
        position: "",
        key_responsibilities: "",
        start_time: "",
        end_time: "",
      },
    ])
  }

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ professional_experiences: experiences })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {experiences.map((exp, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Experience {index + 1}</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={exp.organization}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              name="key_responsibilities"
              placeholder="Key Responsibilities"
              value={exp.key_responsibilities}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <div className="flex space-x-2">
              <input
                type="date"
                name="start_time"
                placeholder="Start Date"
                value={exp.start_time}
                onChange={(e) => handleChange(index, e)}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="date"
                name="end_time"
                placeholder="End Date"
                value={exp.end_time}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          {experiences.length > 1 && (
            <button type="button" onClick={() => removeExperience(index)} className="mt-2 text-red-500">
              Remove Experience
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Experience
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

