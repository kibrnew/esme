"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Publications({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [publications, setPublications] = useState([
    {
      title: "",
      journal: "",
      date: "",
    },
  ]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedPublications = publications.map((pub, i) => {
      if (i === index) {
        return { ...pub, [e.target.name]: e.target.value };
      }
      return pub;
    });
    setPublications(updatedPublications);
  };

  const addPublication = () => {
    setPublications([...publications, { title: "", journal: "", date: "" }]);
  };

  const removePublication = (index: number) => {
    setPublications(publications.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ publications });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {publications.map((pub, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Publication {index + 1}</h3>
          <div className="space-y-2">
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              id={`title-${index}`}
              name="title"
              value={pub.title}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`journal-${index}`}>Journal</Label>
            <Input
              id={`journal-${index}`}
              name="journal"
              value={pub.journal}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`date-${index}`}>Date</Label>
            <Input
              type="date"
              id={`date-${index}`}
              name="date"
              value={pub.date}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          {publications.length > 1 && (
            <Button
              type="button"
              onClick={() => removePublication(index)}
              variant="destructive"
              className="mt-2"
            >
              Remove Publication
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={addPublication} variant="outline">
        Add Publication
      </Button>
      <div className="flex justify-between">
        <Button type="button" onClick={onBack} variant="outline">
          Back
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Next"}
        </Button>
      </div>
    </form>
  );
}
