import { useState } from "react"

export default function Patents({ onSubmit, onBack }: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [patents, setPatents] = useState([
    {
      title: "",
      description: "",
      date: "",
    },
  ])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedPatents = patents.map((patent, i) => {
      if (i === index) {
        return { ...patent, [e.target.name]: e.target.value }
      }
      return patent
    })
    setPatents(updatedPatents)
  }

  const addPatent = () => {
    setPatents([...patents, { title: "", description: "", date: "" }])
  }

  const removePatent = (index: number) => {
    setPatents(patents.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ patents })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {patents.map((patent, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Patent {index + 1}</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={patent.title}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={patent.description}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="date"
              name="date"
              placeholder="Patent Date"
              value={patent.date}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {patents.length > 1 && (
            <button type="button" onClick={() => removePatent(index)} className="mt-2 text-red-500">
              Remove Patent
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addPatent}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Patent
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

