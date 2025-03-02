import { useState } from "react"

export default function InstitutionDetails({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    registration_number: "",
    year_established: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">
          Institution Name
        </label>
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
      <div>
        <label htmlFor="type" className="block mb-1">
          Institution Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select</option>
          <option value="University">University</option>
          <option value="Research Institute">Research Institute</option>
          <option value="Company">Company</option>
          <option value="Non-profit Organization">Non-profit Organization</option>
          <option value="Government Agency">Government Agency</option>
        </select>
      </div>
      <div>
        <label htmlFor="registration_number" className="block mb-1">
          Registration Number
        </label>
        <input
          type="text"
          id="registration_number"
          name="registration_number"
          value={formData.registration_number}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="year_established" className="block mb-1">
          Year Established
        </label>
        <input
          type="number"
          id="year_established"
          name="year_established"
          value={formData.year_established}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Next
      </button>
    </form>
  )
}

