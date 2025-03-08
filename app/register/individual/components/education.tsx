"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Education({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState({
    highest_degree: "",
    field_of_study: "",
    degree_file: "",
    university: "",
    graduation_year: "",
    specialization: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setFormData({
            ...formData,
            degree_file: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="highest_degree">Highest Degree</Label>
        <Select
          onValueChange={(value) => handleSelectChange("highest_degree", value)}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select highest degree" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Bachelor's Degree">
              Bachelor`&apos;`s Degree
            </SelectItem>
            <SelectItem value="Master's Degree">
              Master`&apos;`s Degree
            </SelectItem>
            <SelectItem value="PhD">PhD</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="field_of_study">Field of Study</Label>
        <Input
          id="field_of_study"
          name="field_of_study"
          value={formData.field_of_study}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="degree_file">Degree Certificate</Label>
        <Input
          type="file"
          id="degree_file"
          name="degree_file"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="university">University</Label>
        <Input
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="graduation_year">Graduation Year</Label>
        <Input
          type="number"
          id="graduation_year"
          name="graduation_year"
          value={formData.graduation_year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="specialization">Specialization</Label>
        <Input
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
      </div>
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
