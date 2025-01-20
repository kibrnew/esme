'use client'

import { useState } from 'react'
import InstitutionDetails from './components/institution-details'
import ServicesOffered from './components/services-offered'
import MembershipFee from './components/membership-fee'

export default function InstitutionRegistration() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = (data: any) => {
    setFormData({ ...formData, ...data })
    if (step < 3) {
      nextStep()
    } else {
      // Submit the form data
      console.log('Form submitted:', formData)
      // TODO: Send data to API
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Institutional Membership Registration</h1>
      {step === 1 && <InstitutionDetails onSubmit={handleSubmit} />}
      {step === 2 && <ServicesOffered onSubmit={handleSubmit} onBack={prevStep} />}
      {step === 3 && <MembershipFee onSubmit={handleSubmit} onBack={prevStep} />}
    </div>
  )
}

