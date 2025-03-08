"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProfessionalExperience({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [experiences, setExperiences] = useState([
    {
      organization: "",
      position: "",
      key_responsibilities: "",
      start_time: "",
      end_time: "",
    },
  ]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [e.target.name]: e.target.value };
      }
      return exp;
    });
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        organization: "",
        position: "",
        key_responsibilities: "",
        start_time: "",
        end_time: "",
      },
    ]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ professional_experiences: experiences });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {experiences.map((exp, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Experience {index + 1}</h3>
          <div className="space-y-2">
            <Label htmlFor={`organization-${index}`}>Organization</Label>
            <Input
              id={`organization-${index}`}
              name="organization"
              value={exp.organization}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`position-${index}`}>Position</Label>
            <Input
              id={`position-${index}`}
              name="position"
              value={exp.position}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`key_responsibilities-${index}`}>
              Key Responsibilities
            </Label>
            <Textarea
              id={`key_responsibilities-${index}`}
              name="key_responsibilities"
              value={exp.key_responsibilities}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <div className="flex space-x-2">
              <div className="flex-1">
                <Label htmlFor={`start_time-${index}`}>Start Date</Label>
                <Input
                  type="date"
                  id={`start_time-${index}`}
                  name="start_time"
                  value={exp.start_time}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`end_time-${index}`}>End Date</Label>
                <Input
                  type="date"
                  id={`end_time-${index}`}
                  name="end_time"
                  value={exp.end_time}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>
          </div>
          {experiences.length > 1 && (
            <Button
              type="button"
              onClick={() => removeExperience(index)}
              variant="destructive"
              className="mt-2"
            >
              Remove Experience
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={addExperience} variant="outline">
        Add Experience
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
