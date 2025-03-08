"use client";

import { useState } from "react";
import PersonalInfo from "./components/personal-info";
import Address from "./components/address";
import ContactInfo from "./components/contact-info";
import Education from "./components/education";
import ProfessionalExperience from "./components/professional-experience";
import Publications from "./components/publications";
import Projects from "./components/projects";
import Patents from "./components/patents";
import Awards from "./components/awards";
import { useToast } from "@/components/ui/use-toast";
import {
  register,
  updateUserAddress,
  updateUserContact,
  // updateUserEducation,
  updateUserProfessionalExperience,
  updateUserPublications,
  updateUserProjects,
  updateUserPatents,
  updateUserAwards,
} from "@/services/api";

export default function IndividualRegistration() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      let response;

      switch (step) {
        case 1:
          response = await register(data);
          setUserData(response.body);
          break;
        case 2:
          response = await updateUserAddress(data);
          break;
        case 3:
          response = await updateUserContact(data);
          break;
        // case 4:
        //   response = await updateUserEducation(data);
        //   break;
        case 4:
          response = await updateUserProfessionalExperience(data);
          break;
        case 5:
          response = await updateUserPublications(data);
          break;
        case 6:
          response = await updateUserProjects(data);
          break;
        case 7:
          response = await updateUserPatents(data);
          break;
        case 8:
          response = await updateUserAwards(data);
          break;
      }

      toast({
        title: "Success",
        description: response?.message || "Data submitted successfully",
      });

      if (step < 9) {
        nextStep();
      } else {
        // Registration complete
        toast({
          title: "Registration Complete",
          description:
            "Your registration is complete. An admin will verify your account.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to submit data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onSubmit={handleSubmit} isLoading={isLoading} />;
      case 2:
        return (
          <Address
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 3:
        return (
          <ContactInfo
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 4:
        return (
          <Education
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 5:
        return (
          <ProfessionalExperience
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 6:
        return (
          <Publications
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 7:
        return (
          <Projects
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 8:
        return (
          <Patents
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      case 9:
        return (
          <Awards
            onSubmit={handleSubmit}
            onBack={prevStep}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Individual Membership Registration
      </h1>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Step {step} of 9</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${(step / 9) * 100}%` }}
          ></div>
        </div>
      </div>
      {renderStep()}
    </div>
  );
}
