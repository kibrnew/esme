import { useState } from 'react'

export default function InstitutionDetails({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    telephone: '',
    email: '',
    contactPersonName: '',
    contactPersonPosition: '',
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
        <label htmlFor="name" className="block mb-1">Institution Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      {/* Add similar input fields for address, city, country, telephone, email */}
      <div>
        <label htmlFor="contactPersonName" className="block mb-1">Contact Person Name</label>
        <input
          type="text"
          id="contactPersonName"
          name="contactPersonName"
          value={formData.contactPersonName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="contactPersonPosition" className="block mb-1">Contact Person Position</label>
        <input
          type="text"
          id="contactPersonPosition"
          name="contactPersonPosition"
          value={formData.contactPersonPosition}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Next</button>
    </form>
  )
}

