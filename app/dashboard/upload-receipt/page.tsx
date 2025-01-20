'use client'

import { useState } from 'react'

export default function UploadReceipt() {
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
    setMessage('Receipt uploaded successfully')
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Upload Payment Receipt</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="receipt" className="block text-sm font-medium text-gray-700 mb-1">
            Upload your payment receipt (PDF or image format)
          </label>
          <input
            type="file"
            id="receipt"
            accept=".pdf,image/*"
            onChange={handleFileChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Upload Receipt
        </button>
      </form>
      {message && (
        <p className="mt-4 text-sm font-medium text-green-600">
          {message}
        </p>
      )}
    </div>
  )
}

