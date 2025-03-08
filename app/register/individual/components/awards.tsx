"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Awards({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [awards, setAwards] = useState([
    {
      title: "",
      awarding_body: "",
      year: "",
    },
  ]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedAwards = awards.map((award, i) => {
      if (i === index) {
        return { ...award, [e.target.name]: e.target.value };
      }
      return award;
    });
    setAwards(updatedAwards);
  };

  const addAward = () => {
    setAwards([...awards, { title: "", awarding_body: "", year: "" }]);
  };

  const removeAward = (index: number) => {
    setAwards(awards.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ awards });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {awards.map((award, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Award {index + 1}</h3>
          <div className="space-y-2">
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              id={`title-${index}`}
              name="title"
              value={award.title}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`awarding_body-${index}`}>Awarding Body</Label>
            <Input
              id={`awarding_body-${index}`}
              name="awarding_body"
              value={award.awarding_body}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`year-${index}`}>Year</Label>
            <Input
              type="number"
              id={`year-${index}`}
              name="year"
              value={award.year}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          {awards.length > 1 && (
            <Button
              type="button"
              onClick={() => removeAward(index)}
              variant="destructive"
              className="mt-2"
            >
              Remove Award
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={addAward} variant="outline">
        Add Award
      </Button>
      <div className="flex justify-between">
        <Button type="button" onClick={onBack} variant="outline">
          Back
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
