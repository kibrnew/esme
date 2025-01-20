import { useState } from 'react'

export default function MembershipFee({ onSubmit, onBack }: { onSubmit: (data: any) => void, onBack: () => void }) {
  const [formData, setFormData] = useState({
    receiptFile: null,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, receiptFile: e.target.files[0] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Annual Membership Fee</h2>
      <div>
        <label htmlFor="receiptFile" className="block mb-1">Upload Payment Receipt</label>
        <input
          type="file"
          id="receiptFile"
          name="receiptFile"
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

