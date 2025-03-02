"use client"

import { useState } from "react"
import PersonalInfo from "./components/personal-info"
import Address from "./components/address"
import ContactInfo from "./components/contact-info"
import Education from "./components/education"
import ProfessionalExperience from "./components/professional-experience"
import Publications from "./components/publications"
import Projects from "./components/projects"
import Patents from "./components/patents"
import Awards from "./components/awards"

export default function IndividualRegistration() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = async (data: any) => {
    setFormData({ ...formData, ...data })
    if (step < 9) {
      nextStep()
    } else {
      // Submit the form data
      console.log("Form submitted:", formData)
      // TODO: Send data to API
      alert("Registration complete! An admin will verify your account.")
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onSubmit={handleSubmit} />
      case 2:
        return <Address onSubmit={handleSubmit} onBack={prevStep} />
      case 3:
        return <ContactInfo onSubmit={handleSubmit} onBack={prevStep} />
      case 4:
        return <Education onSubmit={handleSubmit} onBack={prevStep} />
      case 5:
        return <ProfessionalExperience onSubmit={handleSubmit} onBack={prevStep} />
      case 6:
        return <Publications onSubmit={handleSubmit} onBack={prevStep} />
      case 7:
        return <Projects onSubmit={handleSubmit} onBack={prevStep} />
      case 8:
        return <Patents onSubmit={handleSubmit} onBack={prevStep} />
      case 9:
        return <Awards onSubmit={handleSubmit} onBack={prevStep} />
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Individual Membership Registration</h1>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Step {step} of 9</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 9) * 100}%` }}></div>
        </div>
      </div>
      {renderStep()}
    </div>
  )
}

