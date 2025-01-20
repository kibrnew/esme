import { useState } from 'react'

export default function PersonalInfo({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    sex: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
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
        <label htmlFor="fullName" className="block mb-1">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      {/* Add similar input fields for title, sex, dateOfBirth, nationality, email, phone */}
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Next</button>
    </form>
  )
}

