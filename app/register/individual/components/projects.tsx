"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Projects({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      start: "",
      end: "",
    },
  ]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedProjects = projects.map((proj, i) => {
      if (i === index) {
        return { ...proj, [e.target.name]: e.target.value };
      }
      return proj;
    });
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", description: "", start: "", end: "" },
    ]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ projects });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {projects.map((proj, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Project {index + 1}</h3>
          <div className="space-y-2">
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              id={`title-${index}`}
              name="title"
              value={proj.title}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <Label htmlFor={`description-${index}`}>Description</Label>
            <Textarea
              id={`description-${index}`}
              name="description"
              value={proj.description}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <div className="flex space-x-2">
              <div className="flex-1">
                <Label htmlFor={`start-${index}`}>Start Date</Label>
                <Input
                  type="date"
                  id={`start-${index}`}
                  name="start"
                  value={proj.start}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="flex-1">
                <Label htmlFor={`end-${index}`}>End Date</Label>
                <Input
                  type="date"
                  id={`end-${index}`}
                  name="end"
                  value={proj.end}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>
          </div>
          {projects.length > 1 && (
            <Button
              type="button"
              onClick={() => removeProject(index)}
              variant="destructive"
              className="mt-2"
            >
              Remove Project
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={addProject} variant="outline">
        Add Project
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
