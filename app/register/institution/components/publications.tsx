import { useState } from "react"

export default function Publications({ onSubmit, onBack }: { onSubmit: (data: any) => void; onBack: () => void }) {
  const [publications, setPublications] = useState([
    {
      title: "",
      authors: "",
      journal: "",
      publication_date: "",
      doi: "",
    },
  ])

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPublications = publications.map((pub, i) => {
      if (i === index) {
        return { ...pub, [e.target.name]: e.target.value }
      }
      return pub
    })
    setPublications(updatedPublications)
  }

  const addPublication = () => {
    setPublications([...publications, { title: "", authors: "", journal: "", publication_date: "", doi: "" }])
  }

  const removePublication = (index: number) => {
    setPublications(publications.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ publications })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {publications.map((pub, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Publication {index + 1}</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={pub.title}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="text"
              name="authors"
              placeholder="Authors"
              value={pub.authors}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="text"
              name="journal"
              placeholder="Journal"
              value={pub.journal}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="date"
              name="publication_date"
              placeholder="Publication Date"
              value={pub.publication_date}
              onChange={(e) => handleChange(index, e)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="text"
              name="doi"
              placeholder="DOI"
              value={pub.doi}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {publications.length > 1 && (
            <button type="button" onClick={() => removePublication(index)} className="mt-2 text-red-500">
              Remove Publication
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addPublication}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Publication
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

