import { useState } from "react"

export default function ServicesOffered({ onSubmit, onBack }: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [services, setServices] = useState([""])

  const handleChange = (index: number, value: string) => {
    const updatedServices = services.map((service, i) => (i === index ? value : service))
    setServices(updatedServices)
  }

  const addService = () => {
    setServices([...services, ""])
  }

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ services: services.filter((service) => service.trim() !== "") })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Services or Productions Offered</h2>
      {services.map((service, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="text"
            value={service}
            onChange={(e) => handleChange(index, e.target.value)}
            className="flex-grow px-3 py-2 border rounded"
            placeholder={`Service ${index + 1}`}
            required
          />
          {services.length > 1 && (
            <button
              type="button"
              onClick={() => removeService(index)}
              className="bg-red-500 text-white px-3 py-2 rounded"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addService}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Service
      </button>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Next
        </button>
      </div>
    </form>
  )
}

