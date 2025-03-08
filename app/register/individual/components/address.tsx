"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Address({
  onSubmit,
  onBack,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  onBack: () => void;
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState({
    residential: "",
    city: "",
    country: "",
    zip_code: "",
    employer: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="residential">Residential Address</Label>
        <Input
          id="residential"
          name="residential"
          value={formData.residential}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="zip_code">ZIP Code</Label>
        <Input
          id="zip_code"
          name="zip_code"
          value={formData.zip_code}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="employer">Employer</Label>
        <Input
          id="employer"
          name="employer"
          value={formData.employer}
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
