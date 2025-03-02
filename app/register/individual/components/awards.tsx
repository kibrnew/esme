import { useState } from "react"

export default function Awards({ onSubmit, onBack }: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [awards, setAwards] = useState([
    {
      title: "",
      awarding_body: "",
      year: "",
    },
  ])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAwards = awards.map((award, i) => {
      if (i === index) {
        return { ...award, [e.target.name]: e.target.value }
      }
      return award
    })
    setAwards(updatedAwards)
  }

  const addAward = () => {
    setAwards([...awards, { title: "", awarding_body: "", year: "" }])
  }

  const removeAward = (index: number) => {
    setAwards(awards.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ awards })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {awards.map((award, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Award {index + 1}</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={award.title}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="text"
              name="awarding_body"
              placeholder="Awarding Body"
              value={award.awarding_body}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={award.year}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {awards.length > 1 && (
            <button type="button" onClick={() => removeAward(index)} className="mt-2 text-red-500">
              Remove Award
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addAward} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add Award
      </button>
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

