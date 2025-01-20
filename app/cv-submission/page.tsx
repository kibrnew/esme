'use client'

import { useState } from 'react'

export default function CVSubmission() {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setMessage('Please select a file')
      return
    }

    // TODO: Implement file upload to server
    // For now, we'll just simulate a successful upload
    setMessage('CV uploaded successfully')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CV Submission</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cv" className="block mb-1">Upload your CV (PDF format)</label>
          <input
            type="file"
            id="cv"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Submit CV</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  )
}

