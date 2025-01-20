import { useState } from 'react'

export default function DocumentUpload({ onSubmit, onBack }: { onSubmit: (data: any) => void, onBack: () => void }) {
  const [formData, setFormData] = useState({
    cv: null,
    degreeCertificate: null,
    profilePicture: null,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cv" className="block mb-1">CV</label>
        <input
          type="file"
          id="cv"
          name="cv"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="degreeCertificate" className="block mb-1">Degree Certificate</label>
        <input
          type="file"
          id="degreeCertificate"
          name="degreeCertificate"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="profilePicture" className="block mb-1">Profile Picture</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Submit</button>
      </div>
    </form>
  )
}

