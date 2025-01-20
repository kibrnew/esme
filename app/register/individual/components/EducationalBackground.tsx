import { useState } from 'react'

export default function EducationalBackground({ onSubmit, onBack }: { onSubmit: (data: any) => void, onBack: () => void }) {
  const [formData, setFormData] = useState({
    highestDegree: '',
    fieldOfStudy: '',
    university: '',
    graduationYear: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="highestDegree" className="block mb-1">Highest Degree</label>
        <input
          type="text"
          id="highestDegree"
          name="highestDegree"
          value={formData.highestDegree}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      {/* Add similar input fields for fieldOfStudy, university, graduationYear */}
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Next</button>
      </div>
    </form>
  )
}

