"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DocumentUpload } from "./document-upload"
import { Shield, Calendar, User, CheckCircle } from "lucide-react"

export function KYCVerification() {
  const [currentStep, setCurrentStep] = useState(1)
  const [documents, setDocuments] = useState({
    pan: null as File | null,
    aadhaarFront: null as File | null,
    aadhaarBack: null as File | null,
  })
  const [personalInfo, setPersonalInfo] = useState({
    dateOfBirth: "",
    panNumber: "",
    aadhaarNumber: "",
  })
  const [verificationStatus, setVerificationStatus] = useState({
    pan: "pending" as "pending" | "uploaded" | "verified" | "rejected",
    aadhaarFront: "pending" as "pending" | "uploaded" | "verified" | "rejected",
    aadhaarBack: "pending" as "pending" | "uploaded" | "verified" | "rejected",
  })

  const handleDocumentUpload = (file: File, type: string) => {
    setDocuments((prev) => ({ ...prev, [type.replace("-", "")]: file }))
    setVerificationStatus((prev) => ({
      ...prev,
      [type.replace("-", "")]: "uploaded",
    }))

    // Simulate verification process
    setTimeout(() => {
      setVerificationStatus((prev) => ({
        ...prev,
        [type.replace("-", "")]: "verified",
      }))
    }, 3000)
  }

  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handleFinalSubmit = () => {
    // Simulate final verification
    setCurrentStep(3)
  }

  const progress = ((currentStep - 1) / 2) * 100

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">eKYC Verification</h1>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Required
          </Badge>
        </div>
        <p className="text-muted-foreground">Complete your Know Your Customer (KYC) verification to start trading</p>
        <Progress value={progress} className="mt-4" />
      </div>

      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Personal Information</span>
            </CardTitle>
            <CardDescription>Please provide your personal details as per your government documents</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePersonalInfoSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="dob"
                      type="date"
                      className="pl-10"
                      value={personalInfo.dateOfBirth}
                      onChange={(e) => setPersonalInfo((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Number</Label>
                  <Input
                    id="pan"
                    placeholder="ABCDE1234F"
                    value={personalInfo.panNumber}
                    onChange={(e) => setPersonalInfo((prev) => ({ ...prev, panNumber: e.target.value.toUpperCase() }))}
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input
                  id="aadhaar"
                  placeholder="1234 5678 9012"
                  value={personalInfo.aadhaarNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
                    setPersonalInfo((prev) => ({ ...prev, aadhaarNumber: value }))
                  }}
                  maxLength={14}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Continue to Document Upload
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="grid gap-6">
            <DocumentUpload
              title="PAN Card"
              description="Upload a clear image of your PAN card"
              documentType="pan"
              onUpload={handleDocumentUpload}
              status={verificationStatus.pan}
            />

            <DocumentUpload
              title="Aadhaar Card (Front)"
              description="Upload the front side of your Aadhaar card"
              documentType="aadhaar-front"
              onUpload={handleDocumentUpload}
              status={verificationStatus.aadhaarFront}
            />

            <DocumentUpload
              title="Aadhaar Card (Back)"
              description="Upload the back side of your Aadhaar card"
              documentType="aadhaar-back"
              onUpload={handleDocumentUpload}
              status={verificationStatus.aadhaarBack}
            />
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(1)}>
              Back
            </Button>
            <Button
              onClick={handleFinalSubmit}
              disabled={Object.values(verificationStatus).some((status) => status !== "verified")}
            >
              Submit for Verification
            </Button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <Card>
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Verification Submitted!</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Your documents have been submitted for verification. You'll receive an email confirmation within 24-48
              hours.
            </p>
            <div className="space-y-2 mb-6">
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                Verification ID: KYC-2024-001234
              </Badge>
            </div>
            <Button asChild>
              <a href="/dashboard">Continue to Dashboard</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
