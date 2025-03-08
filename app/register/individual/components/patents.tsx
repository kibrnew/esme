"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Patents({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [patents, setPatents] = useState([
    {
      title: "",
      description: "",
      date: "",
    },
  ]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedPatents = patents.map((patent, i) => {
      if (i === index) {
        return { ...patent, [e.target.name]: e.target.value };
      }
      return patent;
    });
    setPatents(updatedPatents);
  };

  const addPatent = () => {
    setPatents([...patents, { title: "", description: "", date: "" }]);
  };

  const removePatent = (index: number) => {
    setPatents(patents.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ patents });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {patents.map((patent, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Patent {index + 1}</h3>
          <div className="space-y-2">
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              id={`title-${index}`}
              name="title"
              value={patent.title}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`description-${index}`}>Description</Label>
            <Textarea
              id={`description-${index}`}
              name="description"
              value={patent.description}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`date-${index}`}>Date</Label>
            <Input
              type="date"
              id={`date-${index}`}
              name="date"
              value={patent.date}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          {patents.length > 1 && (
            <Button
              type="button"
              onClick={() => removePatent(index)}
              variant="destructive"
              className="mt-2"
            >
              Remove Patent
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={addPatent} variant="outline">
        Add Patent
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
