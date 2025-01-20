import { useState } from 'react'

export default function ProfessionalExperience({ onSubmit, onBack }: { onSubmit: (data: any) => void, onBack: () => void }) {
  const [experiences, setExperiences] = useState([{ organization: '', position: '', startDate: '', endDate: '', responsibilities: '' }])

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
    setExperiences([...experiences, { organization: '', position: '', startDate: '', endDate: '', responsibilities: '' }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ experiences })
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
            <div className="flex space-x-2">
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <textarea
              name="responsibilities"
              placeholder="Key Responsibilities"
              value={exp.responsibilities}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={addExperience} className="bg-secondary text-white px-4 py-2 rounded">Add Experience</button>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Next</button>
      </div>
    </form>
  )
}

