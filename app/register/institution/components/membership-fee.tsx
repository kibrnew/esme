import { useState } from "react"

export default function MembershipFee({ onSubmit, onBack }: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [formData, setFormData] = useState({
    fee_amount: "",
    payment_method: "",
    receipt_file: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, receipt_file: e.target.files[0] })
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
        <label htmlFor="fee_amount" className="block mb-1">
          Fee Amount
        </label>
        <input
          type="number"
          id="fee_amount"
          name="fee_amount"
          value={formData.fee_amount}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="payment_method" className="block mb-1">
          Payment Method
        </label>
        <select
          id="payment_method"
          name="payment_method"
          value={formData.payment_method}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select</option>
          <option value="bank_transfer">Bank Transfer</option>
          <option value="credit_card">Credit Card</option>
          <option value="check">Check</option>
        </select>
      </div>
      <div>
        <label htmlFor="receipt_file" className="block mb-1">
          Upload Payment Receipt
        </label>
        <input
          type="file"
          id="receipt_file"
          name="receipt_file"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </form>
  )
}

