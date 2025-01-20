'use client'

import { useState } from 'react'
import PersonalInfo from './components/personal-info'
import EducationalBackground from './components/educational-background'
import ProfessionalExperience from './components/professional-experience'
import SkillsAndAwards from './components/skills-and-awards'
import DocumentUpload from './components/document-upload'

export default function IndividualRegistration() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = (data: any) => {
    setFormData({ ...formData, ...data })
    if (step < 5) {
      nextStep()
    } else {
      // Submit the form data
      console.log('Form submitted:', formData)
      // TODO: Send data to API
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Individual Membership Registration</h1>
      {step === 1 && <PersonalInfo onSubmit={handleSubmit} />}
      {step === 2 && <EducationalBackground onSubmit={handleSubmit} onBack={prevStep} />}
      {step === 3 && <ProfessionalExperience onSubmit={handleSubmit} onBack={prevStep} />}
      {step === 4 && <SkillsAndAwards onSubmit={handleSubmit} onBack={prevStep} />}
      {step === 5 && <DocumentUpload onSubmit={handleSubmit} onBack={prevStep} />}
    </div>
  )
}

