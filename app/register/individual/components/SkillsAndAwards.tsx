import { useState } from 'react'

export default function SkillsAndAwards({ onSubmit, onBack }: { onSubmit: (data: any) => void, onBack: () => void }) {
  const [formData, setFormData] = useState({
    skills: '',
    projects: '',
    awards: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="skills" className="block mb-1">Skills (comma-separated)</label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="projects" className="block mb-1">Projects</label>
        <textarea
          id="projects"
          name="projects"
          value={formData.projects}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="awards" className="block mb-1">Awards and Recognitions</label>
        <textarea
          id="awards"
          name="awards"
          value={formData.awards}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Next</button>
      </div>
    </form>
  )
}

